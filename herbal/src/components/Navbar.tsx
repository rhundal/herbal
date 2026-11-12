import { useState, useContext } from "react";
import SearchBar from "./SearchBar";
import UserInputContext from "../context/UserInputContext";
// import { useNavigate } from "react-router-dom";

interface NavbarProps {
  setUserSearchTerm: (term: string) => void;
}

export default function Navbar({ setUserSearchTerm }: NavbarProps) {
  const userContext = useContext(UserInputContext);

  if (!userContext) return null;

  // const navigate = useNavigate();

  let selectedCategoryByUser = userContext.selectedCategory;
  let setSelectedCategory = userContext.setSelectedCategory;

  function switchToVeganKitchen() {
    setSelectedCategory("Vegan");
  }

  function switchToVegetarianKitchen() {
    setSelectedCategory("Vegetarian");
  }

  return (
    <div className="flex flex-col gap-5 mt-10">
      <div className="flex justify-start ">
        <div className="flex flex-col md:flex-row gap-5">
          <div>
            <button
              onClick={switchToVeganKitchen}
              className="bg-primary text-surface rounded-xl border-1 border-surface px-5"
            >
              Vegan Kitchen
            </button>
          </div>
          <div>
            <button
              onClick={switchToVegetarianKitchen}
              className="bg-surface text-primary rounded-xl border-1 border-primary px-2"
            >
              Vegetarian Kitchen
            </button>
          </div>
        </div>
      </div>
      <div className="mt-5 text-primary font-bold text-2xl">
        {selectedCategoryByUser === "Vegan"
          ? "Vegan Kitchen"
          : "Vegetarian Kitchen"}
      </div>
      <div className="">
        {selectedCategoryByUser === "Vegan"
          ? "plant-based, no diary, eggs or honey"
          : "diary, eggs and honey allowed"}
      </div>
      <SearchBar setUserSearchTerm={setUserSearchTerm} />
    </div>
  );
}
