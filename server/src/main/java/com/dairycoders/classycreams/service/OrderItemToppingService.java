package com.dairycoders.classycreams.service;

import com.dairycoders.classycreams.controller.response.OrderItemToppingResponse;
import com.dairycoders.classycreams.entity.OrderItemTopping;
import com.dairycoders.classycreams.entity.Topping;
import com.dairycoders.classycreams.repository.OrderItemToppingRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderItemToppingService {

    private final OrderItemToppingRepository orderItemToppingRepository;
    private final ToppingService toppingService;

    public OrderItemToppingService(OrderItemToppingRepository orderItemToppingRepository, ToppingService toppingService) {
        this.orderItemToppingRepository = orderItemToppingRepository;
        this.toppingService = toppingService;
    }

    public List<OrderItemToppingResponse> getByOrderItemId(long orderItemId) {
        List<OrderItemTopping> orderItemToppings = orderItemToppingRepository.findAllByOrderItemId(orderItemId);
        return orderItemToppings
                .stream()
                .map(orderItemTopping -> {
                    long toppingId = orderItemTopping.getToppingId();
                    Topping topping = toppingService.getById(toppingId);
                    return new OrderItemToppingResponse(
                      orderItemTopping,
                      topping
                    );
                })
                .toList();
    }

    public List<OrderItemToppingResponse> initAll(List<Long> toppingIds) {
        return toppingIds
                .stream()
                .map(toppingId -> new OrderItemToppingResponse(
                    init(toppingId),
                    toppingService.getById(toppingId)
                ))
                .toList();
    }

    public OrderItemTopping init(long toppingId) {
        return new OrderItemTopping(toppingId);
    }

    @Transactional
    public void saveAll(long orderItemId ,List<OrderItemToppingResponse> orderItemToppingResponses) {
        orderItemToppingResponses.forEach(orderItemToppingResponse -> {
            OrderItemTopping orderItemTopping = orderItemToppingResponse.getOrderItemTopping();
            orderItemTopping.setOrderItemId(orderItemId);
            orderItemToppingRepository.save(orderItemTopping);
        });
    }

    @Transactional
    public void deleteByOrderItemId(long orderItemId) {
        orderItemToppingRepository.deleteAllByOrderItemId(orderItemId);
    }
}
