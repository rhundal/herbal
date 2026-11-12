// displays full details for a single recipe
// includes button for Add To Favorites or Remove from Favorites
// favorite button handled by FavoritesContext
import { useContext, useState } from "react";
import CommonNavBar from "../components/CommonNavBar";
import { useNavigate, useParams } from "react-router-dom";
import UserInputContext from "../context/UserInputContext";
import useFetch from "../hooks/useFetch";
import {
  fetchMealsByCategory,
  filterMealsBySearchTerm,
  fetchRecipeById,
} from "../services/apiService";
export default function RecipeDetailsPage() {
  const userContext = useContext(UserInputContext);

  if (!userContext) return null;

  let selectedCategoryByUser = userContext.selectedCategory;

  const { recipeId } = useParams<{ recipeId: string }>();

  const {
    data: recipe,
    loading,
    error,
  } = useFetch(() => fetchRecipeById(recipeId ?? ""), [recipeId]);

  const navigate = useNavigate();

  function handleOpenMenu() {
    navigate("/category/Vegan");
  }

  return (
    <div className="bg-background flex flex-col m-15">
      <CommonNavBar />
      <hr className="mt-10 border-2 border-border" />
      <div className="flex flex-row justify-start m-5">
        <div className="text-primary text-center justify-end">
          <button onClick={handleOpenMenu}> Back to recipes (menu) </button>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row gap-10">
          <div className="flex justify-start">
            <img
              src={recipe?.strMealThumb}
              className="w-130 h-90 rounded-xl mb-10"
            />
          </div>
          <div className="flex flex-col">
            <div className="mb-5">
              <button className="bg-transparent text-primary rounded-xl border-1 border-primary px-3 p-1">
                {selectedCategoryByUser === "Vegan"
                  ? "Vegan Kitchen"
                  : "Vegetarian Kitchen"}
              </button>
            </div>
            <div className="mb-5">
              <h1 className="text-primary text-3xl"> {recipe?.strMeal}</h1>
            </div>
            <div className="text-primary font-bold mb-2">Ingredients</div>
            <ul>
              {recipe?.ingredients.map((ingredient, index) => (
                <li key={`${ingredient}-${index}`}>
                  <div className="flex flex-col">
                    <div className="flex flex-row mb-3">
                      <div>{ingredient}</div>
                      <div> {recipe.strMeasures[index]}</div>
                    </div>
                    <hr />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-primary font-bold">Instructions</div>
        <div className="flex flex-col text-primary">
          <div>1. instruction 1</div>
          <div>2. instruction 2</div>
        </div>
      </div>
    </div>
  );
}
