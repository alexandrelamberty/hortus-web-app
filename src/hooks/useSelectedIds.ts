import React from "react";
import { Culture } from "src/interfaces/Culture";
import { Plant } from "src/interfaces/Plant";
import { Seed } from "src/interfaces/Seed";
interface Identifiable {
  _id: string;
}
export const useSelectedIds = (array: Identifiable[]): string[] => {
  return array.map((o) => {
    return o._id;
  });
};
