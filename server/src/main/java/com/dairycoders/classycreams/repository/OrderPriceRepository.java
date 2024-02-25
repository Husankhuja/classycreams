package com.dairycoders.classycreams.repository;

import com.dairycoders.classycreams.entity.OrderPrice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderPriceRepository extends JpaRepository<OrderPrice, Long> {
}
