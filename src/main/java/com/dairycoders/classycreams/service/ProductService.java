package com.dairycoders.classycreams.service;

import com.dairycoders.classycreams.entity.IceCreamSupport;
import com.dairycoders.classycreams.entity.Product;
import com.dairycoders.classycreams.repository.IceCreamSupportRepository;
import com.dairycoders.classycreams.repository.ProductRepository;
import jakarta.persistence.EntityNotFoundException;
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

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(long id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Product not found"));
    }

    public Product createProduct(Product product) {
        IceCreamSupport iceCreamSupport = product.getIceCreamSupport();
        if (iceCreamSupport != null) {
            iceCreamSupport.setProduct(product);
            iceCreamSupportRepository.save(iceCreamSupport);
        }
        return productRepository.save(product);
    }

    public Product updateProduct(Product product) {
        return productRepository.save(product);
    }

    public void deleteProductById(long id) {
        productRepository.deleteById(id);
    }
}
