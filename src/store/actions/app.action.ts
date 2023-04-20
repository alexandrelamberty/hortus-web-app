import { createAsyncThunk } from "@reduxjs/toolkit";

export const register = createAsyncThunk(
  "auth/register",
  async (data, thunk) => {
    //
  }
);

export const login = createAsyncThunk("auth/login", async (data) => {
  //
});

export const resetPassword = createAsyncThunk(
  "auth/reset-password",
  async (data) => {
    //
  }
);
