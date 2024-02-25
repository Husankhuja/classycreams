package com.dairycoders.classycreams.service;

import com.dairycoders.classycreams.controller.response.OrderItemIceCreamResponse;
import com.dairycoders.classycreams.entity.IceCream;
import com.dairycoders.classycreams.entity.OrderItem;
import com.dairycoders.classycreams.entity.OrderItemIceCream;
import com.dairycoders.classycreams.repository.OrderItemIceCreamRepository;
import jakarta.transaction.Transactional;
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

    public List<OrderItemIceCreamResponse> getByOrderItemId(long orderItemId) {
        List<OrderItemIceCream> orderItemIceCreams = orderItemIceCreamRepository.findAllByOrderItemId(orderItemId);
        return orderItemIceCreams
            .stream()
            .map(orderItemIceCream -> {
                long iceCreamId = orderItemIceCream.getIceCreamId();
                IceCream iceCream = iceCreamService.getById(iceCreamId);
                return new OrderItemIceCreamResponse(
                    orderItemIceCream,
                    iceCream
                );
            })
            .toList();
    }

    public List<OrderItemIceCreamResponse> initAll(List<Long> iceCreamIds) {
        return iceCreamIds
                .stream()
                .map(iceCreamId -> new OrderItemIceCreamResponse(
                        init(iceCreamId),
                        iceCreamService.getById(iceCreamId)
                ))
                .toList();
    }

    public OrderItemIceCream init(long iceCreamId) {
        return new OrderItemIceCream(iceCreamId);
    }

    @Transactional
    public void saveAll(long orderItemId, List<OrderItemIceCreamResponse> orderItemIceCreamResponses) {
        orderItemIceCreamResponses.forEach(orderItemIceCreamResponse -> {
            OrderItemIceCream orderItemIceCream = orderItemIceCreamResponse.getOrderItemIceCream();
            orderItemIceCream.setOrderItemId(orderItemId);
            orderItemIceCreamRepository.save(orderItemIceCream);
        });
    }

    @Transactional
    public void deleteByOrderItemId(long orderItemId) {
        orderItemIceCreamRepository.deleteAllByOrderItemId(orderItemId);
    }
}

