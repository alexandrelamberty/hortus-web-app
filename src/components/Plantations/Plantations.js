import React from "react";
import { plantations } from "../../services/PlantationService";
import { PlantationGrid } from "./PlantationGrid";
export function Plantations() {
  return (
    <main>
      <PlantationGrid plants={plantations} />
    </main>
  );
}
