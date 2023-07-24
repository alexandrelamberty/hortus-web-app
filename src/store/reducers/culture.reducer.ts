import { createReducer } from "@reduxjs/toolkit";
import {
  createCulture,
  deleteCulture,
  listCultures,
  readCulture,
  updateCulture,
} from "../actions/culture.action";
import { StoreState } from "../store";
import { Culture } from "../../interfaces/Culture";

export type CultureState = {
  cultures: Culture[];
  count: number;
  status: StoreState;
  errors: string | null;
  showForm: boolean;
  showDetail: boolean;
  showConfirmModal: boolean;
  showSuccessModal: boolean;
  selectedCultureIds: string[];
};

const initialState: CultureState = {
  cultures: [],
  count: 0,
  status: "idle",
  errors: null,
  showForm: false,
  showDetail: false,
  showConfirmModal: false,
  showSuccessModal: false,
  selectedCultureIds: [],
};

const cultureReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(listCultures.pending, (state, action) => {
      state.status = "pending";
    })
    .addCase(listCultures.rejected, (state, action) => {
      // Show error modal
      state.status = "failed";
      state.errors = action.error.message!;
      // Check if error come from the action condition
      if (action.error.name === "ConditionError") {
        state.errors = "Condition";
      }
    })
    .addCase(listCultures.fulfilled, (state, { payload }) => {
      console.log("REDUCER", payload);
      state.cultures = payload.results!;
      state.count = state.cultures.length;
      state.status = "idle";
    })
    .addCase(createCulture.fulfilled, (state, action) => {
      const culture = action.payload;
    })
    .addCase(readCulture.fulfilled, (state, action) => {
      const cultureId = action.payload;
    })
    .addCase(updateCulture.fulfilled, (state, action) => {
      const cultureId = action.payload;
      // update cultures
    })
    .addCase(deleteCulture.fulfilled, (state, action) => {
      const cultureId = action.payload;
      // remove from cultures
    });
});

export default cultureReducer;
