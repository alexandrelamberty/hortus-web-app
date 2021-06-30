export const plants = [
  {
    name: "Aubergine",
    events: [
      {
        name: "seeding", //
        start: 1,
        end: 7,
      },
      {
        name: "transplanting",
        start: 9,
        end: 10,
      },
      {
        name: "planting",
        start: 14,
        end: 15,
      },
      {
        name: "harvesting",
        start: 18,
        end: 19,
      },
    ],
  },
  {
    name: "Carrots",
    events: [
      {
        name: "seeding",
        start: 1,
        end: 2,
      },
      {
        name: "transplanting",
        start: 9,
        end: 10,
      },
      {
        name: "planting",
        start: 14,
        end: 15,
      },
      {
        name: "harvesting",
        start: 18,
        end: 19,
      },
    ],
  },
];

export async function getPlants() {
  const response = await fetch(
    "http://192.168.1.49:3333/crops"
  );
  return await response.json();
}

export async function createPlant(data) {
  const response = await fetch(`/api/user`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user: data }),
  });
  return await response.json();
}

export async function updatePlant(data) {
  const response = await fetch(`/api/user`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user: data }),
  });
  return await response.json();
}

export async function deletePlant(data) {
  const response = await fetch(`/api/user`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user: data }),
  });
  return await response.json();
}
