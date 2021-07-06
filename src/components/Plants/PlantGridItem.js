import React from "react";
import { MonthRange } from "../MonthRange";
/**
 * Represent a grid item used by the PlantGrid component.
 */
export function PlantGridItem({ key, plant, onClick, onClickDelete }) {
  return (
    <div
      key={key}
      onClick={() => onClick(plant)}
      class="md:flex hover:bg-light-blue-500 hover:border-transparent hover:shadow-lg group block rounded-lg border border-gray-200"
    >  
    <div class="sm:w-full rounded overflow-hidden shadow-lg">
      <img class="w-full h-64" src={"images/"+plant.image} alt="Mountain" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{plant.name}</div>
        <p class="text-gray-700 text-base">{plant.family}</p>
      </div>
      <div class="px-6 py-4 bg-green-400">
        <MonthRange start={plant.seeding[0]} end={plant.seeding[1]} />
        <MonthRange start={plant.harvesting[0]} end={plant.harvesting[1]} />
      </div>
      
    </div>
  </div>
  );
}
