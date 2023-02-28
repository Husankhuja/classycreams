package com.dairycoders.classycreams.service;

import com.dairycoders.classycreams.controller.response.OrderItemResponse;
import com.dairycoders.classycreams.entity.*;
import com.dairycoders.classycreams.repository.OrderPriceRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderPriceService {
    private final OrderPriceRepository orderPriceRepository;

    public OrderPriceService(OrderPriceRepository orderPriceRepository) {
        this.orderPriceRepository = orderPriceRepository;
    }

    public OrderPrice create(List<OrderItemResponse> orderItemResponses, double deliveryFee, double tip) {
        OrderPrice orderPrice = new OrderPrice();
        double subtotal = calculateSubtotal(orderItemResponses);

        orderPrice.setSubtotal(subtotal);
        orderPrice.setDeliveryFee(deliveryFee);
        orderPrice.setTip(tip);

        double tax = (subtotal + deliveryFee + tip) * 0.08875;
        double total = subtotal + deliveryFee + tip + tax;
        orderPrice.setTax(tax);
        orderPrice.setTotal(total);
        orderPriceRepository.save(orderPrice);
        return orderPrice;
    }

    private double calculateSubtotal(List<OrderItemResponse> orderItemResponses) {
        double subtotal = 0;
        // iterate through each OrderItem associated with order
        for (OrderItemResponse orderItemResponse : orderItemResponses) {
            // get price of product
            OrderItem orderItem = orderItemResponse.getOrderItem();
            subtotal += orderItem.getProduct().getBasePrice();

            // get price of all IceCreams added on
            List<OrderItemIceCream> orderItemIceCreams = orderItemResponse.getOrderItemIceCreams();
            for (OrderItemIceCream orderItemIceCream : orderItemIceCreams) {
                IceCream iceCream = orderItemIceCream.getIceCream();
                subtotal += iceCream.getBasePrice();
            }
            // get price of all Toppings added on
            List<OrderItemTopping> orderItemToppings = orderItemResponse.getOrderItemToppings();
            for (OrderItemTopping orderItemTopping : orderItemToppings) {
                Topping topping = orderItemTopping.getTopping();
                subtotal += topping.getBasePrice();
            }
        }
        return subtotal;
    }
}
