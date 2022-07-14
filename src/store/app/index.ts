import { combineReducers } from "@reduxjs/toolkit";
import theme from "./themeSlice";
import alert from "./alertSlice";
import route from "./routeSlice";
import i18n from "./i18nSlice";

const createReducer = combineReducers({
  /** Add extra reducers */
  theme,
  alert,
  route,
  i18n,
});

export default createReducer;
