package com.dairycoders.classycreams.service;

import com.dairycoders.classycreams.entity.User;
import com.dairycoders.classycreams.entity.enums.UserRole;

import io.jsonwebtoken.Claims;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Base64;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class JwtServiceTest {

    @Autowired
    private JwtService jwtService;

    @Value("${jwt.secret}")
    private String secretKey;

    @BeforeEach
    void setUp() {
        // Manually set the secret key as the setJwtSecret method is not called automatically in tests
        byte[] keyBytes = Base64.getDecoder().decode(secretKey);
        jwtService.setJwtSecret(secretKey);
    }

    @Test
    void testGenerateToken() {
        User user = new User();
        user.setEmail("test@example.com");
        user.setFirstName("John");
        user.setLastName("Doe");
        user.setRole(UserRole.USER);

        String token = jwtService.generateToken(user);
        assertNotNull(token);

        Claims claims = jwtService.extractAllClaims(token);


        assertEquals("test@example.com", claims.getSubject());
        assertEquals("John", claims.get("firstName"));
        assertEquals("Doe", claims.get("lastName"));
        assertEquals("USER", claims.get("role"));
        
    }

    @Test
    void testIsValidToken() {
        User user = new User();
        user.setEmail("test@example.com");
        user.setFirstName("John");
        user.setLastName("Doe");
        user.setRole(UserRole.USER);

        String token = jwtService.generateToken(user);
        assertTrue(jwtService.isValidToken(token));
    }

    @Test
    void testIsTokenExpired() {
        User user = new User();
        user.setEmail("test@example.com");
        user.setFirstName("John");
        user.setLastName("Doe");
        user.setRole(UserRole.USER);

        String token = jwtService.generateToken(user);
        assertFalse(jwtService.isTokenExpired(token));
    }

    @Test
    void testExtractEmail() {
        User user = new User();
        user.setEmail("test@example.com");
        user.setFirstName("John");
        user.setLastName("Doe");
        user.setRole(UserRole.USER);

        String token = jwtService.generateToken(user);
        assertEquals("test@example.com", jwtService.extractEmail(token));
    }
}
