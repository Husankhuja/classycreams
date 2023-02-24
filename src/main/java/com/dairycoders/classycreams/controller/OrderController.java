package com.dairycoders.classycreams.controller;

import com.dairycoders.classycreams.annotation.RequiresAuthentication;
import com.dairycoders.classycreams.controller.request.OrderRequest;
import com.dairycoders.classycreams.entity.Order;
import com.dairycoders.classycreams.entity.User;
import com.dairycoders.classycreams.entity.enums.UserRole;
import com.dairycoders.classycreams.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {
    @Autowired
    OrderService orderService;

    @GetMapping
    ResponseEntity<List<Order>> getAllOrders() {
        List<Order> orders = orderService.getAll();
        return ResponseEntity.ok(orders);
    }

    @GetMapping("/{id}")
    ResponseEntity<Order> getOrderById(@PathVariable long id) {
        Order order = orderService.getById(id);
        if (order == null) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(order);
        }
    }

    @RequiresAuthentication(value = {UserRole.ADMIN})
    @PostMapping
    public ResponseEntity<Order> createOrder(
            @RequestBody OrderRequest orderRequest,
            @RequestAttribute("user") User user
            ) {
        Order createdOrder = orderService.create(user, orderRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdOrder);
    }
}
