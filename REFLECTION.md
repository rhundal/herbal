### Project Reflections

1. The most challenging part of the project for you.
2. A brief explanation of a design decision you made (e.g., why you structured a hook a certain way, how you decided to manage a piece of state).
3. How search works
   1. Imagine a user selects Vegan Kitchen. The application should:
      1. Identify the selected dietary mode.
      2. Search the fetched results (stateVariable) for that dietary mode.
      3. Apply the user's search term to that fetched result.
      4. The same process applies to Vegetarian Kitchen, except it uses the vegetarian collection.
      5. Allowlist becomes your source of truth. (optional can maintain to gain more control over the results - for future maybe)
