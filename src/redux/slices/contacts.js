import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: [],
  //   reducers: {
  //     addTodo: (state, action) => [...state, action.payload],
  //     deleteTodo: (state, action) =>
  //       state.filter((todo) => todo.id !== action.payload),
  //   },
});

export const { addTodo, deleteTodo } = contactsSlice.actions;
export default contactsSlice.reducer;
