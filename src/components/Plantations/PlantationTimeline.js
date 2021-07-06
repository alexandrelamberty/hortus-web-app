import React from "react";
import { plantations } from "../../services/PlantationService";
import { PlantationTimelineRow } from "./PlantationTimelineRow";

export const PlantationTimelineLegend = () => {
  return (
    <div className="table-legend">
      <ul className="legend">
        <li>
          <span class="seeding"></span> Seeding
        </li>
        <li>
          <span class="transplanting"></span> Transplanting
        </li>
        <li>
          <span class="planting"></span> Planting
        </li>
        <li>
          <span class="harvesting"></span> Harvesting
        </li>
      </ul>
    </div>
  );
};
export const PlantationTimeline = ({ cultures, onPlantGridNewClick}) => {

  function newClick(e) {
    e.preventDefault();
    console.log("[PlantGrid] newClick ");
    onPlantGridNewClick(e);
  }

  return (
    <section class="bg-white px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4">
      <header class="flex items-center justify-between">
        <h2 class="text-lg leading-6 font-medium text-black">Plants</h2>
        <button
          onClick={newClick}
          class="hover:bg-dark-blue-200 hover:text-light-blue-800 group flex items-center rounded-md bg-light-blue-100 text-light-blue-600 text-sm font-medium px-4 py-2"
        >
          <svg
            class="group-hover:text-light-blue-600 text-light-blue-500 mr-2"
            width="12"
            height="20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6 5a1 1 0 011 1v3h3a1 1 0 110 2H7v3a1 1 0 11-2 0v-3H2a1 1 0 110-2h3V6a1 1 0 011-1z"
            />
          </svg>
          New
        </button>
      </header>
      <div class="">
        {cultures.map((culture, key) => {
          return <PlantationTimelineRow key={key} culture={culture} />;
        })}
      </div>
    </section>
  );
};
