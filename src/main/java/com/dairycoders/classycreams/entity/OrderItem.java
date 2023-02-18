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
    @OneToMany(mappedBy = "orderItem", cascade = CascadeType.ALL)
    private List<OrderItemIceCream> iceCreams;

    @OneToMany(mappedBy = "orderItem", cascade = CascadeType.ALL)
    private List<OrderItemTopping> toppings;

    public OrderItem() {
    }

    public OrderItem(
            long orderItemId,
            Order order,
            Product product,
            List<OrderItemIceCream> iceCreams,
            List<OrderItemTopping> toppings
    ) {
        this.orderItemId = orderItemId;
        this.order = order;
        this.product = product;
        this.iceCreams = iceCreams;
        this.toppings = toppings;
    }

    @Override
    public String toString() {
        return "OrderItem{" +
                "orderItemId=" + orderItemId +
                ", order=" + order +
                ", product=" + product +
                ", iceCreams=" + iceCreams +
                ", toppings=" + toppings +
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

    public List<OrderItemIceCream> getIceCreams() {
        return iceCreams;
    }

    public void setIceCreams(List<OrderItemIceCream> iceCreams) {
        this.iceCreams = iceCreams;
    }

    public List<OrderItemTopping> getToppings() {
        return toppings;
    }

    public void setToppings(List<OrderItemTopping> toppings) {
        this.toppings = toppings;
    }
}
