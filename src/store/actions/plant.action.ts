import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { PlantDTO } from "../../interfaces/PlantDTO";
import { getPlants } from "../../services/HortusAPI";
import { Plant } from "../../interfaces/Plant";

type ListPlantsParams = {
  limit?: number;
  skip?: number;
};

export const selectPlant = createAction("plants/select", (plant: Plant) => {
  return {
    payload: plant,
  };
});

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
