import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./RecipeAction";

export const store = configureStore({
  reducer: rootReducer,
});
