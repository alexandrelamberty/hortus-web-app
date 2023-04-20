import { createAsyncThunk } from "@reduxjs/toolkit";
import { PlantDTO } from "../../interfaces/PlantDTO";
import { getPlants } from "../../services/HortusAPI";

type ListPlantsParams = {
  limit?: number;
  skip?: number;
};

export const listPlants = createAsyncThunk(
  "plants/list",
  async (args: ListPlantsParams, thunk) => {
    return await getPlants();
  }
);

export const createPlant = createAsyncThunk(
  "plants/create",
  async (plant: PlantDTO) => {
    //
  }
);

export const readPlant = createAsyncThunk("plants/read", async (id: string) => {
  //
});

export const updatePlant = createAsyncThunk(
  "plants/update",
  async (plant: PlantDTO) => {
    //
  }
);

export const deletePlant = createAsyncThunk(
  "plants/deletes",
  async (ids: string[]) => {
    //
  }
);
