import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  role: "user",
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginAsUser: (state, action) => {
      state.role = "user";
      state.token = action.payload; // ✅ save token
    },
    loginAsSales: (state, action) => {
      state.role = "sales";
      state.token = action.payload; // ✅ save token
    },
    logout: (state) => {
      state.role = "user";
      state.token = null;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { loginAsUser, loginAsSales, logout, setToken } = authSlice.actions;
export default authSlice.reducer;
