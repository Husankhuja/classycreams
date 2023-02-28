package com.dairycoders.classycreams.repository;

import com.dairycoders.classycreams.entity.OrderItem;
import com.dairycoders.classycreams.entity.OrderItemIceCream;
import com.dairycoders.classycreams.entity.OrderItemTopping;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderItemToppingRepository extends JpaRepository<OrderItemTopping, Long> {
    @Query("SELECT oit FROM OrderItemTopping oit WHERE oit.orderItem.orderItemId = :orderItemId")
    List<OrderItemTopping> findByOrderItemId(@Param("orderItemId") long orderItemId);
}
