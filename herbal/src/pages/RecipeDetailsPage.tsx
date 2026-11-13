// displays full details for a single recipe
// includes button for Add To Favorites or Remove from Favorites
// favorite button handled by FavoritesContext
import { useContext } from "react";
import CommonNavBar from "../components/CommonNavBar";
import { useNavigate, useParams } from "react-router-dom";
import UserInputContext from "../context/UserInputContext";
import useFetch from "../hooks/useFetch";
import { fetchRecipeById } from "../services/apiService";
import FavoritesContext from "../context/FavoritesContext";

import type { Recipe } from "../types/recipe";

export default function RecipeDetailsPage() {
  const userContext = useContext(UserInputContext);
  const favContext = useContext(FavoritesContext);

  if (!userContext || !favContext) return null;

  let isFav = favContext.isFavorite;
  let addFav = favContext.addFavorite;
  let remFav = favContext.removeFavorite;

  let selectedCategoryByUser = userContext.selectedCategory;

  const { recipeId } = useParams<{ recipeId: string }>();

  const {
    data: recipe,
    loading,
    error,
  } = useFetch(() => fetchRecipeById(recipeId ?? ""), [recipeId]);

  console.log(loading);
  console.log(error);

  function handleToggleFavorite(currentRecipe: Recipe | null) {
    if (!currentRecipe) return;

    if (isFav(currentRecipe.idMeal)) {
      remFav(currentRecipe.idMeal);
      return;
    }

    addFav(currentRecipe);
  }

  const navigate = useNavigate();

  function handleOpenMenu() {
    navigate("/category/Vegan");
  }

  return (
    <div className="bg-background flex flex-col m-15">
      <CommonNavBar />
      <hr className="mt-10 border-2 border-border" />
      <div className="flex flex-col md:flex-row justify-start m-5">
        <div className="text-primary text-center justify-end">
          <button onClick={handleOpenMenu}> Back to recipes (menu) </button>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex justify-start shrink-0">
            <img
              src={recipe?.strMealThumb}
              className="w-130 h-90 rounded-xl mb-10"
            />
          </div>
          <div className="flex flex-col flex-1 min-w-0">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="m-5 flex-start">
                <button className="bg-transparent text-primary rounded-xl border-1 border-primary px-3 p-1">
                  {selectedCategoryByUser === "Vegan"
                    ? "Vegan Kitchen"
                    : "Vegetarian Kitchen"}
                </button>
              </div>
              <div className="m-5 flex-end">
                <button
                  onClick={() => handleToggleFavorite(recipe)}
                  className="bg-surface text-primary rounded-xl border-1 bg-photo-5 border-error px-3 py-1"
                >
                  Add To Favorites
                </button>
              </div>
            </div>
            <div className="mb-5">
              <h1 className="text-primary text-3xl"> {recipe?.strMeal}</h1>
            </div>
            <div className="text-primary font-bold mb-2">Ingredients</div>
            <ul className="mt-3 w-full">
              {recipe?.ingredients.map((ingredient, index) => (
                <li key={`${ingredient}-${index}`} className="">
                  <div className="flex flex-col">
                    <div className="flex flex-col md:flex-row mb-3 justify-between">
                      <div className="flex justify-start">{ingredient}</div>
                      <div className="flex justify-end">
                        {" "}
                        {recipe.strMeasures[index]}
                      </div>
                    </div>
                    <hr className="mb-3 border-t border-border" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-primary font-bold">Instructions</div>

        <div className="flex flex-col text-primary">
          <div> {recipe?.strInstructions}</div>
        </div>
      </div>
    </div>
  );
}
