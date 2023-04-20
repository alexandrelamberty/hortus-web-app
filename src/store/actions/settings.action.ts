import { createAsyncThunk } from "@reduxjs/toolkit";

export const loadSettings = createAsyncThunk(
  "settings/load",
  async (data, thunk) => {
    //
  }
);

export const saveSettings = createAsyncThunk("settings/save", async (data) => {
  //
});
