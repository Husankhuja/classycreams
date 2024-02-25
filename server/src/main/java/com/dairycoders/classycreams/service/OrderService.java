package com.dairycoders.classycreams.service;

import com.dairycoders.classycreams.controller.request.OrderItemRequest;
import com.dairycoders.classycreams.controller.request.OrderRequest;
import com.dairycoders.classycreams.controller.response.OrderItemResponse;
import com.dairycoders.classycreams.controller.response.OrderResponse;
import com.dairycoders.classycreams.entity.Order;
import com.dairycoders.classycreams.entity.OrderPrice;
import com.dairycoders.classycreams.entity.User;
import com.dairycoders.classycreams.entity.enums.UserRole;
import com.dairycoders.classycreams.repository.OrderRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import javax.naming.AuthenticationException;
import java.util.List;

@Service
public class OrderService {
    private final OrderRepository orderRepository;
    private final OrderItemService orderItemService;
    private final OrderPriceService orderPriceService;

    public OrderService(
            OrderRepository orderRepository,
            OrderItemService orderItemService,
            OrderPriceService orderPriceService) {
        this.orderRepository = orderRepository;
        this.orderItemService = orderItemService;
        this.orderPriceService = orderPriceService;
    }

    public List<Order> getAll() {
        return orderRepository.findAll();
    }

    public OrderResponse getById(User user, long id) throws Exception {
        Order order = orderRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("ORDER_NOT_FOUND"));

        // check if user is admin or order belongs to user
        if (user.getRole() != UserRole.ADMIN && user.getUserId() != order.getUserId()) {
            throw new AuthenticationException("USER_NOT_AUTHORIZED");
        }

        List<OrderItemResponse> orderItemResponses = orderItemService.getByOrderId(order.getOrderId());
        OrderPrice orderPrice = orderPriceService.getById(order.getOrderPriceId());
        return new OrderResponse(order, orderItemResponses, orderPrice);
    }

    @Transactional
    public OrderResponse create(User user, OrderRequest orderRequest) {
        Order order = new Order();
        order.setUserId(user.getUserId());

        // check if order is delivery
        boolean isDelivery = orderRequest.getIsDelivery();
        order.setIsDelivery(isDelivery);
        if (isDelivery) {
            order.setDeliveryAddress(orderRequest.getAddress());
        }
        double deliveryFee = isDelivery ? 4.99 : 0;
        double tip = orderRequest.getTip();

        // create orderItems and setOrderItems for order
        List<OrderItemRequest> orderItemRequests = orderRequest.getOrderItems();
        List<OrderItemResponse> orderItemResponses = orderItemService.initAll(orderItemRequests);

        // create price and setOrderPrice for order
        OrderPrice orderPrice = orderPriceService.create(orderItemResponses, deliveryFee, tip);
        order.setOrderPriceId(orderPrice.getOrderPriceId());

        // save order and orderItems
        orderRepository.save(order);
        orderItemService.saveAll(order.getOrderId() ,orderItemResponses);
        
        return new OrderResponse(order, orderItemResponses, orderPrice);
    }

    public void deleteById(long id) {
        /*
            This is only for testing
            Shouldn't be able to delete order without first refunding if payed
            or other checks
         */
        Order order = orderRepository.findById(id).orElseThrow(() -> {throw new EntityNotFoundException("ORDER_NOT_FOUND");});
        // delete order items first
        orderItemService.deleteByOrderId(id);
        orderRepository.delete(order);
    }
}
