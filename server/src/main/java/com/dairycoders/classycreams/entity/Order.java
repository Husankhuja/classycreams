package com.dairycoders.classycreams.entity;

import com.dairycoders.classycreams.entity.enums.OrderStatus;
import com.dairycoders.classycreams.entity.enums.PaymentStatus;
import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long orderId;
    private long userId;
    private long orderPriceId;

    @Enumerated(EnumType.STRING)
    private OrderStatus orderStatus = OrderStatus.PLACED;
    @CreationTimestamp
    private LocalDateTime orderDate;
    @Enumerated(EnumType.STRING)
    private PaymentStatus paymentStatus = PaymentStatus.NOT_PAYED;
    private String deliveryAddress;
    private boolean isDelivery;

    public Order() {
    }

    public Order(long orderId, long userId, long orderPriceId, OrderStatus orderStatus, LocalDateTime orderDate, PaymentStatus paymentStatus, String deliveryAddress, boolean isDelivery) {
        this.orderId = orderId;
        this.userId = userId;
        this.orderPriceId = orderPriceId;
        this.orderStatus = orderStatus;
        this.orderDate = orderDate;
        this.paymentStatus = paymentStatus;
        this.deliveryAddress = deliveryAddress;
        this.isDelivery = isDelivery;
    }

    @Override
    public String toString() {
        return "Order{" +
                "orderId=" + orderId +
                ", userId=" + userId +
                ", orderPriceId=" + orderPriceId +
                ", orderStatus=" + orderStatus +
                ", orderDate=" + orderDate +
                ", paymentStatus=" + paymentStatus +
                ", deliveryAddress='" + deliveryAddress + '\'' +
                ", isDelivery=" + isDelivery +
                '}';
    }

    public long getOrderId() {
        return orderId;
    }

    public void setOrderId(long orderId) {
        this.orderId = orderId;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public long getOrderPriceId() {
        return orderPriceId;
    }

    public void setOrderPriceId(long orderPriceId) {
        this.orderPriceId = orderPriceId;
    }

    public OrderStatus getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(OrderStatus orderStatus) {
        this.orderStatus = orderStatus;
    }

    public LocalDateTime getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(LocalDateTime orderDate) {
        this.orderDate = orderDate;
    }

    public PaymentStatus getPaymentStatus() {
        return paymentStatus;
    }

    public void setPaymentStatus(PaymentStatus paymentStatus) {
        this.paymentStatus = paymentStatus;
    }

    public String getDeliveryAddress() {
        return deliveryAddress;
    }

    public void setDeliveryAddress(String deliveryAddress) {
        this.deliveryAddress = deliveryAddress;
    }

    public boolean getIsDelivery() {
        return isDelivery;
    }

    public void setIsDelivery(boolean delivery) {
        isDelivery = delivery;
    }
}


