import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../../../constant/const";
export const loginTrueFalse = createAsyncThunk("verify", async () => {
    let accessToken = localStorage.getItem("Sign")
    try {
        const headers = {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
            // Add any other headers as needed
        };
    
        const options = {
            headers: headers,
        };


        const response = await apiService.get('/loginVerify', options);
        return response.data; 
    } catch (error) {
      throw error.response.data;
    }
});

const trueFalseSlice = createSlice({
    name: "verify",
    initialState: {
        isLoading: false,
        res: null,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginTrueFalse.pending, (state) => {
                state.isLoading = true;
                state.error = false; 
            })
            .addCase(loginTrueFalse.fulfilled, (state, action) => {
                state.isLoading = false;
                state.res = action.payload;
            })
            .addCase(loginTrueFalse.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export default trueFalseSlice.reducer;
