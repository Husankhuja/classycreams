package com.dairycoders.classycreams.controller.response;

import com.dairycoders.classycreams.entity.OrderItem;
import com.dairycoders.classycreams.entity.OrderItemIceCream;
import com.dairycoders.classycreams.entity.OrderItemTopping;
import com.dairycoders.classycreams.entity.Product;

import java.util.List;

public class OrderItemResponse {
    private OrderItem orderItem;
    private Product product;
    private List<OrderItemIceCreamResponse> orderItemIceCreams;
    private List<OrderItemToppingResponse> orderItemToppings;

    public OrderItemResponse() {
    }

    public OrderItemResponse(OrderItem orderItem, Product product, List<OrderItemIceCreamResponse> orderItemIceCreams, List<OrderItemToppingResponse> orderItemToppings) {
        this.orderItem = orderItem;
        this.product = product;
        this.orderItemIceCreams = orderItemIceCreams;
        this.orderItemToppings = orderItemToppings;
    }

    @Override
    public String toString() {
        return "OrderItemResponse{" +
                "orderItem=" + orderItem +
                ", product=" + product +
                ", orderItemIceCreams=" + orderItemIceCreams +
                ", orderItemToppings=" + orderItemToppings +
                '}';
    }

    public OrderItem getOrderItem() {
        return orderItem;
    }

    public void setOrderItem(OrderItem orderItem) {
        this.orderItem = orderItem;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public List<OrderItemIceCreamResponse> getOrderItemIceCreamResponses() {
        return orderItemIceCreams;
    }

    public void setOrderItemIceCreamResponses(List<OrderItemIceCreamResponse> orderItemIceCreams) {
        this.orderItemIceCreams = orderItemIceCreams;
    }

    public List<OrderItemToppingResponse> getOrderItemToppingResponses() {
        return orderItemToppings;
    }

    public void setOrderItemToppingResponses(List<OrderItemToppingResponse> orderItemToppings) {
        this.orderItemToppings = orderItemToppings;
    }
}
