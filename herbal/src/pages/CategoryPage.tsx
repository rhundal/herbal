// dynamic route that displays all recipes belonging to the selected category specified in the url
// shows a list of recipes in that category with links to its detailed recipe page
// builds the category page based on the category in the url

import { useContext } from "react";
import CommonNavBar from "../components/CommonNavBar";
import {
  fetchMealsByCategory,
  filterMealsBySearchTerm,
  fetchRecipeById,
} from "../services/apiService";

import UserInputContext from "../context/UserInputContext";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

export default function CategoryPage() {
  const userContext = useContext(UserInputContext);

  if (!userContext) return null;

  let selectedCategoryByUser = userContext.selectedCategory;

  // data returned from useFetch = Single source of truth. data returned from useFetch is meals state.
  // Whenever selectedCategory changes, useFetch automatically updates data and re-renders CategoryPage.
  // instead of calling the funciton immediately, i want to pass the function for later execution
  // inside useEffect which I do by using arrow function and also pass dependency array

  const { data, loading, error } = useFetch(
    () => fetchMealsByCategory(selectedCategoryByUser),
    [selectedCategoryByUser],
  );

  console.log(selectedCategoryByUser);
  console.log(data);
  console.log(loading);
  console.log(error);

  const navigate = useNavigate();

  function handleOpenRecipe() {
    navigate(`/recipe/${data?.at(0)?.idMeal}`);
  }

  return (
    <div className="bg-background flex flex-col m-15">
      <CommonNavBar />
      <hr className="mt-10 border-2 border-border" />
      <div className="flex flex-col gap-5 mb-5 mt-5">
        <div className="flex flex-row justify-between text-primary">
          <div className="flex justify-start">Home/Vegan</div>
          <div className="flex justify-end bg-primary-soft">
            /category/Vegan
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 md:flex-row p-6 bg-primary-soft rounded-xl justify-between mb-10">
        <div className="flex flex-col justify-start">
          <h1 className="text-3xl text-primary mb-1">Vegan Kitchen</h1>
          <p className="text-sm mb-1">Plant-based: no dairy, eggs, or honey</p>
          <p className="text-xs text-primary">6 recipes </p>
        </div>
        <div className="justify-end">
          <button className="bg-surface text-primary rounded-xl border-1 border-primary px-3 py-1">
            Switch to Vegetarian Kitchen
          </button>
        </div>
      </div>
      <div>
        <div className="bg-surface rounded-xl border-1 border-border w-full p-5 flex flex-row justify-between items-center mb-10">
          <div className="flex flex-row gap-5 justify-start items-center">
            <div className="w-20 h-20 border-1 border-border rounded-xl bg-photo-1 place-items-center">
              <img
                src={data?.at(0)?.strMealThumb}
                alt="recipe"
                className="rounded-xl"
              />
            </div>
            <div className="text-md text-primary"> {data?.at(0)?.strMeal}</div>
          </div>
          <div className="text-primary text-center justify-end">
            <button onClick={handleOpenRecipe}> View recipe </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/*
Testing notes

before rendering the results of these functions on ui, i want to test them in console. so i have my context ready, 
my useFetch ready and the apiService ready, to test if the apis are fetching properly,  
i am thinking of testing it in the categorypage component, i will start with 
calling context here in CategoryPage Component to get the values of the selectedCategory which i then pass fetchMealsByCategory(selectedCategory) to useFetch 
 and console.log the result


*/
