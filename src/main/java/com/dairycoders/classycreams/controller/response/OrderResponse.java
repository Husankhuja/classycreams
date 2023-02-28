package com.dairycoders.classycreams.controller.response;

import com.dairycoders.classycreams.entity.Order;

import java.util.List;

public class OrderResponse {
    private Order order;
    private List<OrderItemResponse> orderItemResponses;

    public OrderResponse() {
    }

    public OrderResponse(Order order, List<OrderItemResponse> orderItemResponses) {
        this.order = order;
        this.orderItemResponses = orderItemResponses;
    }

    @Override
    public String toString() {
        return "OrderResponse{" +
                "order=" + order +
                ", orderItemResponses=" + orderItemResponses +
                '}';
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    public List<OrderItemResponse> getOrderItemResponses() {
        return orderItemResponses;
    }

    public void setOrderItemResponses(List<OrderItemResponse> orderItemResponses) {
        this.orderItemResponses = orderItemResponses;
    }
}
