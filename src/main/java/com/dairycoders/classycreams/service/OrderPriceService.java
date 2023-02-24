package com.dairycoders.classycreams.service;

import com.dairycoders.classycreams.entity.*;
import com.dairycoders.classycreams.repository.OrderPriceRepository;
import com.dairycoders.classycreams.util.OrderItemInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderPriceService {
    private final OrderPriceRepository orderPriceRepository;

    public OrderPriceService(OrderPriceRepository orderPriceRepository) {
        this.orderPriceRepository = orderPriceRepository;
    }

    public OrderPrice create(List<OrderItemInfo> orderItemInfos) {
        OrderPrice orderPrice = new OrderPrice();
/*        double subtotal = calculatePrice(order);
        orderPrice.setSubtotal(subtotal);*/
        // TODO add all other fields for OrderPrice
        orderPriceRepository.save(orderPrice);
        return orderPrice;
    }

/*    private double calculatePrice(Order order) {
        double subtotal = 0;
        // iterate through each OrderItem associated with order
        List<OrderItem> orderItems = order.getOrderItems();
        if (orderItems == null) return subtotal;
        for (OrderItem orderItem: orderItems) {
            // get price of product
            Product product = orderItem.getProduct();
            subtotal += product.getBasePrice();

            // get price of all IceCreams added on
            List<OrderItemIceCream> orderItemIceCreams = orderItem.getOrderItemIceCreams();
            for (OrderItemIceCream orderItemIceCream: orderItemIceCreams) {
                IceCream iceCream = orderItemIceCream.getIceCream();
                subtotal += iceCream.getBasePrice();
            }
            // get price of all Toppings added on
            List<OrderItemTopping> orderItemToppings = orderItem.getOrderItemToppings();
            for (OrderItemTopping orderItemTopping: orderItemToppings) {
                Topping topping = orderItemTopping.getTopping();
                subtotal += topping.getBasePrice();
            }
        }
        return subtotal;
    }*/
}
