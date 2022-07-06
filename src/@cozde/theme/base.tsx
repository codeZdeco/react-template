import { createTheme } from "@mui/material";

const baseTheme = createTheme({
  components: {
    /** Custom MUI Component */
  },
  mixins: {
    toolbar: {},
  },
});

export default baseTheme;
