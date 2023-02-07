import {Ingredient} from "@/app/domain/Ingredient";
import {string} from "prop-types";

export type Recipe = {
    name : string;
    description : string;
    ingredients : Ingredient[];
    timeToCook : string;
    typeOfMeal : string;
}

export function createRecipe(parameter: any) : Recipe{
    return {
        ...parameter,
    }
}

