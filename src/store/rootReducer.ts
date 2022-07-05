import { combineReducers } from "@reduxjs/toolkit";
import app from "./app";
import auth from "./auth";

interface AsyncReducersProps {
  [key: string]: any;
}

const createReducer = (asyncReducers?: AsyncReducersProps) =>
  combineReducers({
    /** Add extra reducers */
    ...asyncReducers,
    app,
    auth,
  });

export default createReducer;
