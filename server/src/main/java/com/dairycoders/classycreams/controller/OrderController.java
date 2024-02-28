package com.dairycoders.classycreams.controller;

import com.dairycoders.classycreams.annotation.RequiresAuthentication;
import com.dairycoders.classycreams.controller.request.OrderRequest;
import com.dairycoders.classycreams.controller.response.OrderResponse;
import com.dairycoders.classycreams.entity.Order;
import com.dairycoders.classycreams.entity.User;
import com.dairycoders.classycreams.entity.enums.UserRole;
import com.dairycoders.classycreams.service.OrderService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {
    private final OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @RequiresAuthentication(value = {UserRole.ADMIN})
    @GetMapping
    ResponseEntity<List<Order>> getAllOrders() {
        List<Order> orders = orderService.getAll();
        return ResponseEntity.ok(orders);
    }

    @RequiresAuthentication(value = {UserRole.USER, UserRole.ADMIN})
    @GetMapping("/{id}")
    ResponseEntity<OrderResponse> getOrderById(
            @PathVariable long id,
            @RequestAttribute User user
    ) throws Exception {
        OrderResponse orderResponse = orderService.getById(user, id);
        return ResponseEntity.ok(orderResponse);
    }

    @RequiresAuthentication(value = {UserRole.USER})
    @PostMapping
    public ResponseEntity<OrderResponse> createOrder(
            @RequestBody OrderRequest orderRequest,
            @RequestAttribute("user") User user
            ) {
        System.out.println("\n\n");
        System.out.println(user);
        OrderResponse createdOrder = orderService.create(user, orderRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdOrder);
    }

    @RequiresAuthentication(value = {UserRole.ADMIN})
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOrder(@PathVariable long id) {
        orderService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
