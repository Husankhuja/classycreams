package com.dairycoders.classycreams.config;

import com.dairycoders.classycreams.annotation.RequiresAuthentication;
import com.dairycoders.classycreams.entity.User;
import com.dairycoders.classycreams.entity.enums.UserRole;
import com.dairycoders.classycreams.service.JwtService;
import com.dairycoders.classycreams.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.naming.AuthenticationException;
import java.util.Arrays;
import java.util.List;

public class JwtAuthInterceptor implements HandlerInterceptor {

    private final JwtService jwtService;
    private final UserService userService;

    public JwtAuthInterceptor(JwtService jwtService, UserService userService) {
        this.jwtService = jwtService;
        this.userService = userService;
    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
            throws AuthenticationException {

        if (!(handler instanceof HandlerMethod)) {
            return true;
        }

        // Check if the request has the RequiresAuthentication annotation
        HandlerMethod handlerMethod = (HandlerMethod) handler;
        RequiresAuthentication annotation = handlerMethod.getMethodAnnotation(RequiresAuthentication.class);
        if (annotation == null) {
            return true;
        }

        // check auth header for token
        String authHeader = request.getHeader("Authorization");
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            throw new AuthenticationException("Missing Authorization");
        }

        // check if auth token valid
        String jwt = authHeader.substring(7);
        if (!jwtService.isValidToken(jwt)) {
            throw new AuthenticationException("INVALID_TOKEN");
        }

        //check if user exists
        String email = jwtService.extractEmail(jwt);
        User user = userService.getByEmail(email);
        if (user == null) {
            throw new AuthenticationException("USER_NOT_FOUND");
        }

        //check if request method specifies Role for Authorization
        List<UserRole> userRoles = Arrays.asList(annotation.value());
        if (!userRoles.isEmpty() && !userRoles.contains(user.getRole())) {
            throw new AuthenticationException("USER_NOT_AUTHORIZED");
        }

        //check if token is expired
        if (jwtService.isTokenExpired(jwt)) {
            throw new AuthenticationException("TOKEN_IS_EXPIRED");
        }

        // add user to request to be accessed by methods
        request.setAttribute("user", user);

        return true;


    }
}