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
          <div className="flex justify-start">image here</div>
          <div className="flex flex-col">
            <div> Button Vegan Kitchen</div>
            <div>
              <h1>Spicy Penne</h1>
            </div>
            <div>Ingredients</div>
            <div className="flex flex-col">
              <div className="flex flex-row">
                <div>ingredient</div>
                <div> 1 pound</div>
              </div>
            </div>
          </div>
        </div>
        <div className="">Instructions</div>
        <div className="flex flex-col">
          <div>1. instruction 1</div>
          <div>2. instruction 2</div>
        </div>
      </div>
    </div>
  );
}
