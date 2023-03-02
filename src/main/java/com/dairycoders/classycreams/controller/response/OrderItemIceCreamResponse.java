package com.dairycoders.classycreams.controller.response;

import com.dairycoders.classycreams.entity.IceCream;
import com.dairycoders.classycreams.entity.OrderItemIceCream;

public class OrderItemIceCreamResponse {
    private OrderItemIceCream orderItemIceCream;
    private IceCream iceCream;

    public OrderItemIceCreamResponse() {
    }

    public OrderItemIceCreamResponse(OrderItemIceCream orderItemIceCream, IceCream iceCream) {
        this.orderItemIceCream = orderItemIceCream;
        this.iceCream = iceCream;
    }

    @Override
    public String toString() {
        return "OrderItemIceCreamResponse{" +
                "orderItemIceCream=" + orderItemIceCream +
                ", iceCream=" + iceCream +
                '}';
    }

    public OrderItemIceCream getOrderItemIceCream() {
        return orderItemIceCream;
    }

    public void setOrderItemIceCream(OrderItemIceCream orderItemIceCream) {
        this.orderItemIceCream = orderItemIceCream;
    }

    public IceCream getIceCream() {
        return iceCream;
    }

    public void setIceCream(IceCream iceCream) {
        this.iceCream = iceCream;
    }
}
