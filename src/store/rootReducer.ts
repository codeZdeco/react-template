import { combineReducers } from "@reduxjs/toolkit";
import app from "./app";

interface AsyncReducersProps {
  [key: string]: any;
}

const createReducer = (asyncReducers?: AsyncReducersProps) =>
  combineReducers({
    /** Add extra reducers */
    ...asyncReducers,
    app,
  });

export default createReducer;
