import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Features/auth/authSclice.js"
import authVerify from "../Features/LoginConform/TFSlice.js";
import getAllCustomers from "../Features/Custumers/getCustumersSlice.js";
import getAllProducts from "../Features/getProducts/getProductsSlice.js";
import addProduct from "../Features/addProduct/addProductSlice.js";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    verfyLogin: authVerify,
    getAllusers: getAllCustomers,
    newProduct: addProduct,
    getAllProducts: getAllProducts
  },
});
