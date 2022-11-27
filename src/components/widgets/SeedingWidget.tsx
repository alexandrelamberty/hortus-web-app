import React from "react";
import { Seed } from "src/interfaces/Seed";
import { SeedContext } from "src/providers/SeedProvider";

export function SeedingWidget() {
  const { seeds } = React.useContext(SeedContext);

  return (
    <div className="bg-slate-300 rounded h-full">
      <div>
        <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
          <svg
            className="h-6 w-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          ></svg>
        </span>
      </div>
      <p className="absolute top-0 right-0">11:30</p>
      <h3 className="text-slate-900 dark:text-white mt-5">Seeding</h3>
      <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
        This month
      </p>
      {seeds.map((seed: Seed) => (
        <div>{seed.name}</div>
      ))}
    </div>
  );
}
