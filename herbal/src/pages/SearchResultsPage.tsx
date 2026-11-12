// search bar in a shared navbar allowing users to look up recipes by name
// displays results on this page of the search query
// this page is connected to the Browse tab

import {
  fetchMealsByCategory,
  filterMealsBySearchTerm,
} from "../services/apiService";
import useFetch from "../hooks/useFetch";
import UserInputContext from "../context/UserInputContext";

import CommonNavBar from "../components/CommonNavBar";
import Navbar from "../components/Navbar";
import { useState, useContext } from "react";
export default function SearchResultsPage() {
  // pass props from NavBar to this page
  // use callback function as props to fetch results by searching that term and display here
  // passing value from child to parent component
  const userContext = useContext(UserInputContext);

  const [userSearchTerm, setUserSearchTerm] = useState<string>("");

  // search userSearchTerm against the category selected by using the function filterMealsBySearchTerm

  if (!userContext) return null;

  let selectedCategoryByUser = userContext.selectedCategory;

  const {
    data: categoryMeals,
    loading,
    error,
  } = useFetch(
    () => fetchMealsByCategory(selectedCategoryByUser),
    [selectedCategoryByUser],
  );

  console.log(loading);
  console.log(error);

  const filteredMeals = categoryMeals
    ? filterMealsBySearchTerm(userSearchTerm, categoryMeals)
    : [];
  return (
    <div className="bg-background flex flex-col m-15">
      <CommonNavBar />
      <hr className="mt-10 border-2 border-border" />
      <Navbar setUserSearchTerm={setUserSearchTerm} />
      <div className="mt-5"> Search Results...</div>
      <div className="mt-5">
        <div className="w-full">
          <ul className="flex flex-wrap -m-3">
            {filteredMeals.map((meal) => (
              <li key={meal.idMeal} className="w-full sm:w-1/2 md:w-1/3 p-3">
                <div className="flex flex-col h-full rounded-xl bg-surface overflow-hidden shadow-sm">
                  <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 font-semibold text-primary">
                    {meal.strMeal}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
