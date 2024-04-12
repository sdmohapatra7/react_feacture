import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const initialState = {
    msg: "",
    user: "",
    token: "",
    loading: false,
    error: ""
}

export const signupUser = createAsyncThunk(
    "user/signupUser",
    async (data, { rejectWithValue }) => {
        console.log("data", data);
        const response = await fetch("https://661828109a41b1b3dfbc63ef.mockapi.io/api/v1/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        try {
            const result = await response.json();
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    });
    export const loginUser = createAsyncThunk(
        "user/loginUser",
        async (data, { rejectWithValue }) => {
            console.log("data", data);
            const response = await fetch("https://661828109a41b1b3dfbc63ef.mockapi.io/api/v1/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
            try {
                const result = await response.json();
                return result;
            } catch (error) {
                return rejectWithValue(error);
            }
        })
const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(signupUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(signupUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload
            })
            .addCase(signupUser.rejected, (state, action) => {
                state.loading = false;
                state.user = action.payload
            })
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.user = action.payload
            })

    }
})

export default authSlice.reducer