package com.dairycoders.classycreams.controller;

import com.dairycoders.classycreams.entity.Topping;
import com.dairycoders.classycreams.service.ToppingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/toppings")
public class ToppingController {
    private final ToppingService toppingService;

    @Autowired
    public ToppingController(ToppingService toppingService) {
        this.toppingService = toppingService;
    }

    @GetMapping
    public ResponseEntity<List<Topping>> getAllToppings() {
        List<Topping> toppings = toppingService.getAllToppings();
        return ResponseEntity.ok(toppings);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Topping> getToppingById(@PathVariable Long id) {
        Topping topping = toppingService.getToppingById(id);
        if (topping == null) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(topping);
        }
    }

    @PostMapping
    public ResponseEntity<Topping> createTopping(@RequestBody Topping topping) {
        Topping createdTopping = toppingService.createTopping(topping);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdTopping);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Topping> updateTopping(@PathVariable Long id, @RequestBody Topping topping) {
        topping.setToppingId(id);
        Topping updatedTopping = toppingService.updateTopping(topping);
        return ResponseEntity.ok(updatedTopping);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteToppingById(@PathVariable Long id) {
        toppingService.deleteToppingById(id);
        return ResponseEntity.noContent().build();
    }
}