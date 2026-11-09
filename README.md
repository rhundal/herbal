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

## ✨ Key Features

- **Vegan Kitchen:** Discover recipes that exclude meat, seafood, dairy, eggs, and other animal-derived ingredients.
- **Vegetarian Kitchen:** Explore recipes that exclude meat and seafood while allowing ingredients such as dairy and eggs.
- **Curated Recipe Discovery:** Search and browse an approved collection of vegan and vegetarian recipes.
- **Recipe Details:** View ingredients, measurements, cooking instructions, and recipe images.
- **Dietary Filtering:** Switch between Vegan Kitchen and Vegetarian Kitchen to explore recipes according to dietary preferences.

## 🔍 How I Implemented Dietary Restrictions

One of the design challenges was that **TheMealDB API does not provide a dedicated vegan or vegetarian filter**.

Rather than allowing users to search the entire API database and attempting to remove non-vegetarian results afterward, I implemented an application-level dietary restriction using a curated recipe allowlist.

### Curated Recipe Allowlist

Instead of relying entirely on API search results, Herbelle maintains an approved collection of recipe IDs retrieved from TheMealDB.

The application follows this approach:

1. **Fetch Recipe Data:** Retrieve recipe information from TheMealDB API.
2. **Maintain an Allowlist:** Store approved recipe IDs that have been reviewed and classified as vegan or vegetarian.
3. **Apply Dietary Classification:** Assign each approved recipe to its corresponding dietary category.
4. **Restrict Search Results:** Only allow searches against the curated recipe collection.
5. **Filter Dynamically:** Display recipes according to the user's selected dietary mode.

This ensures that users cannot discover non-approved recipes through the application's search functionality.

### 🌱 Two Dietary Modes

Herbelle provides two distinct recipe discovery experiences:

| Vegan Kitchen      | Vegetarian Kitchen |
| ------------------ | ------------------ |
| No meat or seafood | No meat or seafood |
| No dairy           | Dairy permitted    |
| No eggs            | Eggs permitted     |
| No honey           | Honey permitted    |

The two classifications are maintained separately because a vegetarian recipe is not necessarily vegan.

## 💡 Why Use an Allowlist Approach?

This implementation offers several advantages:

- **Greater Control:** The application controls which recipes users can access rather than depending on API search behavior.
- **Consistent User Experience:** Users only encounter recipes that align with the application's dietary focus.
- **More Reliable Filtering:** Separate vegan and vegetarian classifications prevent the two dietary categories from being treated as interchangeable.
- **Scalability:** New recipes can be reviewed, classified, and added to the collection without changing the overall filtering architecture.
- **Reduced Unwanted Results:** Non-approved recipes are excluded before they reach the application's search results.
- **Separation of Concerns:** The API handles recipe data retrieval, while the application manages dietary rules and discovery logic.

## 🛠️ Technical Concepts Demonstrated

- Third-party REST API integration (TheMealDB)
- Asynchronous data fetching
- Curated data management and allowlisting
- Search and filtering logic
- Conditional rendering in React
- State management
- Component-based architecture
- Separation of application logic and API responsibilities

## 🍃 Project Goal

Herbelle is designed to make recipe discovery simpler for people following vegan and vegetarian diets.

By combining an external recipe API with application-level dietary controls, the project demonstrates how an application can extend an API's capabilities to deliver a more focused and intentional user experience. The application enforces its own business rules rather than assuming the external API supports every requirement.

Note: Since my application utilizes a client-side allowlist, it controls what users can discover through my app's UI, not what someone could request directly from TheMealDB.
