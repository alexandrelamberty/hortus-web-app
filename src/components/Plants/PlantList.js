import React, { useEffect, useState } from "react";

function PlantItem({ plant }) {
  return (
    <li className="py-4 flex">
      <img className="h-10 w-10 rounded-full" src={plant.logo} alt="" />
      <div className="ml-3">
        <p className="text-sm font-medium text-gray-900">{plant.name}</p>
        <p className="text-sm text-gray-500">{plant.family}</p>
      </div>
    </li>
  );
}

export function PlantList() {
  const [page, setPage] = useState(1);
  const [plants, setPlants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadMoreCommit = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    fetch(
      `http://localhost:3333/crops`,
      {
        method: "GET",
        headers: new Headers({
          Accept: "application/vnd.github.cloak-preview",
        }),
      }
    )
      .then((res) => res.json())
      .then((response) => {
        setPlants(response);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [page]);

  return (
    <div>
      <h1> API calls with React Hooks </h1>
      {isLoading && <p>Wait I'm Loading comments for you</p>}

      <ul className="divide-y divide-gray-200">
        {plants.map((plant) => (
          <PlantItem key={plant._id} plant={plant} />
        ))}
      </ul>
    </div>
  );
}
