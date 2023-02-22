package com.dairycoders.classycreams.service;

import com.dairycoders.classycreams.entity.IceCream;
import com.dairycoders.classycreams.entity.OrderItem;
import com.dairycoders.classycreams.entity.OrderItemIceCream;
import com.dairycoders.classycreams.repository.OrderItemIceCreamRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderItemIceCreamService {

    private final OrderItemIceCreamRepository orderItemIceCreamRepository;
    private final IceCreamService iceCreamService;

    public OrderItemIceCreamService(
            OrderItemIceCreamRepository orderItemIceCreamRepository,
            IceCreamService iceCreamService
    ) {
        this.orderItemIceCreamRepository = orderItemIceCreamRepository;
        this.iceCreamService = iceCreamService;
    }

    public List<OrderItemIceCream> initAll(OrderItem orderItem, List<Long> iceCreamIds) {
        List<IceCream> iceCreams = iceCreamIds.stream().map(iceCreamService::getById).toList();
        return iceCreams.stream().map(iceCream -> init(orderItem, iceCream)).toList();
    }

    public OrderItemIceCream init(OrderItem orderItem, IceCream iceCream) {
        OrderItemIceCream orderItemIceCream = new OrderItemIceCream();
        orderItemIceCream.setOrderItem(orderItem);
        orderItemIceCream.setIceCream(iceCream);
        return orderItemIceCream;
    }

    public List<OrderItemIceCream> saveAll(List<OrderItemIceCream> orderItemIceCreams) {
        return orderItemIceCreamRepository.saveAll(orderItemIceCreams);
    }
}

