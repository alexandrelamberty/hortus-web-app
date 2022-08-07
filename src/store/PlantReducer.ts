import { PlantActionType } from "./PlantActionType";

export const PlantReducer = (state: any, action: any) => {
  switch (action.type) {
    case PlantActionType.FETCH_PLANTS:
      return {
        ...state,
        query: action.payload,
        // call async function with query
      };
    case 'CREATE_PLANT':
      return {
        ...state,
        user: action.payload,
        // call async function
      };
    case 'CREATE_PLANT_ERROR':
      return {
        ...state,
        user: action.payload,
        // call async function
      };
    case 'CREATE_PLANT_SUCCESS':
      return {
        ...state,
        plants: action.payload,
        // call async function
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
}