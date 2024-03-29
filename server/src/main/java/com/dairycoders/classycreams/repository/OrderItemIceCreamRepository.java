package com.dairycoders.classycreams.repository;

import com.dairycoders.classycreams.entity.OrderItem;
import com.dairycoders.classycreams.entity.OrderItemIceCream;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderItemIceCreamRepository extends JpaRepository<OrderItemIceCream, Long> {
    List<OrderItemIceCream> findAllByOrderItemId(long orderItemId);

    void deleteAllByOrderItemId(long orderItemId);
}
