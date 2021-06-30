import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Nav } from "./components/Nav";
import { Plantations } from "./components/Plantations/Plantations";
import { Plants } from "./components/Plants/Plants";

export default function App() {
  return (
    <Router>
        <Nav />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Switch>
              <Route path="/plantations">
                <Plantations className="w-full" />
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
