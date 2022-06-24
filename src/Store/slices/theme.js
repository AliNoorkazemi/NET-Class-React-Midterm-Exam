import { createSlice } from "@reduxjs/toolkit";
/**
 * craete theme silice for change theme action for redux 
 * check theme state to change it 
 * if dark theme change to light theme
 * And vice versa
 * initial theme with dark mode
 */
export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: "dark-theme",
  },
  reducers: {
    change: (state) => {
      state.theme = state.theme === "dark-theme" ? "light-theme" : "dark-theme";
    },
  },
});

export const { change } = themeSlice.actions;

export default themeSlice.reducer;
