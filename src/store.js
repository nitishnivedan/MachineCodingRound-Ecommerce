import { configureStore } from "@reduxjs/toolkit";

import specificProductsSlice from "./specificProductsSlice";

const store = configureStore({
  reducer: {
    specificProductLists: specificProductsSlice,
  },
});

export default store;
