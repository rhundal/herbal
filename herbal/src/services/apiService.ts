/*
  - Async Operations - API Service (apiService.ts)
    - async/await function using promises to fetch category data and handle errors using try/catch
*/

/*
My approach to how to fetch data from the api

1. apiService.ts - defines how to fetch the data (takes in 2 parameters - searchTerm and selectedCategory)
2. contextAPI - I am introducing a contextapi to track selectCategory and searchTerm across my components. 
3. Keep useFetch generic
Because the project requires a generic useFetch hook used throughout the application, useFetch should not know anything about selectedCategory or Context.
Instead, page component reads selectedCategory from Context and passes () => fetchMealsByCategory(selectedCategory) into useFetch. 
That way, I can reuse the exact same useFetch hook on recipe detail page for fetchRecipeById(idMeal)—which doesn't use Context at all.
4. custom hook with useEffect - controls when that fetch runs in my components. custom hook reads the values from 
component and then passes them down as arguments when calling apiService.ts functions.


Possible issues

• Search input frequency. Since searchTerm lives in Context and triggers a fetch inside useEffect, typing every single letter in a search bar could fire an API call on every keystroke. Consider debouncing the search term (waiting a brief pause after typing stops) before updating Context or running the fetch.
• Stale requests (Race conditions). If a user switches categories or types quickly, a slower previous request might resolve after a newer one. Using an AbortController cleanup function inside your useEffect will prevent old results from overwriting new ones.
• URL state vs. Context. Tracking selectedCategory and searchTerm in Context works great for component sharing. Just keep in mind that if a user refreshes the browser or shares a link to a category or search page, Context resets unless you also sync those values with URL parameters later.

I plan on exporting 2 functions from this file apiService.ts
1. one for fetching recipes based on selected category 
2. another for fetching results for recipes based on search query within that category

*/

import type {
  AllowedCategories,
  Meal,
  Recipe,
  RawMealResponse,
} from "../types/recipe";
import { type Category } from "../types/recipe";

// fetchMealsByCategory(selectedCategory: AllowedCategories): Promise<Meal[]> fetches runtime allowlist of Meal cards.

const fetchMealsByCategory = async (
  selectedCategory: AllowedCategories,
): Promise<Meal[]> => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`,
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch category: {selectedCategory}`);
    }

    const dataMealsFetched: { meals: Meal[] | null } = await response.json();

    return dataMealsFetched.meals ?? [];
  } catch (error) {
    console.error("Error fetching meals by category:", error);
    throw error;
  }
};

// filterMealsByTerm(searchTerm: string, allowList: Meal[]): Meal[] filters that Meal[] allowlist synchronously as the user types.
// called on category page
function filterMealsBySearchTerm(
  searchTerm: string,
  allowList: Meal[],
): Meal[] {
  try {
    if (!searchTerm.trim().toLocaleLowerCase()) {
      return allowList;
    }

    return allowList.filter((meal) =>
      meal.strMeal
        .toLocaleLowerCase()
        .includes(searchTerm.trim().toLocaleLowerCase()),
    );
  } catch (error) {
    console.error("Error fetching recipes by category:", error);
    throw error;
  }
}

// fetchRecipeById(idMeal: string): Promise<Recipe | null> fetches full Recipe details via api... when a user clicks a Meal card.
// called on recipe details page
const fetchRecipeById = async (idMeal: string): Promise<Recipe | null> => {
  try {
    if (!idMeal.trim()) {
      return null;
    }

    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`,
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch recipe with ID: ${idMeal}`);
    }

    const mealsArray: { meals: RawMealResponse | string | null } =
      await response.json();

    if (!Array.isArray(mealsArray.meals)) {
      return null;
    }
    const recipeObject = mealsArray.meals[0];

    if (!recipeObject) return null;

    // only add if its not emtpy or null
    const ingredients = [
      recipeObject.strIngredient1,
      recipeObject.strIngredient2,
      recipeObject.strIngredient3,
      recipeObject.strIngredient4,
      recipeObject.strIngredient5,
      recipeObject.strIngredient6,
      recipeObject.strIngredient7,
      recipeObject.strIngredient8,
      recipeObject.strIngredient9,
      recipeObject.strIngredient10,
    ].filter(Boolean);

    return {
      ...recipeObject,
      ingredients,
    };
  } catch (error) {
    console.error("Error fetching recipe by category:", error);
    throw error;
  }
};

export { fetchMealsByCategory, filterMealsBySearchTerm, fetchRecipeById };
