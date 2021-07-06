import React, { useEffect, useState } from "react";
import { getAllCulture } from "../../services/PlantationService";
import { PlantationGrid } from "./PlantationGrid";
import { PlantationTimeline } from "./PlantationTimeline";
export function Plantations() {
  const [cultures, setCultures] = useState([]);
  useEffect(() => {
    getAllCulture()
      .then((data) => {
        setCultures(data);
      })
      .catch(console.error);
  }, []);
  return (
    <main>
      <PlantationTimeline cultures={cultures} />
    </main>
  );
}
