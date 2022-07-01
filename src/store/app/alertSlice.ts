import { AlertColor } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";

export interface AlertAnchorProps {
  horizontal: "right" | "left" | "center";
  vertical: "bottom" | "top";
}

export interface AlertInitialProps {
  variant: AlertColor;
  open: boolean;
  message: string;
  anchorOrigin: AlertAnchorProps;
  delay: number;
}

const initialState: AlertInitialProps = {
  variant: "success",
  open: false,
  message: "",
  anchorOrigin: {
    horizontal: "right",
    vertical: "bottom",
  },
  delay: 3000,
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    alert: (state, action) => {
      const { variant, message } = action.payload;
      state.open = true;
      state.message = message;
      state.variant = variant;
    },
    close: (state) => {
      state.open = false;
    },
    update: (state, action) => {
      const { payload } = action;
      if (payload && payload.anchorOrigin) {
        state.anchorOrigin = payload.anchorOrigin;
        state.delay = payload.delay;
      }
    },
  },
});

export const { alert, close, update } = alertSlice.actions;

export default alertSlice.reducer;
