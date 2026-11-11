import { useState } from "react";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-start ">
        <div className="flex flex-col md:flex-row gap-5">
          <div>
            <button className="bg-primary text-surface rounded-xl">
              Vegan Kitchen
            </button>
          </div>
          <div>
            <button className="bg-surface text-primary rounded-xl">
              Vegetarian Kitchen
            </button>
          </div>
        </div>
        <div> Vegan Kitchen: plant-based, no diary, eggs or honey</div>
      </div>
      <SearchBar />
    </div>
  );
}
