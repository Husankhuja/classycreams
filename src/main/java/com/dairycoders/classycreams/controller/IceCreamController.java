package com.dairycoders.classycreams.controller;

import com.dairycoders.classycreams.entity.IceCream;
import com.dairycoders.classycreams.service.IceCreamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ice-creams")
public class IceCreamController {
    @Autowired
    private IceCreamService iceCreamService;

    @GetMapping
    public List<IceCream> getAllIceCreams() {
        return iceCreamService.getAllIceCreams();
    }

    @GetMapping("/{id}")
    public IceCream getIceCreamById(@PathVariable long id) {
        return iceCreamService.getIceCreamById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public IceCream createIceCream(@RequestBody IceCream iceCream) {
        return iceCreamService.createIceCream(iceCream);
    }

    @PutMapping("/{id}")
    public IceCream updateIceCream(@PathVariable long id, @RequestBody IceCream iceCream) {
        iceCream.setIceCreamId(id);
        return iceCreamService.updateIceCream(iceCream);
    }

    @DeleteMapping("/{id}")
    public void deleteIceCreamById(@PathVariable long id) {
        iceCreamService.deleteIceCreamById(id);
    }
}
