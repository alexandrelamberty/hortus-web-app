import { createAsyncThunk } from "@reduxjs/toolkit";
import { SeedDTO } from "../../interfaces/SeedDTO";
import { getSeeds } from "../../services/HortusAPI";

type ListSeedsParams = {
  limit?: number;
  skip?: number;
};

export const listSeeds = createAsyncThunk(
  "seeds/list",
  async (args: ListSeedsParams, thunk) => {
    return await getSeeds();
  }
);

export const createSeed = createAsyncThunk(
  "seeds/create",
  async (seed: SeedDTO) => {
    //
  }
);

export const readSeed = createAsyncThunk("seeds/read", async (id: string) => {
  //
});

export const updateSeed = createAsyncThunk(
  "seeds/update",
  async (seed: SeedDTO) => {
    //
  }
);

export const deleteSeed = createAsyncThunk(
  "seeds/delete",
  async (id: string) => {
    //
  }
);

export const deleteSeeds = createAsyncThunk(
  "seeds/deletes",
  async (ids: string[]) => {
    //
  }
);
