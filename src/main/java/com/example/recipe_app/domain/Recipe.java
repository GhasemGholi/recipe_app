package com.example.recipe_app.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Recipe {
    private String name;
    private String description;
    private List<Ingredient> ingredients;
    private String timeToCook;
    private String typeOfMeal;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Recipe recipe = (Recipe) o;
        return name.equals(recipe.name);
    }

    @Override
    public String toString() {
        return "Recipe{" +
                "name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", ingredients=" + ingredients +
                ", timeToCook=" + timeToCook +
                ", typeOfMeal='" + typeOfMeal + '\'' +
                '}';
    }
}
