import { configureStore } from "@reduxjs/toolkit";
import bottomTabsReducer from "./Perfil/reducer";
import manga from "./Manga/reducer";
import capture from "./Capture/reducer";
import mangaClick from "./Details/reducer";

export const store = configureStore({
  reducer: {
    bottomTabsReducer: bottomTabsReducer,
    manga: manga,
    capture: capture,
    mangaClick: mangaClick,
  },
  devTools: true,
});
