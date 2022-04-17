import { configureStore } from "@reduxjs/toolkit";
import todoslice from "../slices/todoslice";

export const store = configureStore({
  reducer: {
    //to-do reducer
    todo: todoslice
  },
});
