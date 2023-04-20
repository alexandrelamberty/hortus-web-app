import { createAsyncThunk } from "@reduxjs/toolkit";

export const loadWidgets = createAsyncThunk(
  "dashboard/load-widgets",
  async (data, thunk) => {
    //
  }
);

export const saveWidgets = createAsyncThunk(
  "dashboard/save-widgets",
  async (data) => {
    //
  }
);
