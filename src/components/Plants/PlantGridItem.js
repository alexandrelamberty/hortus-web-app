import React from "react";
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
      <img class="w-full" src={"images/"+plant.image} alt="Mountain" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{plant.name}</div>
        <p class="text-gray-700 text-base">{plant.description}</p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
      </div>
    </div>
  </div>
  );
}
