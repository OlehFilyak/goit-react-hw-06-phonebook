import { createSlice } from "@reduxjs/toolkit";

const initialState = () =>
  JSON.parse(window.localStorage.getItem("contacts")) ?? [];

console.log(initialState());
const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState(),
  reducers: {
    setContact: (state, action) => [...state, action.payload],
    deleteContact: (state, action) =>
      state.filter((contact) => contact.id !== action.payload),
  },
});

export const { deleteContact, setContact } = contactsSlice.actions;
export default contactsSlice.reducer;

// const dispatch = useDispatch();

// const deleteItem = () => {
//   dispatch(deleteTodo(id));
// };
//   deleteTodo: (state, action) =>
//     state.filter((todo) => todo.id !== action.payload),
// },
