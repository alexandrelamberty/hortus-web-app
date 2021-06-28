export const plantations = [
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
  {
    name: "Laitue",
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

export async function getAll() {
  const response = await fetch(
    "http://api.countryside-collection.com/v1/categories?lang=fr&format=json"
  );
  return await response.json();
}

export async function create(data) {
  const response = await fetch(`/api/user`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user: data }),
  });
  return await response.json();
}

export async function read(data) {
  const response = await fetch(`/api/user`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user: data }),
  });
  return await response.json();
}

export async function update(data) {
  const response = await fetch(`/api/user`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user: data }),
  });
  return await response.json();
}

export async function remove(data) {
  const response = await fetch(`/api/user`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user: data }),
  });
  return await response.json();
}
