package com.dairycoders.classycreams.service;

import com.dairycoders.classycreams.entity.OrderItem;
import com.dairycoders.classycreams.entity.OrderItemTopping;
import com.dairycoders.classycreams.entity.Topping;
import com.dairycoders.classycreams.repository.OrderItemToppingRepository;
import com.dairycoders.classycreams.repository.ToppingRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderItemToppingService {

    private final OrderItemToppingRepository orderItemToppingRepository;
    private final ToppingRepository toppingRepository;

    public OrderItemToppingService(OrderItemToppingRepository orderItemToppingRepository, ToppingRepository toppingRepository) {
        this.orderItemToppingRepository = orderItemToppingRepository;
        this.toppingRepository = toppingRepository;
    }

    public List<OrderItemTopping> initAll(OrderItem orderItem, List<Long> toppingIds) {
        List<Topping> toppings = toppingRepository.findAllById(toppingIds);
        return toppings.stream()
                .map(topping -> create(orderItem, topping))
                .toList();
    }

    public OrderItemTopping create(OrderItem orderItem, Topping topping) {
        OrderItemTopping orderItemTopping = new OrderItemTopping();
        orderItemTopping.setOrderItem(orderItem);
        orderItemTopping.setTopping(topping);
        return orderItemTopping;
    }

    public void saveAll(List<OrderItemTopping> orderItemToppings) {
        orderItemToppingRepository.saveAll(orderItemToppings);
    }
}
