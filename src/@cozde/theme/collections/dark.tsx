import { createTheme } from "@mui/material";

const instance = createTheme({
  palette: {
    mode: "dark",
  },
  components: {
    /** Custom MUI Component */
  },
});

export default instance;
