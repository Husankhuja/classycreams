package com.dairycoders.classycreams.entity;

import com.dairycoders.classycreams.entity.enums.OrderStatus;
import com.dairycoders.classycreams.entity.enums.PaymentStatus;
import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long orderId;
    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    private List<OrderItem> orderItems;
    @ManyToOne
    @JoinColumn(name = "userId", referencedColumnName = "userId", nullable = false)
    private User user;
    @OneToOne
    @JoinColumn(name = "orderPriceId", referencedColumnName = "orderPriceId", nullable = false)
    private OrderPrice orderPrice;

    @Enumerated(EnumType.STRING)
    private OrderStatus orderStatus = OrderStatus.PLACED;
    @CreationTimestamp
    private LocalDateTime orderDate;
    @Enumerated(EnumType.STRING)
    private PaymentStatus paymentStatus = PaymentStatus.NOT_PAYED;
    private String deliveryAddress;

    public Order() {
    }

    public Order(
            long orderId,
            List<OrderItem> orderItems,
            User user,
            OrderPrice orderPrice,
            OrderStatus orderStatus,
            LocalDateTime orderDate,
            PaymentStatus paymentStatus,
            String deliveryAddress
    ) {
        this.orderId = orderId;
        this.orderItems = orderItems;
        this.user = user;
        this.orderPrice = orderPrice;
        this.orderStatus = orderStatus;
        this.orderDate = orderDate;
        this.paymentStatus = paymentStatus;
        this.deliveryAddress = deliveryAddress;
    }

    @Override
    public String toString() {
        return "Order{" +
                "orderId=" + orderId +
                ", orderItems=" + orderItems +
                ", user=" + user +
                ", orderPrice=" + orderPrice +
                ", orderStatus=" + orderStatus +
                ", orderDate=" + orderDate +
                ", paymentStatus=" + paymentStatus +
                ", deliveryAddress='" + deliveryAddress + '\'' +
                '}';
    }

    public long getOrderId() {
        return orderId;
    }

    public void setOrderId(long orderId) {
        this.orderId = orderId;
    }

    public List<OrderItem> getOrderItems() {
        return orderItems;
    }

    public void setOrderItems(List<OrderItem> orderItems) {
        this.orderItems = orderItems;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public OrderPrice getOrderPrice() {
        return orderPrice;
    }

    public void setOrderPrice(OrderPrice orderPrice) {
        this.orderPrice = orderPrice;
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
}


