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
    private List<OrderItemIceCream> orderItemIceCreams;

    @OneToMany(mappedBy = "orderItem", cascade = CascadeType.ALL)
    private List<OrderItemTopping> orderItemToppings;

    public OrderItem() {
    }

    public OrderItem(
            long orderItemId,
            Order order,
            Product product,
            List<OrderItemIceCream> orderItemIceCreams,
            List<OrderItemTopping> orderItemToppings
    ) {
        this.orderItemId = orderItemId;
        this.order = order;
        this.product = product;
        this.orderItemIceCreams = orderItemIceCreams;
        this.orderItemToppings = orderItemToppings;
    }

    @Override
    public String toString() {
        return "OrderItem{" +
                "orderItemId=" + orderItemId +
                ", order=" + order +
                ", product=" + product +
                ", orderItemIceCreams=" + orderItemIceCreams +
                ", orderItemToppings=" + orderItemToppings +
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

    public List<OrderItemIceCream> getOrderItemIceCreams() {
        return orderItemIceCreams;
    }

    public void setOrderItemIceCreams(List<OrderItemIceCream> orderItemIceCreams) {
        this.orderItemIceCreams = orderItemIceCreams;
    }

    public List<OrderItemTopping> getOrderItemToppings() {
        return orderItemToppings;
    }

    public void setOrderItemToppings(List<OrderItemTopping> orderItemToppings) {
        this.orderItemToppings = orderItemToppings;
    }
}
