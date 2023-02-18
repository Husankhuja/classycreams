package com.dairycoders.classycreams.repository;

import com.dairycoders.classycreams.entity.OrderItemIceCream;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderItemIceCreamRepository extends JpaRepository<OrderItemIceCream, Long> {
}
