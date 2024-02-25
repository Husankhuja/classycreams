package com.dairycoders.classycreams.controller.request;

import java.util.List;

public class OrderRequest {
    private String address;
    private List<OrderItemRequest> orderItems;
    private double tip;
    private boolean isDelivery;

    public OrderRequest() {
    }

    public OrderRequest(String address, List<OrderItemRequest> orderItems, double tip, boolean isDelivery) {
        this.address = address;
        this.orderItems = orderItems;
        this.tip = tip;
        this.isDelivery = isDelivery;
    }

    @Override
    public String toString() {
        return "OrderRequest{" +
                "address='" + address + '\'' +
                ", orderItems=" + orderItems +
                ", tip=" + tip +
                ", isDelivery=" + isDelivery +
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

    public double getTip() {
        return tip;
    }

    public void setTip(double tip) {
        this.tip = tip;
    }

    public boolean getIsDelivery() {
        return isDelivery;
    }

    public void setDelivery(boolean delivery) {
        isDelivery = delivery;
    }
}
