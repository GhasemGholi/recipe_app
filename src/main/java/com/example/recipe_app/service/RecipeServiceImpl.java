package com.example.recipe_app.service;

import com.example.recipe_app.domain.Recipe;
import com.example.recipe_app.repository.RecipeRepository;
import com.example.recipe_app.repository.RecipeRepositoryImpl;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class RecipeServiceImpl implements RecipeService{
    private final RecipeRepository recipeRepository = new RecipeRepositoryImpl();
    @Override
    public void saveRecipe(Recipe recipe) {
        recipeRepository.saveRecipe(recipe);
    }
    @Override
    public Recipe getRecipe(String name) {
        return recipeRepository.findRecipe(name);
    }
    @Override
    public Set<Recipe> getAll() {
        return recipeRepository.findAll();
    }
}
