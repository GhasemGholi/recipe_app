package com.example.recipe_app.repository;

import com.example.recipe_app.domain.Recipe;
import lombok.Getter;

import java.util.HashSet;
import java.util.Set;

@Getter
public class RecipeSingletonDataRepository {
    private Set<Recipe> allRecipes = new HashSet<>();
    private static RecipeSingletonDataRepository INSTANCE;

    private RecipeSingletonDataRepository() {
    }

    public static RecipeSingletonDataRepository getInstance() {
        if(INSTANCE == null) {
            INSTANCE = new RecipeSingletonDataRepository();
        }
        return INSTANCE;
    }
}
