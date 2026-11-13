// Steps to follow
// 1. creating context
// 2. providing context
// 3. consuming context
import { useState, createContext, useMemo } from "react";
import { type Recipe } from "../types/recipe";

interface FavoritesContextType {
  //   favoritedItem: Recipe;
  addFavorite: (item: Recipe) => void;
  removeFavorite: (recipeId: string) => void;
  isFavorite: (recipeId: string) => boolean;
  favorites: Recipe[];
}

interface FavoritesProps {
  children: React.ReactNode;
}

// 1. creating context

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined,
);

export function FavoriteProvider({ children }: FavoritesProps) {
  //   const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [favorites, setFavorites] = useState<Recipe[]>([]);

  function addFavFunction(recipe: Recipe) {
    setFavorites((prev) => [...prev, recipe]);
  }

  function removeFavFunction(recipeId: string) {
    setFavorites((prev) => prev.filter((item) => item.idMeal !== recipeId));
  }

  function isFavorites(recipeId: string) {
    return favorites.some((fav) => fav.idMeal === recipeId);
  }

  let value = useMemo<FavoritesContextType>(
    () => ({
      addFavorite: addFavFunction,
      removeFavorite: removeFavFunction,
      isFavorite: isFavorites,
      favorites: favorites,
    }),
    [favorites],
  );

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
