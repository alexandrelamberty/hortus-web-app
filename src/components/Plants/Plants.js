import React, { useEffect, useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { getAll } from "../../services/PlantService";
import { Modal } from "../modal/Modal";
import { PlantCard } from "./PlantCard";
import { PlantForm } from "./PlantForm";
import { PlantGrid } from "./PlantGrid";
import { PlantGridItem } from "./PlantGridItem";
export function Plants() {
  let { path, url } = useRouteMatch();
  const [plants, setPlants] = useState([]);
  const [plant, setPlant] = useState([]);
  const [showForm, setShowForm] = useState(0);
  const [showCard, setShowCard] = useState(0);

  useEffect(() => {
    getAll()
      .then((data) => {
        setPlants(data);
      })
      .catch(console.error);
  }, []);

  // Handling event from components

  function onPlantGridNewClick(e) {
    e.preventDefault();
    console.log("[Plants] NewConPlantGridNewClicklick");
    setShowForm(1);
  }

  function onPlantGridItemClick(plant) {
    console.log("[Plants] onPlantGridItemClick", plant);
    setPlant(plant);
    setShowCard(1);
  }

  function onCardClose(e) {
    e.preventDefault();
    console.log("[Plants] onCardClose ");
    setShowCard(0);
  }

  function onFormClose(e) {
    e.preventDefault();
    console.log("[Plants] onFormClose ");
    setShowForm(0);
  }

    // Handle PlantItemGrid Click

    function gridItemClick(plant) {
      console.log("[PlantGrid] gridItemClick", plant);
      onPlantGridItemClick(plant);
    }
  
    function gridItemDelete(e) {
      e.preventDefault();
      console.log("[PlantGrid] handleNewClick ");
      //onPlantGridItemClick(e);
    }

  return (
    <main>
      <Switch>
        <Route exact path={path}>
          <div className="flex flex-col">
            <PlantGrid
              onPlantGridNewClick={onPlantGridNewClick}
              onPlantGridItemClick={onPlantGridItemClick}
            >
              {plants.map((plant) => (
                <PlantGridItem
                  key={plant._id}
                  plant={plant}
                  onClick={gridItemClick}
                  onClickDelete={gridItemDelete}
                />
              ))}
            </PlantGrid>
            <Modal show={showForm}>
              <PlantForm plant={plant} handleClose={onFormClose} />
            </Modal>
            <Modal show={showCard}>
              <PlantCard plant={plant} handleClose={onCardClose} />
            </Modal>
          </div>
        </Route>
      </Switch>
    </main>
  );
}
