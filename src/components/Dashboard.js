import React from "react";
import {
  plantationsData,
  getAllUsers,
  createUser,
} from "../services/PlantService";
import { Header } from "./Header";
import { PlantList } from "./PlantList";
import { PlantTable } from "./PlantTable";
export const Dashboard = () => {
  return (
    <>
      <Header title="Dashboard" />
      
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          
          {/* Replace with your content */}
          <div className="px-4 py-6 sm:px-0">
            <PlantTable />
          </div>
          {/* /End replace */}
        </div>

      </main>
    </>
  );
};
