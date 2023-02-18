package com.dairycoders.classycreams.repository;

import com.dairycoders.classycreams.entity.OrderItemTopping;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderItemToppingRepository extends JpaRepository<OrderItemTopping, Long> {
}
