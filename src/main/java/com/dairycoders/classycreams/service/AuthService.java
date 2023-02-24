package com.dairycoders.classycreams.service;

import com.dairycoders.classycreams.controller.request.LoginRequest;
import com.dairycoders.classycreams.controller.request.RegisterRequest;
import com.dairycoders.classycreams.entity.User;
import org.apache.tomcat.websocket.AuthenticationException;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.stereotype.Service;

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
        user.setFirstName(registerRequest.getFirstname());
        user.setLastName(registerRequest.getLastname());
        user.setEmail(registerRequest.getEmail());
        user.setPassword(
                hashPassword(registerRequest.getPassword())
        );
        userService.save(user);

        return jwtService.generateToken(user);
    }

    public String login(LoginRequest loginRequest) throws AuthenticationException {
        User user = userService.getByEmail(loginRequest.getEmail());
        if (!checkPassword(loginRequest.getPassword(),user.getPassword())) {
            throw new AuthenticationException("Invalid Credentials");
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
