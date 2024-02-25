package com.dairycoders.classycreams.controller.response;

import com.dairycoders.classycreams.entity.OrderItemTopping;
import com.dairycoders.classycreams.entity.Topping;

public class OrderItemToppingResponse {
    private OrderItemTopping orderItemTopping;
    private Topping topping;

    public OrderItemToppingResponse() {
    }

    public OrderItemToppingResponse(OrderItemTopping orderItemTopping, Topping topping) {
        this.orderItemTopping = orderItemTopping;
        this.topping = topping;
    }

    @Override
    public String toString() {
        return "OrderItemToppingResponse{" +
                "orderItemTopping=" + orderItemTopping +
                ", topping=" + topping +
                '}';
    }

    public OrderItemTopping getOrderItemTopping() {
        return orderItemTopping;
    }

    public void setOrderItemTopping(OrderItemTopping orderItemTopping) {
        this.orderItemTopping = orderItemTopping;
    }

    public Topping getTopping() {
        return topping;
    }

    public void setTopping(Topping topping) {
        this.topping = topping;
    }
}
