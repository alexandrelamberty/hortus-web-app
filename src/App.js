import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { PlantationTimeline } from "./components/PlantationTimeline"
import { Dashboard } from './components/Dashboard';
import { Plants } from './components/Plants';
export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/plants">Plants</Link>
            </li>
            <li>
              <Link to="/plantations">Plantations</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/plantations">
            <PlantationTimeline />
          </Route>
          <Route path="/plants">
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

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}