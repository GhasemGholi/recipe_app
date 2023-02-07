package com.example.recipe_app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;

@SpringBootApplication
@Configuration
public class RecipeAppApplication {

    public static void main(String[] args) {
        SpringApplication.run(RecipeAppApplication.class, args);
    }

}
