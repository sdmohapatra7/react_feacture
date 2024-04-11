import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const initialState = {
    msg: "",
    user: "",
    token: "",
    loading: false,
    error: ""
}

const signupUser = createAsyncThunk(
    "signupUser",
    async (data, { rejectWithValue }) => {
        console.log("data", data);
        const response = await fetch("https://641dd63d945125fff3d75742.mockapi.io/crud", {
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
    // extraReducers:{

    // }
})

export default authSlice.reducer