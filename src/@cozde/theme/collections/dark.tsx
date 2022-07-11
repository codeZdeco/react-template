import { createTheme } from "@mui/material";

const instance = createTheme({
  palette: {
    mode: "dark",
    divider: "#3a3a3a",
    primary: {
      main: "#dab548",
      dark: "#393526",
      light: "#62562f",
    },
    secondary: {
      main: "#eb5e28",
    },
    common: {
      black: "#201f1d",
      white: "#ffffff",
    },
    background: {
      paper: "#302f2d",
      default: "#252422",
    },
    text: {
      primary: "#f0f0f0",
      secondary: "#dab548",
      disabled: "#8e8e8e",
    },
  },
  components: {
    /** Custom MUI Component */
  },
});

export default instance;
