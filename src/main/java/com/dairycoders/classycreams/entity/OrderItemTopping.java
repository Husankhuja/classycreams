package com.dairycoders.classycreams.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "order_item_toppings")
public class OrderItemTopping {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long orderItemToppingId;
    @ManyToOne
    @JoinColumn(name = "orderItemId")
    private OrderItem orderItem;
    @ManyToOne
    @JoinColumn(name = "toppingId")
    private Topping topping;

    public OrderItemTopping() {
    }

    public OrderItemTopping(long orderItemToppingId, OrderItem orderItem, Topping topping) {
        this.orderItemToppingId = orderItemToppingId;
        this.orderItem = orderItem;
        this.topping = topping;
    }

    @Override
    public String toString() {
        return "OrderItemTopping{" +
                "orderItemToppingId=" + orderItemToppingId +
                ", orderItem=" + orderItem +
                ", topping=" + topping +
                '}';
    }

    public long getOrderItemToppingId() {
        return orderItemToppingId;
    }

    public void setOrderItemToppingId(long orderItemToppingId) {
        this.orderItemToppingId = orderItemToppingId;
    }

    public OrderItem getOrderItem() {
        return orderItem;
    }

    public void setOrderItem(OrderItem orderItem) {
        this.orderItem = orderItem;
    }

    public Topping getTopping() {
        return topping;
    }

    public void setTopping(Topping topping) {
        this.topping = topping;
    }
}
