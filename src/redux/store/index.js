import { configureStore } from "@reduxjs/toolkit";

import filter from "../slices/filter";
import contacts from "../slices/contacts";
import number from "../slices/number";
import name from "../slices/name";

const rootReducer = {
  filter,
  contacts,
  number,
  name,
};

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
