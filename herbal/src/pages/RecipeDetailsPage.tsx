// displays full details for a single recipe
// includes button for Add To Favorites or Remove from Favorites
// favorite button handled by FavoritesContext

import CommonNavBar from "../components/CommonNavBar";
import { useNavigate } from "react-router-dom";

export default function RecipeDetailsPage() {
  const navigate = useNavigate();

  function handleOpenMenu() {
    navigate("/category/Vegan");
  }

  return (
    <div className="bg-background flex flex-col m-15">
      <CommonNavBar />
      <hr className="mt-10 border-2 border-border" />
      <div className="flex flex-row justify-start m-5">
        <div className="text-primary text-center justify-end">
          <button onClick={handleOpenMenu}> Back to recipes (menu) </button>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row gap-10">
          <div className="flex justify-start">
            <img src="" className="w-130 h-90 rounded-xl mb-10" />
          </div>
          <div className="flex flex-col">
            <div className="mb-5">
              <button className="bg-transparent text-primary rounded-xl border-1 border-primary px-3 p-1">
                Vegan Kitchen
              </button>
            </div>
            <div className="mb-5">
              <h1 className="text-primary text-3xl">Spicy Penne</h1>
            </div>
            <div className="text-primary font-bold mb-2">Ingredients</div>
            <div className="flex flex-col">
              <div className="flex flex-row mb-3">
                <div>ingredient</div>
                <div> 1 pound</div>
              </div>
              <hr />
            </div>
          </div>
        </div>
        <div className="text-primary font-bold">Instructions</div>
        <div className="flex flex-col text-primary">
          <div>1. instruction 1</div>
          <div>2. instruction 2</div>
        </div>
      </div>
    </div>
  );
}
