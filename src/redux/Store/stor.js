import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Features/auth/authSclice.js"

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
