import { configureStore } from "@reduxjs/toolkit";
import loggerMiddleware from "redux-logger";
import authReducer from "./reducers/auth.reducer";
import cultureReducer from "./reducers/culture.reducer";
import dashboardReducer from "./reducers/dashboard.reducer";
import plantReducer from "./reducers/plant.reducer";
import seedReducer from "./reducers/seed.reducer";
import settingsReducer from "./reducers/settings.reducer";
import userReducer from "./reducers/user.reducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    plants: plantReducer,
    seeds: seedReducer,
    cultures: cultureReducer,
    dashboard: dashboardReducer,
    settings: settingsReducer,
    users: userReducer,
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
