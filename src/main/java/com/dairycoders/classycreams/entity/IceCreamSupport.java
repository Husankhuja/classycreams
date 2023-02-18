package com.dairycoders.classycreams.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "ice_cream_supports")
public class IceCreamSupport {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long iceCreamSupportId;
    @OneToOne(mappedBy = "iceCreamSupport", cascade = CascadeType.REMOVE)
    private Product product;
    private int minScoops;
    private int maxScoops;
    private int minSoft;
    private int maxSoft;
    private int freeToppings;

    public IceCreamSupport() {
    }

    public IceCreamSupport(
            long iceCreamSupportId,
            Product product,
            int minScoops,
            int maxScoops,
            int minSoft,
            int maxSoft,
            int freeToppings
    ) {
        this.iceCreamSupportId = iceCreamSupportId;
        this.product = product;
        this.minScoops = minScoops;
        this.maxScoops = maxScoops;
        this.minSoft = minSoft;
        this.maxSoft = maxSoft;
        this.freeToppings = freeToppings;
    }

    @Override
    public String toString() {
        return "IceCreamSupport{" +
                "iceCreamSupportId=" + iceCreamSupportId +
                ", product=" + product +
                ", minScoops=" + minScoops +
                ", maxScoops=" + maxScoops +
                ", minSoft=" + minSoft +
                ", maxSoft=" + maxSoft +
                ", freeToppings=" + freeToppings +
                '}';
    }

    public long getIceCreamSupportId() {
        return iceCreamSupportId;
    }

    public void setIceCreamSupportId(long iceCreamSupportId) {
        this.iceCreamSupportId = iceCreamSupportId;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public int getMinScoops() {
        return minScoops;
    }

    public void setMinScoops(int minScoops) {
        this.minScoops = minScoops;
    }

    public int getMaxScoops() {
        return maxScoops;
    }

    public void setMaxScoops(int maxScoops) {
        this.maxScoops = maxScoops;
    }

    public int getMinSoft() {
        return minSoft;
    }

    public void setMinSoft(int minSoft) {
        this.minSoft = minSoft;
    }

    public int getMaxSoft() {
        return maxSoft;
    }

    public void setMaxSoft(int maxSoft) {
        this.maxSoft = maxSoft;
    }

    public int getFreeToppings() {
        return freeToppings;
    }

    public void setFreeToppings(int freeToppings) {
        this.freeToppings = freeToppings;
    }
}
