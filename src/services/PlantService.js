export async function getAll() {
  const response = await fetch(
    "http://192.168.1.49:3333/plants"
  );
  return await response.json();
}

export async function createPlant(data) {
  const response = await fetch("http://192.168.1.49:3333/plants", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return await response.json();
}

export async function updatePlant(data) {
  const response = await fetch(`/api/user`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data }),
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
