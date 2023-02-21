package com.dairycoders.classycreams.repository;

import java.util.List;
import java.util.Optional;

import com.dairycoders.classycreams.entity.Token;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface TokenRepository extends JpaRepository<Token, Long> {

    @Query("SELECT t FROM Token t WHERE t.user.userId = :userId AND t.expired = false AND t.revoked = false")
    List<Token> findAllValidTokenByUser(@Param("userId") long userId);
    Optional<Token> findByToken(String token);
}
