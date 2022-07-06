import { combineReducers } from "@reduxjs/toolkit";
import app from "./app";
import auth from "./auth";

interface AsyncReducersProps {
  [key: string]: any;
}

export const rootReducer = {
  app,
  auth,
};

const createReducer = (asyncReducers?: AsyncReducersProps) =>
  combineReducers({
    /** Add extra reducers */
    ...asyncReducers,
    ...rootReducer,
  });

export default createReducer;
