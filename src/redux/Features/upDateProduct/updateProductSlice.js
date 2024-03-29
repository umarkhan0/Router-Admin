import { createSlice, createAsyncThunk , createAction } from "@reduxjs/toolkit";
import { apiService } from "../../../constant/const";
export const upDateProduct = createAsyncThunk("upDateProduct", async (credentials) => {   
    try {
        const queryParams = new URLSearchParams(window.location.search);
        const productId = queryParams.get('productId');
        const response = await apiService.put(`/product/${productId}`, credentials);
        return response.data; 
    } catch (error) {
        throw error.response.data;
    }
});

export const resetUpdateProductState = createAction("updateProduct/resetState");

const upDateProductSlice = createSlice({
    name: "upDateProduct",
    initialState: {
        isLoading: false,
        res: null,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(upDateProduct.pending, (state) => {
                state.isLoading = true;
                state.error = false; 
            })
            .addCase(upDateProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.res = action.payload;
            })
            .addCase(upDateProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addCase(resetUpdateProductState, (state) => {
                state.isLoading = false;
                state.res = null;
                state.error = null;
            });
    },
});

export default upDateProductSlice.reducer;
