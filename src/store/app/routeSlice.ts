import { createSlice } from "@reduxjs/toolkit";
import { RouteConfig } from "@cozde/config";

export interface ThemeInitialProps {
  default: string;
  selected: string;
}

const initialState: ThemeInitialProps = {
  default: RouteConfig.default,
  selected: RouteConfig.default /** Default selected theme */,
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
