import { createTheme } from "@mui/material";

const baseTheme = createTheme({
  components: {
    /** Custom MUI Component */
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        }
      }
    }
  },
  mixins: {
    toolbar: {},
  },
});

export default baseTheme;
