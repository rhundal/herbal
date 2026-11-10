import "./App.css";
import CategoryPage from "./pages/CategoryPage";

import Homepage from "./pages/Homepage";

import { Route, Routes } from "react-router-dom";
import RecipeDetailsPage from "./pages/RecipeDetailsPage";
import FavoritesPage from "./pages/FavoritesPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import PageNotFound from "./pages/PageNotFound";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/category/:categoryName" element={<CategoryPage />} />
      <Route path="/recipe/:recipeId" element={<RecipeDetailsPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/search" element={<SearchResultsPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
