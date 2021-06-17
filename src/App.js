import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Nav } from "./components/Nav";
import { Plantations } from "./components/Plantations/Plantations";
import { Plants } from "./components/Plants/Plants";

export default function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/plantations">
            <Plantations />
          </Route>
          <Route path="/plants">
            <Plants />
          </Route>
           <Route path="/settings">
            <Plants />
          </Route>
          <Route path="/login">
            <Plants />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
