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

    public List<IceCream> getAllIceCreams() {
        return iceCreamRepository.findAll();
    }

    public IceCream getIceCreamById(long id) {
        return iceCreamRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Ice cream not found"));
    }

    public IceCream createIceCream(IceCream iceCream) {
        return iceCreamRepository.save(iceCream);
    }

    public IceCream updateIceCream(IceCream iceCream) {
        return iceCreamRepository.save(iceCream);
    }

    public void deleteIceCreamById(long id) {
        iceCreamRepository.deleteById(id);
    }
}

