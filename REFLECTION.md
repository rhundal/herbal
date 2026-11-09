### Project Reflections

1. The most challenging part of the project for you.
2. A brief explanation of a design decision you made (e.g., why you structured a hook a certain way, how you decided to manage a piece of state).
3. How search works
   1. Imagine a user selects Vegan Kitchen. The application should:
      1. Identify the selected dietary mode.
      2. Retrieve the approved vegan recipe IDs.
      3. Match those IDs against the recipes returned by your API.
      4. Display only matching recipes.
      5. Apply the user's search term to that restricted collection.
      6. The same process applies to Vegetarian Kitchen, except it uses the vegetarian collection.
      7. Allowlist becomes your source of truth.
      8. For every new recipe:
         1. Retrieve it from TheMealDB.
         2. Review its ingredients.
         3. Assign its dietary classification.
         4. Add its ID to the appropriate collection.
         5. Make it searchable. This prevents newly discovered API recipes from automatically becoming available to users.
