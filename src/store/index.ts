import {
  configureStore,
  ThunkDispatch,
  ThunkAction,
  createListenerMiddleware,
  isAnyOf,
} from "@reduxjs/toolkit";
import createReducer from "./rootReducer";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { AnyAction } from "redux";
import reducer from "./rootReducer";
import { alert } from "./app/alertSlice";

import { getProfileInfo } from "./auth/profileSlice";

// Initial states
const preloadedState = {};

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  matcher: isAnyOf(getProfileInfo.rejected),
  effect: async (_action, listenerApi) => {
    const { dispatch } = listenerApi;

    /** Catching all rejected states */
    dispatch(
      alert({
        variant: "error",
        message: "Something went wrong!",
      }),
    );
  },
});

const store = configureStore({
  reducer: createReducer(),
  middleware: (getDefaultMiddleware) => {
    if (process.env.NODE_ENV === "development") {
      const { logger } = require(`redux-logger`);

      return getDefaultMiddleware()
        .concat(logger)
        .prepend(listenerMiddleware.middleware);
    }

    return getDefaultMiddleware().prepend(listenerMiddleware.middleware);
  },
  devTools: process.env.NODE_ENV === "development",
  preloadedState,
});

export type StoreState = ReturnType<typeof store.getState>;
export type ReduxState = ReturnType<typeof reducer>;
export type StoreDispatch = typeof store.dispatch;
export type TypedDispatch = ThunkDispatch<ReduxState, any, AnyAction>;
export type TypedThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  AnyAction
>;

export const useAppDispatch = () => useDispatch<TypedDispatch>();
export const useAppSelector: TypedUseSelectorHook<StoreState> = useSelector;

export default store;
