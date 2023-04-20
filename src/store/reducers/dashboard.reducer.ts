import { createReducer } from "@reduxjs/toolkit";
import { login, register } from "../actions/auth.action";
import { StoreState } from "../store";
import { loadWidgets, saveWidgets } from "../actions/dashboard.action";

export type DashboardState = {
  widgets: any;
  status: StoreState;
  errors: string | null;
};

const initialState: DashboardState = {
  widgets: null,
  status: "idle",
  errors: null,
};

const dashboardReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadWidgets.pending, (state, action) => {
      state.status = "pending";
    })
    .addCase(loadWidgets.rejected, (state, action) => {
      state.status = "failed";
      state.errors = action.error.message!;
      // Check if error come from the action condition
      if (action.error.name === "ConditionError") {
        state.errors = "Condition";
      }
    })
    .addCase(loadWidgets.fulfilled, (state, { payload }) => {
      const culture = payload;
      state.status = "succeeded";
    })
    .addCase(saveWidgets.pending, (state, action) => {
      const culture = action.payload;
      state.status = "pending";
    })
    .addCase(saveWidgets.rejected, (state, action) => {
      const culture = action.payload;
      state.status = "failed";
    })
    .addCase(saveWidgets.fulfilled, (state, action) => {
      const culture = action.payload;
      state.status = "succeeded";
    });
});

export default dashboardReducer;
