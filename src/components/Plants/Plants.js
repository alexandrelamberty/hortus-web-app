import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { Header } from "../Header";
import { Modal } from "../modal/Modal";
import { PlantList } from "../Plants/PlantList";
import { PlantTable } from "../Plants/PlantTable";
import { PlantForm } from "./PlantForm";
import { PlantGrid } from "./PlantGrid";

export function Plants() {
  let { path, url } = useRouteMatch();
  const [plants, setPlants] = useState([]);
  const [plant, setPlant] = useState([]);
  const [showForm, setShowForm] = useState(0);

  useEffect(() => {
    fetch(`http://192.168.1.49:3333/plants`, {
      method: "GET",
      headers: new Headers({
        Accept: "application/vnd.github.cloak-preview",
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setPlants(response);
      })
      .catch((error) => console.log(error));
  }, []);

  function onPlantGridItemClick(e) {
    e.preventDefault();
    console.log("[PlantGrid] itemClick");
    setShowForm(1);
  }

  function onModalClose(e) {
    e.preventDefault();
    console.log('[Modal - PlantForm] handleClick ');
    setShowForm(0);
  }

  return (
    <main>
      <Switch>
        <Route exact path={path}>
          <div className="flex flex-col">
            <PlantGrid
              plants={plants}
              onPlantGridItemClick={onPlantGridItemClick}
            />
            <Modal show={showForm} >
              <PlantForm plant={plant} handleClose={onModalClose} />
            </Modal>        
          </div>
        </Route>
        <Route path={`${path}/add`}>
          <div>Plants Add</div>
        </Route>
        <Route path={`${path}/update`}>
          <div>Plants Update</div>
        </Route>
      </Switch>
    </main>
  );
}
