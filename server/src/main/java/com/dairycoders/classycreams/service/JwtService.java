package com.dairycoders.classycreams.service;

import com.dairycoders.classycreams.entity.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Base64;
import java.util.Date;


@Service
public class JwtService {

    private Key jwtSecret;

    // Inject the secret key as a string and convert it to Key
    @Value("${jwt.secret}")
    public void setJwtSecret(String secret) {
        byte[] keyBytes = Base64.getDecoder().decode(secret);
        this.jwtSecret = Keys.hmacShaKeyFor(keyBytes);
    }

    public String generateToken(User user) {
        Claims claims = Jwts.claims().setSubject(user.getEmail());
        claims.put("firstName", user.getFirstName());
        claims.put("lastName", user.getLastName());
        claims.put("role", user.getRole());

        // Log claims
        System.out.println("Claims: " + claims);

        String token = Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 60 * 60 * 1000)) // 1 hour expiration
                .signWith(jwtSecret)
                .compact();

        // Log generated token
        System.out.println("Generated Token: " + token);

        return token;
    }

    public boolean isValidToken(String token) {
        try {
            Jwts.parserBuilder().setSigningKey(jwtSecret).build().parseClaimsJws(token);
            return true;
        } catch (JwtException | IllegalArgumentException e) {
            return false;
        }
    }

    public boolean isTokenExpired(String token) {
        Date expiration = extractExpiration(token);
        return expiration.before(new Date());
    }

    public String extractEmail(String token) {
        return extractAllClaims(token).getSubject();
    }

    public Date extractExpiration(String token) {
        return extractAllClaims(token).getExpiration();
    }

    public Claims extractAllClaims(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(jwtSecret)
                .build()
                .parseClaimsJws(token)
                .getBody();
    }
}
