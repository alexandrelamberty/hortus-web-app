import { Outlet } from "react-router-dom";
import { Nav } from "./Nav";

export const AppLayout = () => (
  <>
    <Nav />
    <main className="main--container">
      <div className="main--content">
        <Outlet /> 
      </div>
    </main>
  </>
);
