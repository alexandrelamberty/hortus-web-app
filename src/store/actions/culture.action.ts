import { createAsyncThunk } from "@reduxjs/toolkit";
import { Culture } from "../../interfaces/Culture";
import { CultureDTO } from "../../interfaces/CultureDTO";

type ListCulturesParams = {
  limit?: number;
  skip?: number;
};

export const listCultures = createAsyncThunk(
  "cultures/list",
  async (args: ListCulturesParams, thunk) => {
    //
  }
);

export const createCulture = createAsyncThunk(
  "cultures/create",
  async (culture: CultureDTO) => {
    //
  }
);

export const readCulture = createAsyncThunk("cultures/read", (id: string) => {
  async (id: string) => {
    //
  };
});

export const updateCulture = createAsyncThunk(
  "cultures/update",
  async (culture: CultureDTO) => {
    //
  }
);

export const deleteCulture = createAsyncThunk(
  "cultures/delete",
  (id: string) => {
    async (id: string) => {
      //
    };
  }
);
