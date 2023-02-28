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
                .orElseThrow(() -> new EntityNotFoundException("Order not found"));

        // check if user is admin or order belongs to user
        if (user.getRole() != UserRole.ADMIN && user.getUserId() != order.getUser().getUserId()) {
            throw new Exception("User Not Authorized");
        }

        List<OrderItemResponse> orderItemResponses = orderItemService.getByOrderId(order.getOrderId());
        return new OrderResponse(order, orderItemResponses);
    }

    @Transactional
    public OrderResponse create(User user, OrderRequest orderRequest) {
        Order order = new Order();
        order.setUser(user);

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
        List<OrderItemResponse> orderItemResponses = orderItemService.initAll(order, orderItemRequests);

        // create price and setOrderPrice for order
        OrderPrice orderPrice = orderPriceService.create(orderItemResponses, deliveryFee, tip);
        order.setOrderPrice(orderPrice);

        // save order and orderItems
        orderRepository.save(order);
        orderItemService.saveAll(orderItemResponses);
        
        return new OrderResponse(order, orderItemResponses);
    }
}
