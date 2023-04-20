import { createAsyncThunk } from "@reduxjs/toolkit";
import { SeedDTO } from "../../interfaces/SeedDTO";

type ListSeedsParams = {
  limit?: number;
  skip?: number;
};

export const listSeeds = createAsyncThunk(
  "seeds/list",
  async (args: ListSeedsParams, thunk) => {
    //
  }
);

export const createSeed = createAsyncThunk(
  "seeds/create",
  async (seed: SeedDTO) => {
    //
  }
);

export const readSeed = createAsyncThunk("seeds/read", (id: string) => {
  async (id: string) => {
    //
  };
});

export const updateSeed = createAsyncThunk(
  "seeds/update",
  async (seed: SeedDTO) => {
    //
  }
);

export const deleteSeed = createAsyncThunk("seeds/delete", (id: string) => {
  async (id: string) => {
    //
  };
});
