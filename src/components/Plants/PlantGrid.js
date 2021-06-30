import React, { useEffect, useState } from "react";
import { PlantCard } from "./PlantCard";

function PlantItem({ plant }) {


  function onMouseOver(e) {
    e.preventDefault();
    console.log('[PlantGridItem] onMouseOver');
  }

  function handleClick(e) {
    e.preventDefault();
    console.log('[PlantGridItem] handleClick', plant);
  }

  return (
    <li x-for="item in items" onMouseOver={onMouseOver} onClick={handleClick} class=" md:flex hover:bg-light-blue-500 hover:border-transparent hover:shadow-lg group block rounded-lg border border-gray-200">
        <img class="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={"images/"+plant.image} alt="" width="384" height="512"></img>
        <dl class="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
          <div>
            <dt class="sr-only">Title</dt>
            <dd class="group-hover:text-white leading-6 font-medium text-black">
              {plant.name}
            </dd>
          </div>
          <div>
            <dt class="sr-only">Category</dt>
            <dd class="group-hover:text-light-blue-200 text-sm font-medium sm:mb-4 lg:mb-0 xl:mb-4">
              {plant.family}
            </dd>
          </div>
          <div class="col-start-2 row-start-1 row-end-3">
            <dt class="sr-only">Users</dt>
            <dd class="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-2">
              <img
                x-for="user in item.users"
                src="./images/growing-eggplants.jpg"
                alt="user.name"
                width="48"
                height="48"
                class="w-7 h-7 rounded-full bg-gray-100 border-2 border-white"
              />
            </dd>
          </div>
        </dl>
    </li>
  );
}

export function PlantGrid({ plants, onPlantGridItemClick }) {

  const [show, setShow] = useState(0)

  function handleClick(e) {
    e.preventDefault();
    console.log('[PlantGrid] handleClick ');
    
  }

  function onChange(e) {
    e.preventDefault();
    console.log('[PlantGrid] onChange ');
    
  }

  return (
    <section class="bg-white px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4">
      <header class="flex items-center justify-between">
        <h2 class="text-lg leading-6 font-medium text-black">Plants</h2>
        <button onClick={onPlantGridItemClick} class="hover:bg-dark-blue-200 hover:text-light-blue-800 group flex items-center rounded-md bg-light-blue-100 text-light-blue-600 text-sm font-medium px-4 py-2">
          <svg
            class="group-hover:text-light-blue-600 text-light-blue-500 mr-2"
            width="12"
            height="20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6 5a1 1 0 011 1v3h3a1 1 0 110 2H7v3a1 1 0 11-2 0v-3H2a1 1 0 110-2h3V6a1 1 0 011-1z"
            />
          </svg>
          New
        </button>
      </header>
      <form class="relative">
        <svg
          width="20"
          height="20"
          fill="currentColor"
          class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          />
        </svg>
        <input
          class="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10"
          type="text"
          aria-label="Filter plants"
          placeholder="Filter plants"
          onChange={onChange}
        />
      </form>
      <ul class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {plants.map((plant) => (
          <PlantItem key={plant._id} plant={plant} />
        ))}
      </ul>
      <PlantCard show={show}/>
    </section>
  );
}
