package com.dairycoders.classycreams.controller;


import com.dairycoders.classycreams.controller.request.LoginRequest;
import com.dairycoders.classycreams.controller.request.RegisterRequest;
import com.dairycoders.classycreams.controller.response.TokenResponse;
import com.dairycoders.classycreams.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.naming.AuthenticationException;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final AuthService authService;

    @Autowired
    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/login")
    public ResponseEntity<TokenResponse> login(@RequestBody LoginRequest loginRequest)
            throws Exception {
        String jwt = authService.login(loginRequest);
        return ResponseEntity.ok(new TokenResponse(jwt));
    }

    @PostMapping("/register")
    public ResponseEntity<TokenResponse> register(@RequestBody RegisterRequest registerRequest) {
        System.out.println("Registering user: " + registerRequest.toString());
        String jwt = authService.register(registerRequest);
        return ResponseEntity.ok(new TokenResponse(jwt));
    }
}
