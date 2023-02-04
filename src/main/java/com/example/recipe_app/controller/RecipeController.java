package com.example.recipe_app.controller;

import com.example.recipe_app.domain.Recipe;
import com.example.recipe_app.repository.RecipeRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@CrossOrigin("*")
@RequestMapping("/recipe")
public class RecipeController {
    RecipeRepository recipeRepository;


    @GetMapping( "/getRecipe")
    public ResponseEntity<Recipe> getRecipe(@RequestParam String recipe) {
        return ResponseEntity.ok(recipeRepository.findRecipe(recipe));
    }

    @GetMapping("/setRecipe")
    public ResponseEntity<Recipe> setRecipe(@RequestParam Recipe recipe) {
        return ResponseEntity.ok(recipeRepository.save(recipe));
    }

    @GetMapping("/findAll")
    public ResponseEntity<List<Recipe>> findAll() {
        return ResponseEntity.ok(recipeRepository.findAll());
    }

    @ExceptionHandler({Exception.class,RuntimeException.class})
    public ResponseEntity<String> recipeMissingError(Exception exception) {
        return ResponseEntity.badRequest().body(exception.getMessage());
    }
}
