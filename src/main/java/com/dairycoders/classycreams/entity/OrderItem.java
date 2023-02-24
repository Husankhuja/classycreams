package com.dairycoders.classycreams.entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "order_items")
public class OrderItem {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long orderItemId;
    @ManyToOne
    @JoinColumn(name = "orderId", referencedColumnName = "orderId")
    private Order order;
    @ManyToOne
    @JoinColumn(name = "productId", referencedColumnName = "productId")
    private Product product;

    public OrderItem() {
    }

    public OrderItem(long orderItemId, Order order, Product product) {
        this.orderItemId = orderItemId;
        this.order = order;
        this.product = product;
    }

    @Override
    public String toString() {
        return "OrderItem{" +
                "orderItemId=" + orderItemId +
                ", order=" + order +
                ", product=" + product +
                '}';
    }

    public long getOrderItemId() {
        return orderItemId;
    }

    public void setOrderItemId(long orderItemId) {
        this.orderItemId = orderItemId;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}
