import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Plant } from "../../interfaces/Plant";
import { HTTP } from "../../services/HTTPClient";
import { PlantDTO } from "../../interfaces/PlantDTO";

type ListPlantsParams = {
  limit?: number;
  skip?: number;
};

export const listPlants = createAsyncThunk(
  "plants/list",
  async (args: ListPlantsParams, thunk) => {
    // return await axios.get(import.meta.env.VITE_API_URL + "/plants");
    const response = await HTTP.get<null, any>("plants");
    return response.data;
  }
);

export const createPlant = createAsyncThunk(
  "plants/create",
  async (plant: PlantDTO) => {
    return HTTP.post<PlantDTO>("plants", plant);
  }
);

export const readPlant = createAsyncThunk("plants/read", (id: string) => {
  async (id: string) => {
    return HTTP.post<string, Plant>("plants", id);
  };
});

export const updatePlant = createAsyncThunk(
  "plants/update",
  async (plant: PlantDTO) => {
    return HTTP.put<PlantDTO>("plants", plant);
  }
);

export const deletePlant = createAsyncThunk("plants/delete", (id: string) => {
  async (id: string) => {
    return HTTP.delete<string>("plants/:id", {
      params: {
        id: "123456789",
      },
    });
  };
});
