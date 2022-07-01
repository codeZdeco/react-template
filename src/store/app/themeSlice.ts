import { createSlice } from "@reduxjs/toolkit";
import config from "@cozde/config";

const themeConfig = config.theme;

export interface ThemeInitialProps {
  selected: string;
}

const initialState: ThemeInitialProps = {
  selected: themeConfig.default /** Default selected theme */,
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
