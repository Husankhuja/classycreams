package com.dairycoders.classycreams.config;

import com.dairycoders.classycreams.service.JwtService;
import com.dairycoders.classycreams.service.UserService;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class AppConfig implements WebMvcConfigurer {

    private final JwtService jwtService;
    private final UserService userService;

    public AppConfig(JwtService jwtService, UserService userService) {
        this.jwtService = jwtService;
        this.userService = userService;
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new JwtAuthInterceptor(jwtService, userService))
                .addPathPatterns("/api/**")
                .excludePathPatterns("/api/login", "/api/register");
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
                .allowedOrigins("*") // Allow all origins
                .allowedMethods("*") // Allow all methods
                .allowedHeaders("*"); // Allow all headers
    }
}