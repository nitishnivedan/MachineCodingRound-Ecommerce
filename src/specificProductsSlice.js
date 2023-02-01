import { createSlice } from "@reduxjs/toolkit";

const specificProductSlice = createSlice({
  name: "specificProductLists",
  initialState: {
    value: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addItem } = specificProductSlice.actions;
export default specificProductSlice.reducer;
