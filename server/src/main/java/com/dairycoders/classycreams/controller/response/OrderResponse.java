package com.dairycoders.classycreams.controller.response;

import com.dairycoders.classycreams.entity.Order;
import com.dairycoders.classycreams.entity.OrderPrice;
import com.dairycoders.classycreams.entity.enums.OrderStatus;
import com.dairycoders.classycreams.entity.enums.PaymentStatus;

import java.time.LocalDateTime;
import java.util.List;

public class OrderResponse {
    private Order order;
    private List<OrderItemResponse> orderItems;
    private OrderPrice price;

    public OrderResponse() {
    }

    public OrderResponse(Order order, List<OrderItemResponse> orderItems, OrderPrice price) {
        this.order = order;
        this.orderItems = orderItems;
        this.price = price;
    }

    @Override
    public String toString() {
        return "OrderResponse{" +
                "order=" + order +
                ", orderItems=" + orderItems +
                ", price=" + price +
                '}';
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    public List<OrderItemResponse> getOrderItemResponses() {
        return orderItems;
    }

    public void setOrderItemResponses(List<OrderItemResponse> orderItems) {
        this.orderItems = orderItems;
    }

    public OrderPrice getOrderPrice() {
        return price;
    }

    public void setOrderPrice(OrderPrice price) {
        this.price = price;
    }
}
