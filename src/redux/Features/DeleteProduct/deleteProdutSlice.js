import { createSlice, createAsyncThunk , createAction } from "@reduxjs/toolkit";
import { apiService } from "../../../constant/const";
import { options } from "../../../constant/const";
export const deleteProduct = createAsyncThunk("deleteProduct", async () => {   
    try {
        const queryParams = new URLSearchParams(window.location.search);
        const productId = queryParams.get('productId');
        const response = await apiService.delete(`/productDelete/${productId}`, options);
        return response.data; 
    } catch (error) {
        throw error.response.data;
    }
});
export const resetDeleteProductState = createAction("DeleteProduct/resetState");

const deleteProductSlice = createSlice({
    name: "deleteProduct",
    initialState: {
        isLoading: false,
        res: null,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(deleteProduct.pending, (state) => {
                state.isLoading = true;
                state.error = false; 
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.res = action.payload;
            })
            .addCase(deleteProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addCase(resetDeleteProductState, (state) => {
                state.isLoading = false;
                state.res = null;
                state.error = null;
            });
    },
});

export default deleteProductSlice.reducer;
