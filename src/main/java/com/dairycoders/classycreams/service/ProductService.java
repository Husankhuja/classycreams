package com.dairycoders.classycreams.service;

import com.dairycoders.classycreams.entity.IceCreamSupport;
import com.dairycoders.classycreams.entity.Product;
import com.dairycoders.classycreams.repository.IceCreamSupportRepository;
import com.dairycoders.classycreams.repository.ProductRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    private final ProductRepository productRepository;
    private final IceCreamSupportRepository iceCreamSupportRepository;

    public ProductService(ProductRepository productRepository, IceCreamSupportRepository iceCreamSupportRepository) {
        this.productRepository = productRepository;
        this.iceCreamSupportRepository = iceCreamSupportRepository;
    }

    public List<Product> getAll() {
        return productRepository.findAll();
    }

    public Product getById(long id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("PRODUCT_NOT_FOUND"));
    }

    @Transactional
    public Product create(Product product) {
        IceCreamSupport iceCreamSupport = product.getIceCreamSupport();
        iceCreamSupportRepository.save(iceCreamSupport);
        return productRepository.save(product);
    }

    public Product update(Product product) {
        IceCreamSupport iceCreamSupport = product.getIceCreamSupport();
        iceCreamSupportRepository.save(iceCreamSupport);
        return productRepository.save(product);
    }

    public void deleteById(long id) {
        productRepository.deleteById(id);
    }
}
