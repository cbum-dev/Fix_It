import { configureStore } from "@reduxjs/toolkit";
import issueReducer from "./Slicer/issueReducer";

export const store = configureStore({
  reducer: {
    // Add the reducer here
    count: issueReducer,
  },
});