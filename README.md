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

# 🌿 Herbelle – Vegan & Vegetarian Recipe Discovery

**Herbelle** is a vegan and vegetarian recipe discovery application that allows users to explore meals, discover new ingredients, and find cooking inspiration using [TheMealDB API](https://www.themealdb.com/api.php).

The application focuses exclusively on plant-based and vegetarian recipes, providing a curated discovery experience without exposing users to meat or seafood recipes.

### 🌱 Two Dietary Modes

Herbelle provides two distinct recipe discovery experiences:

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

One of the architectural considerations was how to restrict recipe discovery to vegan and vegetarian meals.

TheMealDB provides dedicated **Vegan** and **Vegetarian** categories, allowing Herbelle to retrieve recipes directly from the relevant category instead of searching the entire database and manually filtering individual recipes.

Rather than maintaining a separate recipe catalogue or manually curated allowlists as originally planned, Herbelle uses TheMealDB's category-based filtering endpoints.

### Category-Based Recipe Discovery

The application follows this approach:

1. **Select Dietary Category:** The user chooses either Vegan Kitchen or Vegetarian Kitchen.
2. **Fetch Category Recipes:** Herbelle requests recipes from the corresponding TheMealDB category endpoint.
3. **Display Matching Recipes:** The application displays recipes returned for the selected category.
4. **Search Within Category:** Users can search for recipes within their currently selected dietary category.
5. **Retrieve Recipe Details:** When a user selects a recipe, Herbelle retrieves its full details using the recipe ID.

This approach keeps recipe discovery focused on the selected dietary preference while allowing the application to use the recipes available through TheMealDB.

### TheMealDB API Endpoints

**Vegan category:**
`filter.php?c=Vegan`

**Vegetarian category:**
`filter.php?c=Vegetarian`

The category endpoints return recipe summaries, including meal IDs, names, and thumbnail images. Herbelle uses the recipe ID to retrieve complete recipe information through TheMealDB's lookup endpoint.

## 💡 Why Use a Category-Based Approach?

This implementation offers several advantages:

- **Simpler Architecture:** No need to maintain separate recipe allowlists or manually manage approved recipe IDs.
- **Broader Recipe Discovery:** Access recipes available through TheMealDB's dedicated dietary categories.
- **Consistent User Experience:** Users browse recipes based on their selected dietary category.
- **Dynamic Category Switching:** Changing dietary preferences triggers a request for the corresponding category.
- **Separation of Concerns:** TheMealDB handles recipe categorization and data retrieval, while Herbelle manages the user interface, application state, search, and recipe presentation.
- **Maintainability:** New recipes added to TheMealDB's categories can become available without manually updating a local recipe catalogue.

**Dietary classification note:** Herbelle relies on TheMealDB's Vegan and Vegetarian category assignments. It does not independently verify every recipe's ingredients, so the accuracy of dietary classification depends on the API's categorization.

## 🛠️ Technical Concepts Demonstrated

- Third-party REST API integration (TheMealDB)
- Asynchronous data fetching
- API endpoint selection based on user input
- Category-based data retrieval
- Search and filtering logic
- React state management
- Conditional rendering
- Component-based architecture
- Dynamic data rendering
- Separation of application logic and API responsibilities
- Loading and error state handling

## 🍃 Project Goal

Herbelle is designed to make recipe discovery simpler for people exploring vegan and vegetarian meals.

By using TheMealDB's dedicated dietary categories, the project demonstrates how a React application can use an external API's filtering capabilities to create a focused recipe discovery experience.

The application manages its own user interactions, category selection, search functionality, and recipe presentation while relying on the API for recipe data and dietary categorization.

**Note:** Herbelle controls recipe discovery through its own user interface. It does not restrict direct access to TheMealDB's API or independently enforce dietary restrictions on the external service.

---

#### Implementation Order for Herbelle

1. Set up TheMealDB API integration.
2. Implement Vegan and Vegetarian category endpoints.
3. Implement dietary mode selection.
4. Fetch recipes dynamically based on the selected category.
5. Display recipes returned by the selected category.
6. Implement recipe search within the selected category.
7. Implement recipe detail retrieval using recipe IDs.
8. Implement favorites functionality.
9. Test category switching, search behavior, API responses, and error handling.

#### Data Structure and State Management

1. **Selected Dietary Mode:** Store the currently selected category (Vegan or Vegetarian) in React state.
2. **Recipe Collection:** Store the recipes returned by the selected category endpoint in React state.
3. **Search Term:** Track the user's search input in React state.
4. **Favorites:** Maintain saved recipe IDs separately from the currently selected dietary category.

#### Role of React

1. **React State:** Tracks the selected dietary mode, fetched recipes, search term, loading status, errors, and favorites.
2. **API Integration:** Fetches recipes from the appropriate TheMealDB category endpoint.
3. **Search Logic:** Filters the currently retrieved category's recipes based on the user's search.
4. **Conditional Rendering:** Displays the appropriate recipes and UI based on the selected category and application state.
5. **Components:** Organize the application into reusable components for category selection, recipe cards, recipe details, search, and favorites.
