import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    role: "user", // "user" | "sales"
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginAsUser: (state) => {
            state.role = "user";
        },
        loginAsSales: (state) => {
            state.role = "sales";
        },
        logout: (state) => {
            state.role = "user";
        },
    },
});

export const { loginAsUser, loginAsSales, logout } = authSlice.actions;
export default authSlice.reducer;
