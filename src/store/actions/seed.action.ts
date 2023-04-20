import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Seed } from "../../interfaces/Seed";
import { HTTP } from "../../services/HTTPClient";
import { SeedDTO } from "../../interfaces/SeedDTO";

type ListSeedsParams = {
  limit?: number;
  skip?: number;
};

export const listSeeds = createAsyncThunk(
  "seeds/list",
  async (args: ListSeedsParams, thunk) => {
    // return await axios.get(import.meta.env.VITE_API_URL + "/seeds");
    const response = await HTTP.get<null, any>("seeds");
    return response.data;
  }
);

export const createSeed = createAsyncThunk(
  "seeds/create",
  async (seed: SeedDTO) => {
    return HTTP.post<SeedDTO>("seeds", seed);
  }
);

export const readSeed = createAsyncThunk("seeds/read", (id: string) => {
  async (id: string) => {
    return HTTP.post<string, Seed>("seeds", id);
  };
});

export const updateSeed = createAsyncThunk(
  "seeds/update",
  async (seed: SeedDTO) => {
    return HTTP.put<SeedDTO>("seeds", seed);
  }
);

export const deleteSeed = createAsyncThunk("seeds/delete", (id: string) => {
  async (id: string) => {
    return HTTP.delete<string>("seeds/:id", {
      params: {
        id: "123456789",
      },
    });
  };
});
