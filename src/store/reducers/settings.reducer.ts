import { createReducer } from "@reduxjs/toolkit";
import { login, register } from "../actions/auth.action";
import { StoreState } from "../store";
import { loadSettings, saveSettings } from "../actions/settings.action";

export type SettingsState = {
  settings: any;
  status: StoreState;
  errors: string | null;
};

const initialState: SettingsState = {
  settings: null,
  status: "idle",
  errors: null,
};

const settingsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadSettings.pending, (state, action) => {
      state.status = "pending";
    })
    .addCase(loadSettings.rejected, (state, action) => {
      state.status = "failed";
      state.errors = action.error.message!;
      // Check if error come from the action condition
      if (action.error.name === "ConditionError") {
        state.errors = "Condition";
      }
    })
    .addCase(loadSettings.fulfilled, (state, { payload }) => {
      const culture = payload;
      state.status = "succeeded";
    })
    .addCase(saveSettings.pending, (state, action) => {
      const culture = action.payload;
      state.status = "pending";
    })
    .addCase(saveSettings.rejected, (state, action) => {
      state.status = "failed";
      state.errors = action.error.message!;
      // Check if error come from the action condition
      if (action.error.name === "ConditionError") {
        state.errors = "Condition";
      }
    })
    .addCase(saveSettings.fulfilled, (state, action) => {
      const culture = action.payload;
      state.status = "succeeded";
    });
});

export default settingsReducer;
