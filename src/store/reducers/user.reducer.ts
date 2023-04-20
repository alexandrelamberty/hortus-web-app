import { createReducer } from "@reduxjs/toolkit";
import { login, register } from "../actions/auth.action";
import { StoreState } from "../store";
import { loadProfile, saveProfile } from "../actions/user.action";

export type UserState = {
  profile: any;
  status: StoreState;
  errors: string | null;
};

const initialState: UserState = {
  profile: null,
  status: "idle",
  errors: null,
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadProfile.pending, (state, action) => {
      state.status = "pending";
    })
    .addCase(loadProfile.rejected, (state, action) => {
      state.status = "failed";
      state.errors = action.error.message!;
      // Check if error come from the action condition
      if (action.error.name === "ConditionError") {
        state.errors = "Condition";
      }
    })
    .addCase(loadProfile.fulfilled, (state, { payload }) => {
      const culture = payload;
      state.status = "succeeded";
    })
    .addCase(saveProfile.pending, (state, action) => {
      const culture = action.payload;
      state.status = "pending";
    })
    .addCase(saveProfile.rejected, (state, action) => {
      const culture = action.payload;
      state.status = "failed";
    })
    .addCase(saveProfile.fulfilled, (state, action) => {
      const culture = action.payload;
      state.status = "succeeded";
    });
});

export default userReducer;
