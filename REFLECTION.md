### Project Reflections

1. The most challenging part of the project for you.
   1. Favorite Context and the favoriting feature. I had to use google to figure out how I would approach it, although I had some idea, I was not fully sure.
2. A brief explanation of a design decision you made (e.g., why you structured a hook a certain way, how you decided to manage a piece of state).
   1. Instead of passing the user's selected dietary category (Vegan vs. Vegetarian) and saved recipes down through multiple layers of components via props, I centralized them using two dedicated Context providers - UserInputContext and FavoriteContext.
   2. Instead of making a new api request on every keystroke in the search bar, useFetch fetches the meals for the active category once, while filterMealsBySearchTerm filters that array locally in memory as the user types. This prevents unnecessary API calls.
      1. In total I make 2 API calls - fetchMealsByCategory and fetchRecipeById
      2. filterMealsBySearchTerm - helper function which takes the userSearchTerm string and the Meal[] array already fetched by fetchMealsByCategory, then uses .filter() in memory to match recipe names.
