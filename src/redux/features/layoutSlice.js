import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    setting: null,
    categories: [],
    width: [],
    length: [],
    isLoaded: false,
};

const layoutSlice = createSlice({
    name: "layout",
    initialState,
    reducers: {
        setLayoutData: (state, action) => {
            const data = action.payload || {};
            state.setting = data.setting || null;
            state.categories = data.categories || [];
            state.width = data.width || [];
            state.length = data.length || [];
            state.isLoaded = true;
        },
    },
});

export const { setLayoutData } = layoutSlice.actions;
export default layoutSlice.reducer;
