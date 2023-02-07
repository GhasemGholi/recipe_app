package com.example.recipe_app.service;

import com.example.recipe_app.domain.Recipe;

import java.util.Set;

public interface RecipeService {
    void saveRecipe(Recipe recipe);
    Recipe getRecipe(String name);

    Set<Recipe> getAll();

}
