import { combineReducers } from "@reduxjs/toolkit";
import user from "./userSlice";

const createReducer = combineReducers({
  /** Add extra reducers */
  user,
});

export default createReducer;
