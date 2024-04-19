import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Features/auth/authSclice.js"
import authVerify from "../Features/LoginConform/TFSlice.js";
import getAllCustomers from "../Features/Custumers/getCustumersSlice.js";
import getAllProducts from "../Features/getProducts/getProductsSlice.js";
import addProduct from "../Features/addProduct/addProductSlice.js";
import  deleteProduct from "../Features/DeleteProduct/deleteProdutSlice.js";
import getProduct from "../Features/getProduct/getProduct.js";
import updateProduct from "../Features/upDateProduct/updateProductSlice.js"
export const store = configureStore({
  reducer: {
    auth: authReducer,
    verfyLogin: authVerify,
    getAllusers: getAllCustomers,
    newProduct: addProduct,
    getAllProducts: getAllProducts,
    updateProduct: updateProduct,
    deleteProduct : deleteProduct,
    getProduct: getProduct
  },
});
