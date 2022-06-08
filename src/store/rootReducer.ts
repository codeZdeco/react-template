import { combineReducers } from "@reduxjs/toolkit";

interface AsyncReducersProps {
  [key: string]: any;
}

const createReducer = (asyncReducers?: AsyncReducersProps) =>
  combineReducers({
    /** Add extra reducers */
    ...asyncReducers,
  });

export default createReducer;
