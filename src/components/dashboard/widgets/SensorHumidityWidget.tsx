import React from 'react'
import { Culture } from 'src/interfaces/Culture'
import { CultureContext } from 'src/providers/CultureProvider'
import { SeedContext } from 'src/providers/SeedProvider'

type SensorWidgetProps = {
  time: string;
};

export const SensorHumidityWidget = ({time} : SensorWidgetProps) => {
  return (
    <div className="bg-slate-400 dark:bg-slate-900 rounded h-full">
      <div className="">Icon</div>
      <p className="absolute top-0 right-0">{time}</p>
      <p className="font-bold">Humidity</p>
      <p className="text-sm">Greenhouse</p>
      <p className="text-3xl">40 %</p>
    </div>
  )
}
