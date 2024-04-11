import { configureStore } from "@reduxjs/toolkit";
import authSlice  from "../feacture/authSlice";


export const store = configureStore({
    reducer: {
        user:authSlice
    },
});