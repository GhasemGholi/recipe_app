import {useState} from "react";
import {createRecipe, Recipe} from "@/app/domain/Recipe";
import {setRecipe} from "@/pages/api/RecipeMiddleWare";

export default function AddRecipe(){
    const [formFields, setFormFields] = useState({name: '', description: '', timeToCook: '', typeOfMeal: ''})
    const [ingredients, setIngredients] = useState([{name: '', amount: ''}])
    const submitRecipe = async (event: any) => {
        event.preventDefault();
        let recipe: Recipe = createRecipe({
            name: formFields.name,
            description: formFields.description,
            ingredients: ingredients,
            timeToCook: formFields.timeToCook,
            typeOfMeal: formFields.typeOfMeal,
        });
        await setRecipe(recipe);
    }

    const handleFormFieldsChange = (event: any) => {
        let data: any = {...formFields};
        data[event.target.name] = event.target.value;
        setFormFields(data);
    }
    const handleIngredientsChange = (event: any, index: number) => {
        let data: any = [...ingredients];
        data[index][event.target.name] = event.target.value;
        setIngredients(data);
    }
    const addFields = () => {
        let object = {
            name: '',
            amount: '',
        }
        setIngredients([...ingredients, object])
    }

    return (
        <div className="App">
            <h1>Create a recipe</h1>
            <br/>
            <form onSubmit={submitRecipe}>
                <input
                    name='name'
                    placeholder='Name'
                    onChange={event => handleFormFieldsChange(event)}
                    value={formFields.name}
                />
                <br/>
                <input
                    name='description'
                    placeholder='description'
                    onChange={event => handleFormFieldsChange(event)}
                    value={formFields.description}
                />
                <br/>
                <input
                    name='timeToCook'
                    placeholder='time to cook'
                    onChange={event => handleFormFieldsChange(event)}
                    value={formFields.timeToCook}
                />
                <br/>
                <input
                    name='typeOfMeal'
                    placeholder='type of meal'
                    onChange={event => handleFormFieldsChange(event)}
                    value={formFields.typeOfMeal}
                />
                <br/>
                {ingredients.map((form, index) => {
                    return (
                        <div key={index}>
                            <input
                                name='name'
                                placeholder='ingredients name'
                                onChange={event => handleIngredientsChange(event, index)}
                                value={form.name}
                            />
                            <input
                                name='amount'
                                placeholder='ingredients amount'
                                onChange={event => handleIngredientsChange(event, index)}
                                value={form.amount}
                            />
                            <br/>
                        </div>
                    )
                })}
            </form>
            <button onClick={addFields}>Add More Ingredients..</button>
            <br/>
            <button onClick={submitRecipe}>Submit</button>
        </div>
    );
}