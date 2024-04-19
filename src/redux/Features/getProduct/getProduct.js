import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../../../constant/const";
import { options } from "../../../constant/const";
export const getProductThunk = createAsyncThunk("getProducts", async () => {
    try {
        const queryParams = new URLSearchParams(window.location.search);
        const productId = queryParams.get('productId');
        console.log(productId);
        const response = await apiService.get(`/get/${productId}`, options);
        return response.data; 
    } catch (error) {
      throw error.response.data;
    }
});

const getProduct = createSlice({
    name: "getProduct",
    initialState: {
        isLoading: false,
        res: null,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProductThunk.pending, (state) => {
                state.isLoading = true;
                state.error = false; 
            })
            .addCase(getProductThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.res = action.payload;
            })
            .addCase(getProductThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export default getProduct.reducer;
