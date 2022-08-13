import { Outlet } from "react-router-dom";
import { Nav } from "src/components/app/Nav";

export const AppLayout = () => (
  <>
    <Nav />
    <main>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </main>
  </>
);
