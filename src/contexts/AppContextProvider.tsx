import { CultureProvider } from "src/contexts/CultureProvider";
import { PlantContextProvider } from "src/contexts/PlantContextProvider";
import { SeedProvider } from "src/contexts/SeedProvider";
import { combineComponents } from "src/utils/combineComponents";

const providers = [PlantContextProvider, SeedProvider, CultureProvider];

export const AppContextProvider = combineComponents(...providers);
