import { configureStore } from "@reduxjs/toolkit";
import plantReducer from "./reducers/plant.reducer";
import loggerMiddleware from "redux-logger";
import progressReducer from "./reducers/progress.reducer";

export const store = configureStore({
  reducer: {
    plants: plantReducer,
    progress: progressReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      serializableCheck: true,
      immutableCheck: true,
    }).concat(loggerMiddleware),
  devTools: import.meta.env.DEV,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {products: ProductState, progress: ProgressState}
export type AppDispatch = typeof store.dispatch;

// FIXME: move ?
export type StoreState = "idle" | "pending" | "succeeded" | "failed";
