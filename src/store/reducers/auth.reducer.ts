import { createReducer } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "../actions/auth.action";
import { StoreState } from "../store";

export type AuthState = {
  user: any;
  status: StoreState;
  errors: string | null;
};

const initialState: AuthState = {
  user: null,
  status: "idle",
  errors: null,
};

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(registerUser.pending, (state, action) => {
      state.status = "pending";
    })
    .addCase(registerUser.rejected, (state, action) => {
      state.status = "failed";
      state.errors = action.error.message!;
      // Check if error come from the action condition
      if (action.error.name === "ConditionError") {
        state.errors = "Condition";
      }
    })
    .addCase(registerUser.fulfilled, (state, { payload }) => {
      const culture = payload;
      state.status = "succeeded";
    })
    .addCase(loginUser.pending, (state, action) => {
      const culture = action.payload;
      state.status = "pending";
    })
    .addCase(loginUser.rejected, (state, action) => {
      const culture = action.payload;
      state.status = "failed";
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      const culture = action.payload;
      state.status = "succeeded";
    });
});

export default authReducer;
