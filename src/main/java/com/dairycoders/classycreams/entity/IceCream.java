package com.dairycoders.classycreams.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "ice_creams")
public class IceCream {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long iceCreamId;
    private String name;
    private String description;
    @Enumerated(EnumType.STRING)
    private IceCreamType type;
    private String imageUrl;
    private double basePrice;
    private int calories;

    public IceCream() {
    }

    public IceCream(
            long iceCreamId,
            String name,
            String description,
            IceCreamType type,
            String imageUrl,
            double basePrice,
            int calories
    ) {
        this.iceCreamId = iceCreamId;
        this.name = name;
        this.description = description;
        this.type = type;
        this.imageUrl = imageUrl;
        this.basePrice = basePrice;
        this.calories = calories;
    }

    @Override
    public String toString() {
        return "IceCream{" +
                "iceCreamId=" + iceCreamId +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", type=" + type +
                ", imageUrl='" + imageUrl + '\'' +
                ", basePrice=" + basePrice +
                ", calories=" + calories +
                '}';
    }

    public long getIceCreamId() {
        return iceCreamId;
    }

    public void setIceCreamId(long iceCreamId) {
        this.iceCreamId = iceCreamId;
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

    public IceCreamType getType() {
        return type;
    }

    public void setType(IceCreamType type) {
        this.type = type;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
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

