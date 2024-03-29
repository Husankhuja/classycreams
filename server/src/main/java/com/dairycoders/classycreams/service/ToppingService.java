package com.dairycoders.classycreams.service;

import com.dairycoders.classycreams.entity.Topping;
import com.dairycoders.classycreams.repository.ToppingRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ToppingService {
    private final ToppingRepository toppingRepository;

    public ToppingService(ToppingRepository toppingRepository) {
        this.toppingRepository = toppingRepository;
    }

    public List<Topping> getAll() {
        return toppingRepository.findAll();
    }

    public Topping getById(long id) {
        return toppingRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("TOPPING_NOT_FOUND"));
    }

    public Topping createTopping(Topping topping) {
        return toppingRepository.save(topping);
    }

    public Topping updateTopping(Topping topping) {
        return toppingRepository.save(topping);
    }

    public void deleteToppingById(long id) {
        Topping topping = toppingRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("TOPPING_NOT_FOUND"));
        toppingRepository.delete(topping);
    }
}
