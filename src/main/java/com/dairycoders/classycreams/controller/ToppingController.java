package com.dairycoders.classycreams.controller;

import com.dairycoders.classycreams.entity.Topping;
import com.dairycoders.classycreams.service.ToppingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/toppings")
public class ToppingController {
    @Autowired
    private ToppingService toppingService;

    @GetMapping
    public List<Topping> getAllToppings() {
        return toppingService.getAllToppings();
    }

    @GetMapping("/{id}")
    public Topping getToppingById(@PathVariable long id) {
        return toppingService.getToppingById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Topping createTopping(@RequestBody Topping topping) {
        return toppingService.createTopping(topping);
    }

    @PutMapping("/{id}")
    public Topping updateTopping(@PathVariable long id, @RequestBody Topping topping) {
        topping.setToppingId(id);
        return toppingService.updateTopping(topping);
    }

    @DeleteMapping("/{id}")
    public void deleteToppingById(@PathVariable long id) {
        toppingService.deleteToppingById(id);
    }
}