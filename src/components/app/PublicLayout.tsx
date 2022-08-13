import { Outlet } from "react-router-dom";

export const PublicLayout = () => (
  <>
    <div className="grid place-items-center h-screen">
      <Outlet />
    </div>
  </>
);
