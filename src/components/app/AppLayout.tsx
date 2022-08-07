import { Outlet } from "react-router-dom";
import { Nav } from "src/components/app/Nav";
import { Fragment } from "react";
import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  LinkIcon,
  LocationMarkerIcon,
  PencilIcon,
} from "@heroicons/react/solid";
import { Menu, Transition } from "@headlessui/react";
import TopMenu from "./TopMenu";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

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
