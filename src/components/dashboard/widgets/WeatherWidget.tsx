import React from "react";

export function WeatherWidget() {
  return (
    <div className="bg-slate-300 rounded h-full">
      <div className="">Icon</div>
      <p className="absolute top-0 right-0">11:30</p>
      <p className="font-bold">Weather</p>
      <p className="text-sm">1450 Chastre - Belgium</p>
      <p className="text-3xl">40 %</p>
    </div>
  );
}
