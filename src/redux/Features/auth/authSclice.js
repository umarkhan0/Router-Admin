import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "../../../constant/const";
export const login = createAsyncThunk("login", async (credentials) => {
    try {
        const response = await apiService.post('/login', credentials);
        return response.data; 
    } catch (error) {
      throw error.response.data;
    }
});

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLoading: false,
        token: null,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true;
                state.error = false; 
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                localStorage.setItem("Sign" , action.payload.token)
                state.token = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export default authSlice.reducer;
