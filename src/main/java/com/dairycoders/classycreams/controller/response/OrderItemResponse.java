package com.dairycoders.classycreams.controller.response;

import com.dairycoders.classycreams.entity.OrderItem;
import com.dairycoders.classycreams.entity.OrderItemIceCream;
import com.dairycoders.classycreams.entity.OrderItemTopping;

import java.util.List;

public class OrderItemResponse {
    private OrderItem orderItem;
    private List<OrderItemIceCream> orderItemIceCreams;
    private List<OrderItemTopping> orderItemToppings;

    public OrderItemResponse() {
    }

    public OrderItemResponse(OrderItem orderItem, List<OrderItemIceCream> orderItemIceCreams, List<OrderItemTopping> orderItemToppings) {
        this.orderItem = orderItem;
        this.orderItemIceCreams = orderItemIceCreams;
        this.orderItemToppings = orderItemToppings;
    }

    @Override
    public String toString() {
        return "OrderItemResponse{" +
                "orderItem=" + orderItem +
                ", orderItemIceCreams=" + orderItemIceCreams +
                ", orderItemToppings=" + orderItemToppings +
                '}';
    }

    public OrderItem getOrderItem() {
        return orderItem;
    }

    public void setOrderItem(OrderItem orderItem) {
        this.orderItem = orderItem;
    }

    public List<OrderItemIceCream> getOrderItemIceCreams() {
        return orderItemIceCreams;
    }

    public void setOrderItemIceCreams(List<OrderItemIceCream> orderItemIceCreams) {
        this.orderItemIceCreams = orderItemIceCreams;
    }

    public List<OrderItemTopping> getOrderItemToppings() {
        return orderItemToppings;
    }

    public void setOrderItemToppings(List<OrderItemTopping> orderItemToppings) {
        this.orderItemToppings = orderItemToppings;
    }
}
