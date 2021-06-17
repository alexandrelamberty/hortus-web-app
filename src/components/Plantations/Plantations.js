import React from "react";
import { Header } from "../Header";
import { plantations } from "../../services/PlantationService";
import { PlantationTimeline } from "./PlantationTimeline";
export function Plantations() {
  return (
    <>
      <Header title="Plantations" />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Replace with your content */}
          <div className="px-4 py-6 sm:px-0">
            <PlantationTimeline />
          </div>
          {/* /End replace */}
        </div>
      </main>
    </>
  );
}
