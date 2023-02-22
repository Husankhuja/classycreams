package com.dairycoders.classycreams.service;

import com.dairycoders.classycreams.controller.request.OrderItemRequest;
import com.dairycoders.classycreams.controller.request.OrderRequest;
import com.dairycoders.classycreams.entity.Order;
import com.dairycoders.classycreams.entity.OrderItem;
import com.dairycoders.classycreams.entity.OrderPrice;
import com.dairycoders.classycreams.repository.OrderRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
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
            OrderPriceService orderPriceService
    ) {
        this.orderRepository = orderRepository;
        this.orderItemService = orderItemService;
        this.orderPriceService = orderPriceService;
    }

    public List<Order> getAll() {
        return orderRepository.findAll();
    }

    public Order getById(long id) {
        return orderRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Order not found"));
    }

    @Transactional
    public Order create(OrderRequest orderRequest) {
        Order order = new Order();
        // create orderItems and setOrderItems for order
        List<OrderItemRequest> orderItemRequests = orderRequest.getOrderItems();
        List<OrderItem> orderItems = orderItemService.initAll(order, orderItemRequests);
        order.setOrderItems(orderItems);
        // create price and setOrderPrice for order
        OrderPrice orderPrice = orderPriceService.create(order);
        order.setOrderPrice(orderPrice);
        // save order and orderItems
        orderRepository.save(order);
        orderItemService.saveAll(orderItems);
        return order;
    }
}
