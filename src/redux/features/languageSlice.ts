// redux/features/languageSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LanguageState {
    lang: string; // "en" or "ar"
}

const initialState: LanguageState = {
    lang: "en", // default
};

const languageSlice = createSlice({
    name: "language",
    initialState,
    reducers: {
        setLanguage: (state, action: PayloadAction<string>) => {
            state.lang = action.payload;
        },
    },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
