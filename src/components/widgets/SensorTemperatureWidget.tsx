import React from "react";

type SensorWidgetProps = {
  time: string;
};

export const SensorTemperatureWidget = ({ time }: SensorWidgetProps) => {
  return (
    <div className="rounded h-full bg-green-300 p-5">
      <div className="">Icon</div>
      <p className="absolute top-0 right-0">{time}</p>
      <p className="font-bold">Temperature</p>
      <p className="text-sm">Greenhouse</p>
      <p className="text-3xl">30C</p>
      <p className="absolute bottom-0 right-5">{time}</p>
    </div>
  );
};
