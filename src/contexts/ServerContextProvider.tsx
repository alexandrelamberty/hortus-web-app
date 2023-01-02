import { CultureContextProvider } from "src/contexts/CultureContextProvider";
import { PlantContextProvider } from "src/contexts/PlantContextProvider";
import { SeedContextProvider } from "src/contexts/SeedContextProvider";
import { combineComponents } from "src/utils/combineComponents";

const providers = [
  PlantContextProvider,
  SeedContextProvider,
  CultureContextProvider,
];

export const ServerContextProvider = combineComponents(...providers);
