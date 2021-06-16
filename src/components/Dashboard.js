import React from "react";
import { plantationsData, getAllUsers, createUser } from '../services/PlantService'

export const Dashboard = () => {

  return (
    <>
      <div className="plantations-container">
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
      </div>
    </>
  );
};