// to be imported in navbar
import { useState } from "react";

export default function SearchBar() {
  const [userInput, setUserInput] = useState<string>("");

  function handleFormSubmission(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleFormSubmission}>
      <div className="w-full rounded-lg">
        {/* here get the currently selected category via context and set the placeholder for input field based on the category */}
        <input
          type="text"
          value={userInput}
          placeholder="Search within Vegan Kitchen"
          className="w-full rounded-lg"
        />
      </div>
    </form>
  );
}
