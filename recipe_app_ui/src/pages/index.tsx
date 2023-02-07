import AddRecipe from "@/pages/AddRecipe";
import GetRecipe from "@/pages/GetRecipe";
import GetAllRecipes from "@/pages/GetAllRecipes";

function HomePage() {

    return (
        <main>
            <div>
                <AddRecipe></AddRecipe>
            </div>
            <div>
                <GetRecipe></GetRecipe>
            </div>
            <div>
                <GetAllRecipes></GetAllRecipes>
            </div>
        </main>
    );
}

export default HomePage;