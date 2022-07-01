import { createTheme } from "@mui/material";

const instance = createTheme({
  palette: {
    mode: "light",
  },
  components: {
    /** Custom MUI Component */
  },
});

export default instance;
