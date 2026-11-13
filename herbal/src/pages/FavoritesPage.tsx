// display lists of recipes user marked as favorite
// if no favorites, the page displays a default mssg - prompting user to browse and add favs.
import { useContext } from "react";
import UserInputContext from "../context/UserInputContext";
import FavoritesContext from "../context/FavoritesContext";
import CommonNavBar from "../components/CommonNavBar";
import { useNavigate } from "react-router-dom";

export default function FavoritesPage() {
  const userContext = useContext(UserInputContext);
  const favContext = useContext(FavoritesContext);

  if (!userContext || !favContext) return null;

  let favoritesArray = favContext.favorites;

  const navigate = useNavigate();

  function handleOpenRecipe(id: string) {
    navigate(`/recipe/${id}`);
  }
  return (
    <div className="bg-background flex flex-col m-15">
      <CommonNavBar />
      <hr className="mt-10 border-2 border-border" />
      <main>
        <div className="flex flex-col gap-3 justify-start mt-5">
          <div>
            <h2 className="text-3xl font-heading text-primary font-bold">
              Your Favorites
            </h2>
            <h3>
              {favoritesArray.length > 0 ? "" : "Please add some favorites"}
            </h3>
          </div>
          <div>
            <ul>
              {favoritesArray?.map((item) => (
                <li key={item.idMeal}>
                  <div className="bg-surface rounded-xl border-1 border-border w-full p-5 flex flex-row justify-between items-center mb-10">
                    <div className="flex flex-row gap-5 justify-start items-center">
                      <div className="w-20 h-20 border-1 border-border rounded-xl bg-photo-1 place-items-center">
                        <img
                          src={item.strMealThumb}
                          alt="recipe"
                          className="rounded-xl"
                        />
                      </div>
                      <div className="text-md text-primary">
                        {" "}
                        {item.strMeal}
                      </div>
                    </div>
                    <div className="text-primary text-center justify-end">
                      <button onClick={() => handleOpenRecipe(item.idMeal)}>
                        View recipe{" "}
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
