import { createSlice } from "@reduxjs/toolkit";

export interface ThemeInitialProps {
  selected: string;
}

const initialState: ThemeInitialProps = {
  selected: "default" /** Default selected theme */,
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
