import { createSlice } from "@reduxjs/toolkit";

const numberSlice = createSlice({
  name: "number",
  initialState: "",
  reducers: {
    setNumber: (state, action) => action.payload,
  },
});

export const { setNumber } = numberSlice.actions;
export default numberSlice.reducer;
