import { configureStore } from "@reduxjs/toolkit";
import issueReducer from "./Slicer/issueReducer";
import authReducer from "./Slicer/authSlice";

export const store = configureStore({
  reducer: {
    count: issueReducer,
    auth: authReducer,

  },
});