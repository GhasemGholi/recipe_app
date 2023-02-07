import axios from 'axios'
import {Recipe} from "@/app/domain/Recipe";

export const getRecipe = async (name: string) => {
    return axios.get('http://localhost:8080/recipe/getRecipe', {
        params: {name}
    })
}
export const setRecipe = async (recipe : Recipe) => {
    return axios.post('http://localhost:8080/recipe/addRecipe', recipe)
}
export const getAllRecipes = async () => {
    return axios.get('http://localhost:8080/recipe/findAll')
}