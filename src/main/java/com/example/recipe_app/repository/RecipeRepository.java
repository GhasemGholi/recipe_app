package com.example.recipe_app.repository;


import com.example.recipe_app.domain.Recipe;

import java.util.List;
import java.util.Set;

public interface RecipeRepository {
    Recipe findRecipe(String name);
    void saveRecipe(Recipe recipe);
    Set<Recipe> findAll();
}