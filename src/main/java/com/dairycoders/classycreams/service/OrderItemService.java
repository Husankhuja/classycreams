package com.dairycoders.classycreams.service;

import com.dairycoders.classycreams.controller.request.OrderItemRequest;
import com.dairycoders.classycreams.controller.response.OrderItemIceCreamResponse;
import com.dairycoders.classycreams.controller.response.OrderItemResponse;
import com.dairycoders.classycreams.controller.response.OrderItemToppingResponse;
import com.dairycoders.classycreams.entity.*;
import com.dairycoders.classycreams.repository.OrderItemRepository;
import jakarta.transaction.Transactional;
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
                .findAllByOrderId(orderId)
                .stream()
                .map(orderItem -> {
                    long orderItemId = orderItem.getOrderItemId();
                    Product product = productService.getById(orderItem.getProductId());
                    List<OrderItemIceCreamResponse> orderItemIceCreamResponses = orderItemIceCreamService
                            .getByOrderItemId(orderItemId);
                    List<OrderItemToppingResponse> orderItemToppingResponses= orderItemToppingService
                            .getByOrderItemId(orderItemId);
                    return new OrderItemResponse(
                            orderItem,
                            product,
                            orderItemIceCreamResponses,
                            orderItemToppingResponses
                    );
                })
                .toList();

    }

    @Transactional
    public List<OrderItemResponse> initAll(
            List<OrderItemRequest> orderItemRequests) {
        List<OrderItemResponse> OrderItemResponses = orderItemRequests
                .stream()
                .map(orderItemRequest -> init(orderItemRequest))
                .toList();
        return OrderItemResponses;
    }

    @Transactional
    public OrderItemResponse init(
            OrderItemRequest orderItemRequest) {
        OrderItem orderItem = new OrderItem();

        // getProductById and setProductId for orderItem
        long productId = orderItemRequest.getProductId();
        orderItem.setProductId(productId);
        System.out.println("print the Id here " + productId);
        Product product = productService.getById(productId);
        System.out.println(product);
        // init OrderItemToppings
        List<Long> toppingIds = orderItemRequest.getToppingIds();
        List<OrderItemToppingResponse> orderItemToppingResponses = orderItemToppingService.initAll(toppingIds);

        // init OrderItemIceCreams
        List<Long> iceCreamIds = orderItemRequest.getIceCreamIds();
        List<OrderItemIceCreamResponse> orderItemIceCreamResponses = orderItemIceCreamService.initAll(iceCreamIds);

        // save orderItem and addons to OrderItemResponse
        OrderItemResponse orderItemResponse = new OrderItemResponse(
                orderItem,
                product,
                orderItemIceCreamResponses,
                orderItemToppingResponses
        );
        return orderItemResponse;
    }

    @Transactional
    public void saveAll(long orderId ,List<OrderItemResponse> orderItemResponses) {
        orderItemResponses.forEach(orderItemResponse -> save(orderId, orderItemResponse));
    }

    @Transactional
    public void save(
            long orderId,
            OrderItemResponse orderItemResponse
    ) {
        List<OrderItemIceCreamResponse> orderItemIceCreamResponses = orderItemResponse.getOrderItemIceCreamResponses();
        List<OrderItemToppingResponse> orderItemToppingResponses = orderItemResponse.getOrderItemToppingResponses();
        OrderItem orderItem = orderItemResponse.getOrderItem();

        orderItem.setOrderId(orderId);
        orderItemRepository.save(orderItem);

        // save orderItem IceCreams and Toppings respectively
        long orderItemId = orderItem.getOrderItemId();
        orderItemIceCreamService.saveAll(orderItemId, orderItemIceCreamResponses);
        orderItemToppingService.saveAll(orderItemId, orderItemToppingResponses);
    }

    @Transactional
    public void deleteByOrderId(long orderId) {
        // for each order item with orderId id
        orderItemRepository.findAllByOrderId(orderId).forEach(orderItem -> {
            long orderItemId = orderItem.getOrderItemId();
            // delete order item icecreams and toppings
            orderItemIceCreamService.deleteByOrderItemId(orderItemId);
            orderItemToppingService.deleteByOrderItemId(orderItemId);
            // delete order item
            orderItemRepository.delete(orderItem);
        });


    }
}
