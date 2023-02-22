package com.dairycoders.classycreams.service;

import com.dairycoders.classycreams.controller.request.OrderItemRequest;
import com.dairycoders.classycreams.entity.*;
import com.dairycoders.classycreams.repository.OrderItemRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderItemService {
    private final OrderItemRepository orderItemRepository;
    private final ProductService productService;
    private final OrderItemIceCreamService orderItemIceCreamService;
    private final OrderItemToppingService orderItemToppingService;

    public OrderItemService(
            OrderItemRepository orderItemRepository,
            ProductService productService,
            OrderItemIceCreamService orderItemIceCreamService,
            OrderItemToppingService orderItemToppingService
    ) {
        this.orderItemRepository = orderItemRepository;
        this.productService = productService;
        this.orderItemIceCreamService = orderItemIceCreamService;
        this.orderItemToppingService = orderItemToppingService;
    }

    public List<OrderItem> initAll(
            Order order,
            List<OrderItemRequest> orderItemRequests
    ) {
        List<OrderItem> orderItems = orderItemRequests
                .stream()
                .map(orderItemRequest -> {
                    return init(order, orderItemRequest);
                })
                .toList();
        return orderItems;
    }

    public OrderItem init(
            Order order,
            OrderItemRequest orderItemRequest
    ) {
        OrderItem orderItem = new OrderItem();
        orderItem.setOrder(order);

        // getProductById and setProduct for orderItem
        Product product = productService.getById(orderItemRequest.getProductId());
        orderItem.setProduct(product);
        // create OrderItemToppings and setOrderItemToppings for orderItem
        List<Long> toppingIds = orderItemRequest.getToppingIds();
        List<OrderItemTopping> orderItemToppings = orderItemToppingService.initAll(orderItem, toppingIds);
        orderItem.setOrderItemToppings(orderItemToppings);
        // create OrderItemIceCreams and setOrderItemIceCreams for orderItem
        List<Long> iceCreamIds = orderItemRequest.getIceCreamIds();
        List<OrderItemIceCream> orderItemIceCreams = orderItemIceCreamService.initAll(orderItem, iceCreamIds);
        orderItem.setOrderItemIceCreams(orderItemIceCreams);

        return orderItem;
    }

    public void saveAll(
            List<OrderItem> orderItems
    ) {
        orderItems.forEach(orderItem -> save(orderItem));
    }

    public void save(
            OrderItem orderItem
    ) {
        orderItemRepository.save(orderItem);
        // save OrderItemIceCreams
        orderItemIceCreamService.saveAll(orderItem.getOrderItemIceCreams());
        // save OrderItemToppings
        orderItemToppingService.saveAll(orderItem.getOrderItemToppings());
    }
}
