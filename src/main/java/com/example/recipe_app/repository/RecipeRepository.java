package com.example.recipe_app.repository;

import com.example.recipe_app.domain.Recipe;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface RecipeRepository extends CrudRepository<Recipe, Long> {
    Recipe findRecipe(String recipe);
    Recipe setRecipe(Recipe recipe);
    List<Recipe> findAll();
}