package com.dairycoders.classycreams.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "order_price")
public class OrderPrice {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long orderPriceId;
    @OneToOne(mappedBy = "orderPrice")
    private Order order;
    private double subtotal;
    private double tip;
    private double deliveryFee;
    private double tax;
    private double total;

    public OrderPrice() {
    }

    public OrderPrice(
            long orderPriceId,
            Order order,
            double subtotal,
            double tip,
            double deliveryFee,
            double tax,
            double total
    ) {
        this.orderPriceId = orderPriceId;
        this.order = order;
        this.subtotal = subtotal;
        this.tip = tip;
        this.deliveryFee = deliveryFee;
        this.tax = tax;
        this.total = total;
    }

    @Override
    public String toString() {
        return "OrderPrice{" +
                "orderPriceId=" + orderPriceId +
                ", order=" + order +
                ", subtotal=" + subtotal +
                ", tip=" + tip +
                ", deliveryFee=" + deliveryFee +
                ", tax=" + tax +
                ", total=" + total +
                '}';
    }

    public long getOrderPriceId() {
        return orderPriceId;
    }

    public void setOrderPriceId(long orderPriceId) {
        this.orderPriceId = orderPriceId;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    public double getSubtotal() {
        return subtotal;
    }

    public void setSubtotal(double subtotal) {
        this.subtotal = subtotal;
    }

    public double getTip() {
        return tip;
    }

    public void setTip(double tip) {
        this.tip = tip;
    }

    public double getDeliveryFee() {
        return deliveryFee;
    }

    public void setDeliveryFee(double deliveryFee) {
        this.deliveryFee = deliveryFee;
    }

    public double getTax() {
        return tax;
    }

    public void setTax(double tax) {
        this.tax = tax;
    }

    public double getTotal() {
        return total;
    }

    public void setTotal(double total) {
        this.total = total;
    }
}
