package com.dairycoders.classycreams.controller.request;

import java.util.List;

public class OrderItemRequest {
    private long productId;
    private List<Long> iceCreamIds;
    private List<Long> toppingIds;

    public OrderItemRequest() {
    }

    public OrderItemRequest(long productId, List<Long> iceCreamIds, List<Long> toppingIds) {
        this.productId = productId;
        this.iceCreamIds = iceCreamIds;
        this.toppingIds = toppingIds;
    }

    @Override
    public String toString() {
        return "OrderItem{" +
                "productId=" + productId +
                ", iceCreamIds=" + iceCreamIds +
                ", toppingIds=" + toppingIds +
                '}';
    }

    public long getProductId() {
        return productId;
    }

    public void setProductId(long productId) {
        this.productId = productId;
    }

    public List<Long> getIceCreamIds() {
        return iceCreamIds;
    }

    public void setIceCreamIds(List<Long> iceCreamIds) {
        this.iceCreamIds = iceCreamIds;
    }

    public List<Long> getToppingIds() {
        return toppingIds;
    }

    public void setToppingIds(List<Long> toppingIds) {
        this.toppingIds = toppingIds;
    }
}
