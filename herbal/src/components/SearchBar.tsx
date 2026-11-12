// to be imported in navbar
import { useContext } from "react";
import UserInputContext from "../context/UserInputContext";
export default function SearchBar({ setUserSearchTerm }: any) {
  const userContext = useContext(UserInputContext);

  if (!userContext) return null;

  let selectedCategoryByUser = userContext.selectedCategory;
  function handleFormSubmission(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleFormSubmission}>
      <div className="w-full rounded-lg">
        {/* here get the currently selected category via context and set the placeholder for input field based on the category */}
        <input
          type="text"
          onChange={(e) => setUserSearchTerm(e.target.value)}
          placeholder={
            selectedCategoryByUser === "Vegan"
              ? "Search within Vegan Kitchen"
              : "Search within Vegetarian Kitchen"
          }
          className="w-full rounded-lg bg-surface p-3"
        />
      </div>
    </form>
  );
}
