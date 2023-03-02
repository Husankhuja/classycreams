package com.dairycoders.classycreams.config;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

import javax.naming.AuthenticationException;

@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(value = {AuthenticationException.class})
    ResponseEntity<Object> handleAuthenticationException(AuthenticationException exception) {

        String message = exception.getMessage();
        // 403 - not authorized, 401 - not authenticated
        int code = message == "USER_NOT_AUTHORIZED" ? 403: 401;
        return ResponseEntity.status(code).body(message);
    }

    @ExceptionHandler(value = {EntityNotFoundException.class})
    ResponseEntity<Object> handleEntityNotFoundException(EntityNotFoundException exception) {
        // not found error message
        return ResponseEntity.status(404).body(exception.getMessage());
    }

}
