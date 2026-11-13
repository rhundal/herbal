import { useNavigate } from "react-router-dom";
import FavoritesContext from "../context/FavoritesContext";
import { useContext } from "react";
export default function CommonNavBar() {
  const navigate = useNavigate();

  const favContext = useContext(FavoritesContext);

  if (!favContext) return null;

  let favoritesArray = favContext.favorites;
  function handleBrowse() {
    navigate("/search");
  }

  function handleFavorites() {
    navigate("/favorites");
  }

  return (
    <header className="flex flex-col md:flex-row justify-between items-center">
      <div className="flex justify-start mb-5 md:mb-0">
        <h1 className="text-3xl font-heading text-primary font-bold">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="bg-transparent border-none"
          >
            Herbal
          </button>
        </h1>
      </div>
      <div className="flex justify-end text-md text-primary">
        <div className="flex flex-row gap-10 font-bold">
          <div>
            {/* remove the underline or toggle between selected button */}
            <button onClick={handleBrowse} className="border-b border-primary">
              {" "}
              Browse
            </button>
          </div>
          <div>
            <button
              onClick={handleFavorites}
              className="border-b border-primary"
            >
              {" "}
              Favorites({favoritesArray.length})
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
