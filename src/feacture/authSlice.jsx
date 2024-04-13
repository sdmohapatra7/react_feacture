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
    async (data) => {
        // console.log("data", data);
        const response = await fetch("https://661828109a41b1b3dfbc63ef.mockapi.io/api/v1/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        const result = await response.json();
        return result;
    });
export const loginUser = createAsyncThunk(
    "user/loginUser",
    async (data) => {
        // console.log("data", data);
        const response = await fetch("https://661828109a41b1b3dfbc63ef.mockapi.io/api/v1/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        const result = await response.json();
        return result;
    })
const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

        addToken: (state, action) => {
            state.token = localStorage.getItem('token');
        },
        getUser: (state, action) => {
            state.user = localStorage.getItem('user')
        },
        logout: (state, action) => {
            state.token = "";
            localStorage.clear();
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(signupUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(signupUser.fulfilled, (state, action) => {
                state.loading = false;
                if (action.payload.error) {
                    state.error = action.payload.error;
                } else {
                    state.user = action.payload;
                }
            })
            .addCase(signupUser.rejected, (state, action) => {
                state.loading = false;
                state.user = '';
                if (action.error.message === "Request failed with status code 401") {
                    state.error = 'Access Denied! Invalid Credentials'
                } else {
                    state.error = action.error.message
                }
            })
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                if (action.payload.error) {
                    state.error = action.payload.error;
                } else {
                    state.user = action.payload;
                    // state.token = action.payload.token;
                    // state.msg = action.payload.msg;
                    localStorage.setItem('user', JSON.stringify(action.payload))
                }

            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.user = "";
                if (action.error.message === "Request failed with status code 401") {
                    state.error = 'Access Denied! Invalid Credentials'
                } else {
                    state.error = action.error.message
                }
            })

    }
})

export const { addToken, getUser, logout } = authSlice.actions;
export default authSlice.reducer