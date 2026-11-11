export type AllowedCategories = "Vegan" | "Vegetarian" | "";

export interface Category {
  idCategory: string;
  strCategory: AllowedCategories;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

export interface Meal {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
  strArea: string;
  strCountry: string;
}

export interface RawMealResponse {
  idMeal: string;
  strMeal: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string | null;
  strYoutube: string | null;
  strIngredient1: string | null;
  strIngredient2: string | null;
  strIngredient3: string | null;
  strIngredient4: string | null;
  strIngredient5: string | null;
  strIngredient6: string | null;
  strIngredient7: string | null;
  strIngredient8: string | null;
  strIngredient9: string | null;
  strIngredient10: string | null;
}

export interface Recipe {
  idMeal: string;
  strMeal: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string[];
  strYoutube: string | null;
  ingredients: string[];
}

export interface UseFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}
