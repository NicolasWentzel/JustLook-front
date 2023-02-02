import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    addContent: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addContent } = contentSlice.actions;
export default contentSlice.reducer;
