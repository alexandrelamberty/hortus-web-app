import React, { useState } from "react";
import { PlantList } from "./PlantList";
import { PlantForm } from "./PlantForm";
import { Header } from "./Header";

export function Plantations() {
  const loadMoreCommit = () => {
    console.log("Add Plant Click");
  };

  return (
    <>
      <Header title="Plantations" />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Replace with your content */}
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
          </div>
          {/* /End replace */}
        </div>
      </main>
    </>
  );
}
