package com.dairycoders.classycreams.service;

import com.dairycoders.classycreams.controller.request.OrderItemRequest;
import com.dairycoders.classycreams.entity.*;
import com.dairycoders.classycreams.repository.OrderItemRepository;
import com.dairycoders.classycreams.util.OrderItemInfo;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Collections;
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

    public List<OrderItemInfo> initAll(
            Order order,
            List<OrderItemRequest> orderItemRequests
    ) {
        List<OrderItemInfo> orderItemInfos = orderItemRequests
                .stream()
                .map(orderItemRequest -> {
                    return init(order, orderItemRequest);
                })
                .toList();
        return orderItemInfos;
    }

    public OrderItemInfo init(
            Order order,
            OrderItemRequest orderItemRequest
    ) {
        OrderItem orderItem = new OrderItem();
        orderItem.setOrder(order);

        // getProductById and setProduct for orderItem
        Product product = productService.getById(orderItemRequest.getProductId());
        System.out.println("\n\n\n" + product + "\n\n\n");
        orderItem.setProduct(product);
        // init OrderItemToppings
        List<Long> toppingIds = orderItemRequest.getToppingIds();
        List<OrderItemTopping> orderItemToppings = orderItemToppingService.initAll(orderItem, toppingIds);

        // init OrderItemIceCreams
        List<Long> iceCreamIds = orderItemRequest.getIceCreamIds();
        List<OrderItemIceCream> orderItemIceCreams = orderItemIceCreamService.initAll(orderItem, iceCreamIds);

        // save orderItem and addons to orderItemInfo
        OrderItemInfo orderItemInfo = new OrderItemInfo(orderItem, orderItemIceCreams, orderItemToppings);
        return orderItemInfo;
    }

    public void saveAll(
            List<OrderItemInfo> orderItemInfos
    ) {
        orderItemInfos.forEach(orderItemInfo -> save(orderItemInfo));
    }

    public void save(
            OrderItemInfo orderItemInfo
    ) {
        List<OrderItemIceCream> orderItemIceCreams = orderItemInfo.getOrderItemIceCreams();
        List<OrderItemTopping> orderItemToppings = orderItemInfo.getOrderItemToppings();
        OrderItem orderItem = orderItemInfo.getOrderItem();
        orderItemRepository.save(orderItem);
        // save OrderItemIceCreams
        orderItemIceCreamService.saveAll(orderItemIceCreams);
        // save OrderItemToppings
        orderItemToppingService.saveAll(orderItemToppings);
    }
}
