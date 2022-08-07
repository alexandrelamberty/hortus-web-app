import { Plant } from "src/interfaces/Plant";
import { PlantActionType } from "./PlantActionType";

export const FETCH_PLANT = (query: string) => {
  return {
    type: PlantActionType.FETCH_PLANTS,
    payload: query,
  };
};

export const CREATE_PLANT = (plant: Plant) => {
  return {
    type: 'CREATE_PLANT',
    payload: plant,
  };
};

export const UPDATE_PLANT = (plant: Plant) => {
  return {
    type: 'UPDATE_PLANT',
    payload: plant,
  };
};

export const DELETE_PLANT = (id: string) => {
  return {
    type: 'DELETE_PLANT',
    payload: id,
  };
};

export const SET_LOADING = (loading: boolean) => {
  return {
    type: 'SET_LOADING',
    payload: loading,
  };
};