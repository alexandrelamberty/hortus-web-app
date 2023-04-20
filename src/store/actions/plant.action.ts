import { createAsyncThunk } from "@reduxjs/toolkit";
import { PlantDTO } from "../../interfaces/PlantDTO";

type ListPlantsParams = {
  limit?: number;
  skip?: number;
};

export const listPlants = createAsyncThunk(
  "plants/list",
  async (args: ListPlantsParams, thunk) => {
    //
  }
);

export const createPlant = createAsyncThunk(
  "plants/create",
  async (plant: PlantDTO) => {
    //
  }
);

export const readPlant = createAsyncThunk("plants/read", (id: string) => {
  async (id: string) => {
    //
  };
});

export const updatePlant = createAsyncThunk(
  "plants/update",
  async (plant: PlantDTO) => {
    //
  }
);

export const deletePlant = createAsyncThunk("plants/delete", (id: string) => {
  async (id: string) => {
    //
  };
});
