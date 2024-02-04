import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../../../constant/const";
import { options } from "../../../constant/const";
export const getCustomers = createAsyncThunk("getCustomers", async () => {
    try {
        const response = await apiService.get('/getAllusers', options);
        return response.data; 
    } catch (error) {
      throw error.response.data;
    }
});

const getCustomersAll = createSlice({
    name: "getCustomers",
    initialState: {
        isLoading: false,
        res: null,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCustomers.pending, (state) => {
                state.isLoading = true;
                state.error = false; 
            })
            .addCase(getCustomers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.res = action.payload;
            })
            .addCase(getCustomers.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export default getCustomersAll.reducer;
