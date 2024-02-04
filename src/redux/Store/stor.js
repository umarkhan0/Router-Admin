import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Features/auth/authSclice.js"
import authVerify from "../Features/LoginConform/TFSlice.js";
import getAllCustomers from "../Features/Custumers/getCustumersSlice.js"
export const store = configureStore({
  reducer: {
    auth: authReducer,
    verfyLogin: authVerify,
    getAllusers: getAllCustomers
  },
});
