## Project Objective

> Build a client-side “Recipe Discovery” (SPA) application which allows users to browse recipes by 1. category 2. search for specific recipes 3. view details of a recipe 4. manage > favorites.
> This project uses free api for recipe data - TheMealDB API (no key required)

<details>
<summary> This Project Demonstrates:</summary>
1. State Management & Data Fetching
2. Custom Hooks
3. Globa State with Context API
4. Routing
5. Components & UI management
</details>

# 🌿 Herbal – Vegan & Vegetarian Recipe Discovery

**Herbal** is a vegan and vegetarian recipe discovery application that allows users to explore meals, discover new ingredients, and find cooking inspiration using [TheMealDB API](https://www.themealdb.com/api.php).

The application focuses exclusively on plant-based and vegetarian recipes, providing a curated discovery experience without exposing users to meat or seafood recipes.

### 🌱 Two Dietary Modes

Herbal provides two distinct recipe discovery experiences:

| Vegan Kitchen      | Vegetarian Kitchen |
| ------------------ | ------------------ |
| No meat or seafood | No meat or seafood |
| No dairy           | Dairy permitted    |
| No eggs            | Eggs permitted     |
| No honey           | Honey permitted    |

The two classifications are maintained separately because a vegetarian recipe is not necessarily vegan.

## ✨ Key Features

- **Vegan Kitchen:** Discover recipes from TheMealDB's dedicated Vegan category.
- **Vegetarian Kitchen:** Explore recipes from TheMealDB's dedicated Vegetarian category.
- **Dietary Category Selection:** Switch between Vegan Kitchen and Vegetarian Kitchen to explore recipes based on dietary preferences.
- **Recipe Search:** Search for meals within the currently selected dietary category.
- **Recipe Details:** View ingredients, measurements, cooking instructions, and recipe images.
- **Favorites:** Save favorite recipes for easy access.

## 🔍 How I Implemented Dietary Categories

One of the architectural considerations was how to restrict recipe discovery to vegan and vegetarian meals. A design challenge is that TheMealDB's search endpoint has no dietary filter. search.php?s= searches the entire database, so a search for a "dish" can return meat dishes.TheMealDB does offer filter.php?c=Vegan and filter.php?c=Vegetarian, which return every recipe in those categories. However, no available free-tier endpoint combines a category filter with a search term.

### Evolution of the Approach

**Original plan: a hand-picked allowlist.** I planned to maintain a list of recipe IDs that I had personally reviewed and classified as vegan or vegetarian, and restrict all searches to that list. Too much work.

**Revised plan: an API-derived allowlist.** After discovering TheMealDB's category filter, I dropped the hand-picked list. The category endpoints now help create the allowlist at runtime, so the API's own category assignment defines which recipes the app can show. Search is done client-side against that list instead of calling the API's search endpoint.

#### How It Works

1. **Fetch the Category List:** On load (or when the user switches kitchens), fetch `filter.php?c=Vegan` or `filter.php?c=Vegetarian` and store the result in state as an array. This is the application's allowlist.
2. **Search Client-Side:** Filter that array by recipe name (`strMeal`) against the user's search term. The app never calls `search.php?s=`, so non-approved recipes can never appear in results.
3. **Fetch Details on Demand:** The category endpoints return only a lightweight record (`idMeal`, `strMeal`, `strMealThumb`). Full details (ingredients, measurements, instructions) are fetched with `lookup.php?i={id}` only when the user opens a recipe.

This approach keeps recipe discovery focused on the selected dietary preference while allowing the application to use the recipes available through TheMealDB.

## 💡 Why Use an API-Derived Allowlist?

- **Dietary Control Without Manual Upkeep:** The app still restricts users to an approved set of recipes, but the set comes from the API's categories instead of a list I maintain by hand.
- **Reliable Filtering:** Results are limited to the selected category before search is applied, so unwanted recipes are excluded up front instead of being stripped out afterward.
- **Fast Search:** The category lists are small, so searching in memory is instant and requires no extra network requests.
- **Efficient Data Fetching:** Full recipe details are requested only when a user opens a recipe.
- **Separation of Concerns:** The API handles recipe data and category membership, while the application manages search and discovery logic.

## ⚠️ Trade-offs and Limitations

- **Name-only search:** Because search runs on the lightweight category records, it matches recipe names only. Searching by ingredient or instructions would require a detail lookup for every recipe.
- **Reliance on TheMealDB's classification:** The app trusts the API's Vegan and Vegetarian categories rather than my own review, so recipes are only as accurately classified as the API data.
-

## 🛠️ Technical Concepts Demonstrated

- Third-party REST API integration (TheMealDB)
- Asynchronous data fetching
- Client-side search and filtering
- Derived state vs. stored state
- Conditional rendering in React
- State management
- Component-based architecture
- Separation of application logic and API responsibilities

## 🍃 Project Goal

Herbal is designed to make recipe discovery simpler for people following vegan and vegetarian diets.

By combining an external recipe API with application-level dietary controls, the project demonstrates how an application can extend an API's capabilities to deliver a more focused and intentional user experience.

**Note:** Herbal controls recipe discovery through its own user interface. It does not restrict direct access to TheMealDB's API or independently enforce dietary restrictions on the external service.

---

#### Implementation Order for Herbal

1. Set up TheMealDB API integration.
2. Implement Vegan and Vegetarian category endpoints.
3. Implement dietary mode selection.
4. Fetch recipes dynamically based on the selected category.
5. Display recipes returned by the selected category.
6. Implement recipe search within the selected category.
7. Implement recipe detail retrieval using recipe IDs.
8. Implement favorites functionality.
9. Test category switching, search behavior, API responses, and error handling.

### ⚛️ Role of React and Application Flow

#### My approach to how to fetch data from the api

1. apiService.ts - defines how to fetch the data (takes in 2 parameters - searchTerm and selectedCategory)
2. contextAPI - I am introducing a contextapi to track selectCategory and searchTerm across my components.
3. I also have FavoritesContext for tracking favorites across all the components
4. I also have useLocalStorage hook for support of localstorage saving of user preferences across the applicaiton.
5. custom hook with useEffect - controls when that fetch runs in my components. custom hook reads the values from
   Context and then passes them down as arguments when calling apiService.ts functions.

#### Possible issues

1. Search input frequency. Since searchTerm lives in Context and triggers a fetch inside useEffect, typing every single letter in a search bar could fire an API call on every keystroke. I might consider debouncing the search term (waiting a brief pause after typing stops) before updating Context or running the fetch.
2. Stale requests (Race conditions). If a user switches categories or types quickly, a slower previous request might resolve after a newer one. Using an AbortController cleanup function inside your useEffect will prevent old results from overwriting new ones. - already fixed this
3. URL state vs. Context. Tracking selectedCategory and searchTerm in Context works great for component sharing. If a user refreshes the browser or shares a link to a category or search page, Context resets unless I also sync those values with URL parameters later.
4. I need to standardize or clean up the instructions for a recipe before rendering them because right now they are a mixture of different formats.

#### I am exporting 3 functions from file apiService.ts

1. one for fetching meals based on selected category
2. second for fetching results for recipes based on search query within that category
3. third for fetching recipe details for the selected meals
