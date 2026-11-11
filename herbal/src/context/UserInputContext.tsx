// Steps to follow
// 1. creating context
// 2. providing context
// 3. consuming context
import { useState, createContext, useMemo } from "react";

import { type AllowedCategories } from "../types/recipe";

interface UserInputProps {
  children: React.ReactNode;
}
interface UserInputContextType {
  selectedCategory: AllowedCategories;
  searchTerm: string;
  setSelectedCategory: (category: AllowedCategories) => void;
  setSearchTerm: (term: string) => void;
}

// 1. creating context

const UserInputContext = createContext<UserInputContextType | undefined>(
  undefined,
);

// 2. create providing context or provider component

export function UserInputProvider({ children }: UserInputProps) {
  const [selectedCategoryState, setSelectedCategoryState] =
    useState<AllowedCategories>("Vegan");
  const [searchTermState, setSearchTermState] = useState<string>("");

  let value = useMemo<UserInputContextType>(
    () => ({
      selectedCategory: selectedCategoryState,
      searchTerm: searchTermState,
      setSelectedCategory: setSelectedCategoryState,
      setSearchTerm: setSearchTermState,
    }),
    [selectedCategoryState, searchTermState],
  );

  return (
    <UserInputContext.Provider value={value}>
      {children}
    </UserInputContext.Provider>
  );
}

export default UserInputContext;
