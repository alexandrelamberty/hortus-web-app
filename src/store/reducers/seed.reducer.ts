import { createReducer } from "@reduxjs/toolkit";
import {
  createSeed,
  deleteSeed,
  listSeeds,
  readSeed,
  updateSeed,
} from "../actions/seed.action";
import { StoreState } from "../store";
import { Seed } from "../../interfaces/Seed";

export type SeedState = {
  seeds: Seed[];
  count: number;
  status: StoreState;
  errors: string | null;
  showForm: boolean;
  showDetail: boolean;
  showConfirmModal: boolean;
  showSuccessModal: boolean;
  selectedSeedIds: string[];
};

const initialState: SeedState = {
  seeds: [],
  count: 0,
  status: "idle",
  errors: null,
  showForm: false,
  showDetail: false,
  showConfirmModal: false,
  showSuccessModal: false,
  selectedSeedIds: [],
};

const seedReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(listSeeds.pending, (state, action) => {
      state.status = "pending";
    })
    .addCase(listSeeds.rejected, (state, action) => {
      // Show error modal
      state.status = "failed";
      state.errors = action.error.message!;
      // Check if error come from the action condition
      if (action.error.name === "ConditionError") {
        state.errors = "Condition";
      }
    })
    .addCase(listSeeds.fulfilled, (state, { payload }) => {
      console.log("REDUCER", payload);
      state.seeds = state.seeds.concat(payload);
      state.count = state.seeds.length;
      state.status = "idle";
    })
    .addCase(createSeed.fulfilled, (state, action) => {
      const seed = action.payload;
    })
    .addCase(readSeed.fulfilled, (state, action) => {
      const seedId = action.payload;
    })
    .addCase(updateSeed.fulfilled, (state, action) => {
      const seedId = action.payload;
      // update seeds
    })
    .addCase(deleteSeed.fulfilled, (state, action) => {
      const seedId = action.payload;
      // remove from seeds
    });
});

export default seedReducer;
