import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Button, ButtonGroup, Header, Image, Modal } from "semantic-ui-react";
import { Nav } from "src/components/app/Nav";
import { SettingsForm } from "../form/SettingsForm";
import { Settings } from "../modal/Settings";

export const AppLayout = () => {
  return (
    <div>
      <Nav />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
      {/* Global views */}
      {/* FIXME: Settings modal goes here */}
      <Settings />
    </div>
  );
};
