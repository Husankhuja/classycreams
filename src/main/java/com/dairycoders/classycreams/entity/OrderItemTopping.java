package com.dairycoders.classycreams.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "order_item_toppings")
public class OrderItemTopping {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long orderItemToppingId;
    private long orderItemId;
    private long toppingId;

    public OrderItemTopping() {
    }

    public OrderItemTopping(long orderItemToppingId, long orderItemId, long toppingId) {
        this.orderItemToppingId = orderItemToppingId;
        this.orderItemId = orderItemId;
        this.toppingId = toppingId;
    }

    public OrderItemTopping(long toppingId) {
        this.toppingId = toppingId;
    }

    @Override
    public String toString() {
        return "OrderItemTopping{" +
                "orderItemToppingId=" + orderItemToppingId +
                ", orderItemId=" + orderItemId +
                ", toppingId=" + toppingId +
                '}';
    }

    public long getOrderItemToppingId() {
        return orderItemToppingId;
    }

    public void setOrderItemToppingId(long orderItemToppingId) {
        this.orderItemToppingId = orderItemToppingId;
    }

    public long getOrderItemId() {
        return orderItemId;
    }

    public void setOrderItemId(long orderItemId) {
        this.orderItemId = orderItemId;
    }

    public long getToppingId() {
        return toppingId;
    }

    public void setToppingId(long toppingId) {
        this.toppingId = toppingId;
    }
}
