package com.dairycoders.classycreams.controller.request;

import java.util.List;

public class OrderRequest {
    private String address;
    private List<OrderItemRequest> orderItems;

    public OrderRequest() {
    }
    public OrderRequest(String address, List<OrderItemRequest> orderItems) {
        this.address = address;
        this.orderItems = orderItems;
    }
    @Override
    public String toString() {
        return "OrderRequest{" +
                "address='" + address + '\'' +
                ", orderItems=" + orderItems +
                '}';
    }
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }
    public List<OrderItemRequest> getOrderItems() {
        return orderItems;
    }
    public void setOrderItems(List<OrderItemRequest> orderItems) {
        this.orderItems = orderItems;
    }
}
