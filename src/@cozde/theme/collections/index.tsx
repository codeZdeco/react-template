import { Theme } from "@mui/material";
import dark from "./dark";
import _default from "./default";

/**
 * Import theme and add them into this instance
 * Use the file name as theme code, change theme by using theme code
 */
const instance: { [themeKey: string]: Theme } = {
  default: _default,
  dark,
};

export default instance;
