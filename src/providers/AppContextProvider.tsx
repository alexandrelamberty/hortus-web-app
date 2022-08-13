import { CultureProvider } from "src/providers/CultureProvider";
import { PlantContextProvider } from "src/providers/PlantContextProvider";
import { SeedProvider } from "src/providers/SeedProvider";
import { combineComponents } from "src/utils/combineComponents";
import { SensorProvider } from "./SensorProvider";

const providers = [
  PlantContextProvider,
  SeedProvider,
  CultureProvider,
  SensorProvider,
];

export const AppContextProvider = combineComponents(...providers);
