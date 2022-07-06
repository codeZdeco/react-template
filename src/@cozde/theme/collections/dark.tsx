import { createTheme } from "@mui/material";

const instance = createTheme({
  palette: {
    mode: "dark",
    divider: "#575757",
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
  },
  components: {
    /** Custom MUI Component */
  },
});

export default instance;
