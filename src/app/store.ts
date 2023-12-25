import {configureStore} from "@reduxjs/toolkit";
import {bookReducer} from "../store/bookSlice";

export const store = configureStore({
  reducer: {
    contack: bookReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;