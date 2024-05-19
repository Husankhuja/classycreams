package com.dairycoders.classycreams.service;

import com.dairycoders.classycreams.controller.request.LoginRequest;
import com.dairycoders.classycreams.controller.request.RegisterRequest;
import com.dairycoders.classycreams.entity.User;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.stereotype.Service;

import javax.naming.AuthenticationException;

@Service
public class AuthService {
    private final UserService userService;
    private final JwtService jwtService;

    public AuthService(UserService userService, JwtService jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }

    public String register(RegisterRequest registerRequest) {
        User user = new User();
        user.setFirstName(registerRequest.getFirstName());
        user.setLastName(registerRequest.getLastName());
        user.setEmail(registerRequest.getEmail());
        user.setPassword(
                hashPassword(registerRequest.getPassword())
        );
        userService.save(user);

        return jwtService.generateToken(user);
    }

    public String login(LoginRequest loginRequest) throws Exception {
        User user = userService.getByEmail(loginRequest.getEmail());
        if (!checkPassword(loginRequest.getPassword(),user.getPassword())) {
            throw new AuthenticationException("INVALID_CREDENTIALS");
        }
        return jwtService.generateToken(user);

    }

    private String hashPassword(String password) {
        return BCrypt.hashpw(password, BCrypt.gensalt());
    }

    private boolean checkPassword(String password, String hashedPassword) {
        return BCrypt.checkpw(password, hashedPassword);
    }
}
