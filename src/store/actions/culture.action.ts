import { createAsyncThunk } from "@reduxjs/toolkit";
import { CultureDTO } from "../../interfaces/CultureDTO";
import { getCultures } from "../../services/HortusAPI";

type ListCulturesParams = {
  limit?: number;
  skip?: number;
};

export const listCultures = createAsyncThunk(
  "cultures/list",
  async (args: ListCulturesParams, thunk) => {
    return await getCultures();
  }
);

export const createCulture = createAsyncThunk(
  "cultures/create",
  async (culture: CultureDTO) => {
    //
  }
);

export const readCulture = createAsyncThunk(
  "cultures/read",
  async (id: string) => {
    //
  }
);

export const updateCulture = createAsyncThunk(
  "cultures/update",
  async (culture: CultureDTO) => {
    //
  }
);

export const deleteCulture = createAsyncThunk(
  "cultures/delete",
  async (id: string) => {
    //
  }
);

export const deleteCultures = createAsyncThunk(
  "cultures/deletes",
  async (ids: string[]) => {
    //
  }
);
