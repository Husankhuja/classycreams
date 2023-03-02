package com.dairycoders.classycreams.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "order_item_ice_creams")
public class OrderItemIceCream {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long orderItemIceCreamId;
    private long orderItemId;
    private long iceCreamId;

    public OrderItemIceCream() {
    }

    public OrderItemIceCream(long orderItemIceCreamId, long orderItemId, long iceCreamId) {
        this.orderItemIceCreamId = orderItemIceCreamId;
        this.orderItemId = orderItemId;
        this.iceCreamId = iceCreamId;
    }

    public OrderItemIceCream(long iceCreamId) {
        this.iceCreamId = iceCreamId;
    }

    @Override
    public String toString() {
        return "OrderItemIceCream{" +
                "orderItemIceCreamId=" + orderItemIceCreamId +
                ", orderItemId=" + orderItemId +
                ", iceCreamId=" + iceCreamId +
                '}';
    }

    public long getOrderItemIceCreamId() {
        return orderItemIceCreamId;
    }

    public void setOrderItemIceCreamId(long orderItemIceCreamId) {
        this.orderItemIceCreamId = orderItemIceCreamId;
    }

    public long getOrderItemId() {
        return orderItemId;
    }

    public void setOrderItemId(long orderItemId) {
        this.orderItemId = orderItemId;
    }

    public long getIceCreamId() {
        return iceCreamId;
    }

    public void setIceCreamId(long iceCreamId) {
        this.iceCreamId = iceCreamId;
    }
}
