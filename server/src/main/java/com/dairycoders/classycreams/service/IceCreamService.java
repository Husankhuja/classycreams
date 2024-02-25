package com.dairycoders.classycreams.service;

import com.dairycoders.classycreams.entity.IceCream;
import com.dairycoders.classycreams.entity.IceCreamSupport;
import com.dairycoders.classycreams.entity.Product;
import com.dairycoders.classycreams.entity.Topping;
import com.dairycoders.classycreams.repository.IceCreamRepository;
import com.dairycoders.classycreams.repository.IceCreamSupportRepository;
import com.dairycoders.classycreams.repository.ProductRepository;
import com.dairycoders.classycreams.repository.ToppingRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IceCreamService {
    private final IceCreamRepository iceCreamRepository;

    public IceCreamService(IceCreamRepository iceCreamRepository) {
        this.iceCreamRepository = iceCreamRepository;
    }

    public List<IceCream> getAll() {
        return iceCreamRepository.findAll();
    }

    public IceCream getById(long id) {
        return iceCreamRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("ICE_CREAM_NOT_FOUND"));
    }

    public IceCream create(IceCream iceCream) {
        return iceCreamRepository.save(iceCream);
    }

    public IceCream update(IceCream iceCream) {
        return iceCreamRepository.save(iceCream);
    }

    public void deleteById(long id) {
        iceCreamRepository.deleteById(id);
    }
}

