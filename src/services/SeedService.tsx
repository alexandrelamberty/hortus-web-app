const URL = process.env.REACT_APP_API_URL + "/seeds";

export async function getAllSeed() {
  console.log("SeedSerice::getAllSeed", URL);
  const response = await fetch(URL);
  return await response.json();
}

export async function createSeed(data:Object) {
  const response = await fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data }),
  });
  return await response.json();
}

export async function read(data:Object) {
  const response = await fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data }),
  });
  return await response.json();
}

export async function updateSeed(data:Object) {
  const response = await fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data }),
  });
  return await response.json();
}

export async function removeSeed(data:Object) {
  const response = await fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data }),
  });
  return await response.json();
}
