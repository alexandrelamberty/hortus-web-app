import { CultureContextProvider } from "../contexts/CultureContextProvider";
import { PlantContextProvider } from "../contexts/PlantContextProvider";
import { SeedContextProvider } from "../contexts/SeedContextProvider";
import { combineComponents } from "../utils/combineComponents";

const providers = [
  PlantContextProvider,
  SeedContextProvider,
  CultureContextProvider,
];

export const ServerContextProvider = combineComponents(...providers);
