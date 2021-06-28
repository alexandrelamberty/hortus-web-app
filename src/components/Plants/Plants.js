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
import { PlantList } from "../Plants/PlantList";
import { PlantTable } from "../Plants/PlantTable";

export function Plants() {
  let { path, url } = useRouteMatch();
  const [plants, setPlants] = useState([]);
  useEffect(() => {
    fetch(`http://127.0.0.1:3333/plants`, {
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

  return (
    <>
      <Header title="Plants" />
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${url}/add`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${url}/update`}>Components</Link>
        </li>
      </ul>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Replace with your content */}
          <div className="px-4 py-6 sm:px-0">
            <Switch>
              <Route exact path={path}>
                <PlantTable plants={plants} />
              </Route>
              <Route path={`${path}/add`}>
                <div>Plants Add</div>
              </Route>
              <Route path={`${path}/update`}>
                <div>Plants Update</div>
              </Route>
            </Switch>
          </div>
          {/* /End replace */}
        </div>
      </main>
    </>
  );
}
