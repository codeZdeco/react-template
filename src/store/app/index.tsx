import { combineReducers } from "@reduxjs/toolkit";
import theme from "./themeSlice";
import alert from "./alertSlice";
import route from "./routeSlice";

const createReducer = combineReducers({
  /** Add extra reducers */
  theme,
  alert,
  route,
});

export default createReducer;
