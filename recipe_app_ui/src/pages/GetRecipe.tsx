import {useState} from "react";
import {getRecipe, setRecipe} from "@/pages/api/RecipeMiddleWare";
import useCollapse from 'react-collapsed';

export default function GetRecipe() {
    const recipe = {name: '', description: '', ingredients: [{name: '', amount: ''}], timeToCook: '', typeOfMeal: ''}
    const [recipes, setRecipes] = useState(recipe);
    const [recipeName, setRecipeName] = useState({name: ''});
    const [isLoading, setIsLoading] = useState(false);
    const {getCollapseProps, getToggleProps} = useCollapse();

    const searchForRecipe = async (event: any) => {
        event.preventDefault();
        setIsLoading(true);
        try {
            await getRecipe(recipeName.name).then(res => {
                let data: any = {...recipes};
                data.name = res.data.name;
                data.description = res.data.description;
                data.ingredients = res.data.ingredients;
                data.timeToCook = res.data.timeToCook;
                data.typeOfMeal = res.data.typeOfMeal;
                setRecipes(data);
            });
        } catch (err) {
        } finally {
            setIsLoading(false);
        }
    }

    const handleChange = (event: any) => {
        let data: any = {...recipeName};
        data[event.target.name] = event.target.value;
        setRecipeName(data);
    }


    return (
        <main>
            <div className="GetRecipe">
                <h1>Search for recipe</h1>
                <form onSubmit={searchForRecipe}>
                    <input
                        name='name'
                        placeholder='Name'
                        onChange={event => handleChange(event)}
                        value={recipeName.name}
                    />
                </form>
                <button onClick={searchForRecipe}>Search</button>
            </div>
            <div className="collapsible">
                Click on recipe name to expand or collapse
                <div className="header" {...getToggleProps()}>
                    {recipes &&
                        <li>Recipe name: {recipes.name}</li>
                    }
                </div>
                <div {...getCollapseProps()}>
                    <div className="content">
                        <li>Recipe description: {recipes.description}</li>
                        <li>Recipe ingredients: {
                            recipes.ingredients.map(ingredient => (
                                <ul key={ingredient.name}>Ingredient name: {ingredient.name} -
                                    Amount: {ingredient.amount}</ul>
                            ))
                        }</li>
                        <li>Recipe time to cook: {recipes.timeToCook}</li>
                        <li>Recipe type of meal: {recipes.typeOfMeal}</li>
                    </div>
                </div>
            </div>
        </main>
    );
}