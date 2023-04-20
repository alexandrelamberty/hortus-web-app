import { createAsyncThunk } from "@reduxjs/toolkit";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (data, thunk) => {
    //
  }
);

export const loginUser = createAsyncThunk("auth/login", async (data) => {
  //
});

export const resetPasswordUser = createAsyncThunk(
  "auth/reset-password",
  async (data) => {
    //
  }
);
