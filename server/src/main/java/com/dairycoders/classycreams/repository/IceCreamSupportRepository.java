package com.dairycoders.classycreams.repository;

import com.dairycoders.classycreams.entity.IceCreamSupport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IceCreamSupportRepository extends JpaRepository<IceCreamSupport, Long> {
}
