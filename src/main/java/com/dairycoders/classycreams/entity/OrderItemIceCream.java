package com.dairycoders.classycreams.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "order_item_ice_creams")
public class OrderItemIceCream {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long orderItemIceCreamId;
    @ManyToOne
    @JoinColumn(name = "orderItemId")
    private OrderItem orderItem;
    @ManyToOne
    @JoinColumn(name = "iceCreamId")
    private IceCream iceCream;

    public OrderItemIceCream() {
    }

    public OrderItemIceCream(
            long orderItemIceCreamId, 
            OrderItem orderItem, 
            IceCream iceCream
    ) {
        this.orderItemIceCreamId = orderItemIceCreamId;
        this.orderItem = orderItem;
        this.iceCream = iceCream;
    }

    @Override
    public String toString() {
        return "OrderItemIceCream{" +
                "orderItemIceCreamId=" + orderItemIceCreamId +
                ", orderItem=" + orderItem +
                ", iceCream=" + iceCream +
                '}';
    }

    public long getOrderItemIceCreamId() {
        return orderItemIceCreamId;
    }

    public void setOrderItemIceCreamId(long orderItemIceCreamId) {
        this.orderItemIceCreamId = orderItemIceCreamId;
    }

    public OrderItem getOrderItem() {
        return orderItem;
    }

    public void setOrderItem(OrderItem orderItem) {
        this.orderItem = orderItem;
    }

    public IceCream getIceCream() {
        return iceCream;
    }

    public void setIceCream(IceCream iceCream) {
        this.iceCream = iceCream;
    }
}
