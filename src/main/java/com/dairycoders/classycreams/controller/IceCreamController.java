package com.dairycoders.classycreams.controller;

import com.dairycoders.classycreams.entity.IceCream;
import com.dairycoders.classycreams.service.IceCreamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ice-creams")
public class IceCreamController {
    @Autowired
    private IceCreamService iceCreamService;

    @GetMapping
    public ResponseEntity<List<IceCream>> getAllIceCreams() {
        List<IceCream> iceCreams = iceCreamService.getAll();
        return ResponseEntity.ok(iceCreams);
    }

    @GetMapping("/{id}")
    public ResponseEntity<IceCream> getIceCreamById(@PathVariable long id) {
        IceCream iceCream = iceCreamService.getById(id);
        if (iceCream == null) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(iceCream);
        }
    }

    @PostMapping
    public ResponseEntity<IceCream> createIceCream(@RequestBody IceCream iceCream) {
        IceCream createdIceCream = iceCreamService.create(iceCream);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdIceCream);
    }

    @PutMapping("/{id}")
    public ResponseEntity<IceCream> updateIceCream(@PathVariable Long id, @RequestBody IceCream iceCream) {
        iceCream.setIceCreamId(id);
        IceCream updatedIceCream = iceCreamService.update(iceCream);
        return ResponseEntity.ok(updatedIceCream);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteIceCreamById(@PathVariable Long id) {
        iceCreamService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}