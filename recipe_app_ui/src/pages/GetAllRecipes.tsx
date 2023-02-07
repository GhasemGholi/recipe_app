import {useState} from "react";
import {getAllRecipes, getRecipe, setRecipe} from "@/pages/api/RecipeMiddleWare";
import useCollapse from 'react-collapsed';

export default function GetAllRecipes() {
    const recipe = {name: '', description: '', ingredients: [{name: '', amount: ''}], timeToCook: '', typeOfMeal: ''}
    const [recipes, setRecipes] = useState([recipe]);

    const [isLoading, setIsLoading] = useState(false);
    const {getCollapseProps, getToggleProps} = useCollapse();

    const findAllRecipes = async (event: any) => {
        event.preventDefault();
        setIsLoading(true);
        try {
            await getAllRecipes().then(res => {
                res.data.forEach((fetchedRecipe: typeof recipe) => recipes.push(fetchedRecipe));
            });
        } catch (err) {
        } finally {
            setIsLoading(false);
        }
    }


    return (
        <main>
            <div className="GetAllRecipes">
                <h1>Get all recipes</h1>
                <button onClick={findAllRecipes}>Search</button>
                <br/>
                Click on recipe name to expand or collapse
            </div>
            <div>
                {recipes && recipes.map(recipe => (
                    <div key={recipe.name} className="collapsible">
                        <div className="header" {...getToggleProps()}>
                            {recipes &&
                                <li>Recipe name: {recipe.name}</li>
                            }
                        </div>
                        <div {...getCollapseProps()}>
                            <div className="content">
                                <li>Recipe description: {recipe.description}</li>
                                <li>Recipe ingredients: {
                                    recipe.ingredients.map(ingredient => (
                                        <ul key={ingredient.name}>Ingredient name: {ingredient.name} -
                                            Amount: {ingredient.amount}</ul>
                                    ))
                                }</li>
                                <li>Recipe time to cook: {recipe.timeToCook}</li>
                                <li>Recipe type of meal: {recipe.typeOfMeal}</li>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}