import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Root } from "react-dom/client";

export const progressActionInc = createAction<number>("progress/inc");

export const progressActionBegin = createAsyncThunk(
  "progress/begin",
  async ({ limit }: { limit: number }, thunk) => {
    const state: RootState = thunk.getState() as RootState;
    console.log(thunk.getState());
    let count = 1;

    while (count < limit) {
      if (thunk.signal.aborted) {
        throw new Error("stop the work, this has been aborted!");
      }
      thunk.dispatch(progressActionInc(count));
      await new Promise((resolve) => setTimeout(resolve, 100));
      count++;
    }

    return "Finish";
  },
  {
    condition: ({ limit }: { limit: number }, api) => {
      if (limit && limit > 0) {
        return true;
      }
      return false;
    },
    // for the typePrefix rejected
    dispatchConditionRejection: true,
  }
);
