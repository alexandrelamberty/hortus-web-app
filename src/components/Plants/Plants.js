import React, { useEffect, useState } from "react";
import { getPlants } from "../../services/PlantService";
import { Header } from "../Header";
import { PlantList } from "../Plants/PlantList";
import { PlantTable } from "../Plants/PlantTable";
export function Plants() {
  const [plants, setPlants] = useState([]);
  useEffect(() => {
    fetch(
      `http://127.0.0.1:3333/crops`,
      {
        method: "GET",
        headers: new Headers({
          Accept: "application/vnd.github.cloak-preview",
        }),
      }
    )
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setPlants(response);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Header title="Plants" />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Replace with your content */}
          <div className="px-4 py-6 sm:px-0">
            <PlantTable plants={plants} />
            <PlantList />
          </div>
          {/* /End replace */}
        </div>
      </main>
    </>
  );
}
