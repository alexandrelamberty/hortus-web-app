import React, { useEffect, useState } from "react";

function PlantItem({ culture }) {
  // TODO: Add event listener to controls
  return (
    <li x-for="item in items">
      <a
        href="item.url"
        class="hover:bg-light-blue-500 hover:border-transparent hover:shadow-lg group block rounded-lg p-4 border border-gray-200"
      >
        <dl class="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
          <div>
            <dt class="sr-only">Title</dt>
            <dd class="group-hover:text-white leading-6 font-medium text-black">
              {culture.plant.name}
            </dd>
          </div>
          <div>
            <dt class="sr-only">Category</dt>
            <dd class="group-hover:text-light-blue-200 text-sm font-medium sm:mb-4 lg:mb-0 xl:mb-4">
              {culture.plant.family}
            </dd>
          </div>
          <div class="col-start-2 row-start-1 row-end-3">
            <dt class="sr-only">Users</dt>
            <dd class="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-2">
              <img
                x-for="user in item.users"
                src="user.avatar"
                alt="user.name"
                width="48"
                height="48"
                class="w-7 h-7 rounded-full bg-gray-100 border-2 border-white"
              />
            </dd>
          </div>
        </dl>
      </a>
    </li>
  );
}

export function PlantationGrid({ cultures }) {
  return (
    <section class="px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4">
      <header class="flex items-center justify-between">
        <h2 class="text-lg leading-6 font-medium text-black">Cultures</h2>
        <div class="flex">
          <button class="hover:bg-dark-blue-200 hover:text-light-blue-800 group flex items-center rounded-md bg-light-blue-100 text-light-blue-600 text-sm font-medium px-4 py-2">
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
          aria-label="Filter cultures"
          placeholder="Filter cultures"
        />
      </form>
        </div>
      </header>
      
      <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {cultures.map((culture) => (
          <PlantItem key={culture._id} culture={culture} />
        ))}
        <li class="hover:shadow-lg flex rounded-lg">
          <a
            href="/new"
            class="hover:border-transparent hover:shadow-xs w-full flex items-center justify-center rounded-lg border-2 border-dashed border-gray-200 text-sm font-medium py-4"
          >
            New Culture
          </a>
        </li>
      </div>
    </section>
  );
}
