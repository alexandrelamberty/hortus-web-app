import { createReducer } from "@reduxjs/toolkit";
import { Plant } from "../../interfaces/Plant";
import {
  createPlant,
  deletePlant,
  listPlants,
  readPlant,
  selectPlant,
  updatePlant,
} from "../actions/plant.action";
import { StoreState } from "../store";

export type PlantState = {
  plants: Plant[];
  selectedPlant: Plant | null;
  selectedPlantIds: string[];
  count: number;
  status: StoreState;
  errors: string | null;
  showForm: boolean;
  showDetail: boolean;
  showConfirmModal: boolean;
  showSuccessModal: boolean;
};

const initialState: PlantState = {
  selectedPlantIds: [],
  selectedPlant: null,
  plants: [],
  count: 0,
  status: "idle",
  errors: null,
  showForm: false,
  showDetail: false,
  showConfirmModal: true,
  showSuccessModal: false,
};

const productReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectPlant, (state, action) => {
      state.selectedPlant = action.payload;
    })
    .addCase(listPlants.pending, (state, action) => {
      state.status = "pending";
    })
    .addCase(listPlants.rejected, (state, action) => {
      // Show error modal
      state.status = "failed";
      state.errors = action.error.message!;
      // Check if error come from the action condition
      if (action.error.name === "ConditionError") {
        state.errors = "Condition";
      }
    })
    .addCase(listPlants.fulfilled, (state, { payload }) => {
      console.log("REDUCER", payload);
      state.plants = payload!;
      state.count = state.plants.length;
      state.status = "idle";
    })
    .addCase(createPlant.fulfilled, (state, action) => {
      const product = action.payload;
    })
    .addCase(readPlant.fulfilled, (state, action) => {
      const productId = action.payload;
    })
    .addCase(updatePlant.fulfilled, (state, action) => {
      const productId = action.payload;
      // update plants
    })
    .addCase(deletePlant.fulfilled, (state, action) => {
      const productId = action.payload;
      // remove from plants
    });
});

export default productReducer;
