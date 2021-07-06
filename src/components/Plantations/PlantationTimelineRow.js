import React from "react";
// The months in the calendar.
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const PlantationTimelineRow = ({ key, culture }) => {
  let a = new Array(24);
  if (Object.seal) {
    a.fill("");
    Object.seal(a);
  }

  culture.plant.seeding.map(function (event) {
    var i;
    for (i = event.start - 1; i <= event.end - 1; i++) {
      a.splice(i, 1, event.name);
    }
    return null;
  });

  console.log(a);

  if (!culture) return <div />;
  return (
    <div class="mb-2 p-2 bg-green-50">
      <div class="bg-blue-600 rounded-lg p-2 w-64">{culture.plant.name}</div>
      <div class="grid grid-cols-13 gap-2">
        {months.map((month) => {
          return (
            <div class="text-xs row-start-2 bg-blue-200 rounded-lg p-1">
              {month}
            </div>
          );
        })}
        <div class="text-xs row-start-3 col-start-2 col-end-4 bg-yellow-700 rounded-lg p-2">
          seeding
        </div>
        <div class="text-xs row-start-4 col-start-5 col-end-8 bg-red-700 rounded-lg p-2">
          planting
        </div>
        <div class="text-xs row-start-5 col-start-2 col-end-4 bg-green-700 rounded-lg p-2">
          test
        </div>
      </div>
    </div>
  );
};
