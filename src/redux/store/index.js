import { configureStore } from "@reduxjs/toolkit";

import filter from "../slices/filter";
import contacts from "../slices/contacts";

const rootReducer = {
  filter,
  contacts,
};

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
