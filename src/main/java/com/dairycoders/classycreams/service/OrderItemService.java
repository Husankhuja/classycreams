package com.dairycoders.classycreams.service;

import com.dairycoders.classycreams.controller.request.OrderItemRequest;
import com.dairycoders.classycreams.controller.response.OrderItemResponse;
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
            OrderItemToppingService orderItemToppingService) {
        this.orderItemRepository = orderItemRepository;
        this.productService = productService;
        this.orderItemIceCreamService = orderItemIceCreamService;
        this.orderItemToppingService = orderItemToppingService;
    }

    public List<OrderItemResponse> getByOrderId(long orderId) {
        return orderItemRepository
                .findByOrderId(orderId)
                .stream()
                .map(orderItem -> {
                    List<OrderItemIceCream> orderItemIceCreams = orderItemIceCreamService
                            .getByOrderItemId(orderItem.getOrderItemId());
                    List<OrderItemTopping> orderItemToppings= orderItemToppingService
                            .getByOrderItemId(orderItem.getOrderItemId());
                    return new OrderItemResponse(
                            orderItem,
                            orderItemIceCreams,
                            orderItemToppings
                    );
                })
                .toList();

    }

    public List<OrderItemResponse> initAll(
            Order order,
            List<OrderItemRequest> orderItemRequests) {
        List<OrderItemResponse> OrderItemResponses = orderItemRequests
                .stream()
                .map(orderItemRequest -> {
                    return init(order, orderItemRequest);
                })
                .toList();
        return OrderItemResponses;
    }

    public OrderItemResponse init(
            Order order,
            OrderItemRequest orderItemRequest) {
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

        // save orderItem and addons to OrderItemResponse
        OrderItemResponse orderItemResponse = new OrderItemResponse(orderItem, orderItemIceCreams, orderItemToppings);
        return orderItemResponse;
    }

    public void saveAll(List<OrderItemResponse> orderItemResponses) {
        orderItemResponses.forEach(orderItemResponse -> save(orderItemResponse));
    }

    public void save(
            OrderItemResponse orderItemResponse) {
        List<OrderItemIceCream> orderItemIceCreams = orderItemResponse.getOrderItemIceCreams();
        List<OrderItemTopping> orderItemToppings = orderItemResponse.getOrderItemToppings();
        OrderItem orderItem = orderItemResponse.getOrderItem();
        orderItemRepository.save(orderItem);
        // save OrderItemIceCreams
        orderItemIceCreamService.saveAll(orderItemIceCreams);
        // save OrderItemToppings
        orderItemToppingService.saveAll(orderItemToppings);
    }
}
