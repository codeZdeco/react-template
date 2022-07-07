import { createSlice } from "@reduxjs/toolkit";
import { ThemeConfig } from "@cozde/config";

export interface ThemeInitialProps {
  selected: string;
}
console.log(">>", ThemeConfig);
const initialState: ThemeInitialProps = {
  selected: ThemeConfig.default /** Default selected theme */,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    /**
     * Update current application theme
     * @param state
     * @param action theme code
     */
    update: (state, action) => {
      const { payload } = action;
      state.selected = payload;
    },
  },
  extraReducers: {},
});

export const { update } = themeSlice.actions;

export default themeSlice.reducer;
