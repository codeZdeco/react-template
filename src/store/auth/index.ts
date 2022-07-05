import { combineReducers } from "@reduxjs/toolkit";
import profile from "./profileSlice";

const createReducer = combineReducers({
  /** Add extra reducers */
  profile,
});

export default createReducer;
