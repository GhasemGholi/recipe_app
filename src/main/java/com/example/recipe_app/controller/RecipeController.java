package com.example.recipe_app.controller;

import com.example.recipe_app.domain.Ingredient;
import com.example.recipe_app.domain.Recipe;
import com.example.recipe_app.service.RecipeService;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.*;

@RestController
@Controller
@CrossOrigin("*")
@RequestMapping("/recipe")
public class RecipeController {
    private final RecipeService recipeService;

    public RecipeController(RecipeService recipeService) {
        this.recipeService = recipeService;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/getRecipe")
    public ResponseEntity<Recipe> getRecipe(@RequestParam String name) {
        return ResponseEntity.ok(recipeService.getRecipe(name));
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/addRecipe")
    public void addRecipe(@RequestBody String recipeObject) throws IOException {
        JSONObject jsonRecipe = new JSONObject(recipeObject);

        JSONArray jsonArray = jsonRecipe.getJSONArray("ingredients");

        List<Ingredient> ingredients = new ArrayList<>();

        for (int i = 0; i < jsonArray.length(); i++) {
            ingredients.add(new Ingredient(
                    jsonRecipe.getJSONArray("ingredients").getJSONObject(i).get("name").toString(),
                    Integer.parseInt(jsonRecipe.getJSONArray("ingredients").getJSONObject(i).get("amount").toString())));
        }

        Recipe recipe = new Recipe(
                jsonRecipe.get("name").toString(),
                jsonRecipe.get("description").toString(),
                ingredients,
                jsonRecipe.get("timeToCook").toString(),
                jsonRecipe.get("typeOfMeal").toString());

        recipeService.saveRecipe(recipe);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/findAll")
    public ResponseEntity<Set<Recipe>> findAll() {
        return ResponseEntity.ok(recipeService.getAll());
    }

    @ExceptionHandler({Exception.class, RuntimeException.class})
    public ResponseEntity<String> recipeMissingError(Exception exception) {
        return ResponseEntity.badRequest().body(exception.getMessage());
    }
}
