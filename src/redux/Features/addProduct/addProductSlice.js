import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../../../constant/const";
import { options } from "../../../constant/const";
export const addProduct = createAsyncThunk("postProduct", async (credentials) => {
    try {
        const response = await apiService.post('/postProduct', credentials);
        return response.data; 
    } catch (error) {
      throw error.response.data;
    }
});

const addProductSlice = createSlice({
    name: "postProduct",
    initialState: {
        isLoading: false,
        res: null,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(addProduct.pending, (state) => {
                state.isLoading = true;
                state.error = false; 
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                state.isLoading = false;
                state.res = action.payload;
            })
            .addCase(addProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export default addProductSlice.reducer;
