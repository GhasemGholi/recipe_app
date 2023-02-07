package com.example.recipe_app.repository;

import com.example.recipe_app.domain.Recipe;

import java.util.Objects;
import java.util.Set;

public class RecipeRepositoryImpl implements RecipeRepository{
    RecipeSingletonDataRepository recipeSingletonDataRepository = RecipeSingletonDataRepository.getInstance();
    @Override
    public Recipe findRecipe(String name) {
        Set<Recipe> recipes = recipeSingletonDataRepository.getAllRecipes();
        for (Recipe currentRecipe : recipes) {
            if (Objects.equals(currentRecipe.getName(), name)) {
                return currentRecipe;
            }
        }
        return null;
    }

    @Override
    public void saveRecipe(Recipe recipe) {
        recipeSingletonDataRepository.getAllRecipes().add(recipe);
    }

    @Override
    public Set<Recipe> findAll() {
        return recipeSingletonDataRepository.getAllRecipes();
    }
}
