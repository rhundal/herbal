import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { UserInputProvider } from "./context/UserInputContext.tsx";
import { FavoriteProvider } from "./context/FavoritesContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <FavoriteProvider>
        <UserInputProvider>
          <App />
        </UserInputProvider>
      </FavoriteProvider>
    </BrowserRouter>
  </StrictMode>,
);
