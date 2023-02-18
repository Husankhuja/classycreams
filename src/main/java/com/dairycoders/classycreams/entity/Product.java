package com.dairycoders.classycreams.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long productId;
    @OneToOne
    @JoinColumn(name = "iceCreamSupportId", referencedColumnName = "IceCreamSupportId")
    private IceCreamSupport iceCreamSupport;
    private String name;
    private String description;
    private String imageUrl;
    @Enumerated(EnumType.STRING)
    private ProductType type;
    private double basePrice;
    private int calories;

    public Product() {
    }

    public Product(
            long productId,
            IceCreamSupport iceCreamSupport,
            String name,
            String description,
            String imageUrl,
            ProductType type,
            double basePrice,
            int calories
    ) {
        this.productId = productId;
        this.iceCreamSupport = iceCreamSupport;
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.type = type;
        this.basePrice = basePrice;
        this.calories = calories;
    }

    @Override
    public String toString() {
        return "Product{" +
                "productId=" + productId +
                ", iceCreamSupport=" + iceCreamSupport +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", imageUrl='" + imageUrl + '\'' +
                ", type=" + type +
                ", basePrice=" + basePrice +
                ", calories=" + calories +
                '}';
    }

    public long getProductId() {
        return productId;
    }

    public void setProductId(long productId) {
        this.productId = productId;
    }

    public IceCreamSupport getIceCreamSupport() {
        return iceCreamSupport;
    }

    public void setIceCreamSupport(IceCreamSupport iceCreamSupport) {
        this.iceCreamSupport = iceCreamSupport;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public ProductType getType() {
        return type;
    }

    public void setType(ProductType type) {
        this.type = type;
    }

    public double getBasePrice() {
        return basePrice;
    }

    public void setBasePrice(double basePrice) {
        this.basePrice = basePrice;
    }

    public int getCalories() {
        return calories;
    }

    public void setCalories(int calories) {
        this.calories = calories;
    }
}

