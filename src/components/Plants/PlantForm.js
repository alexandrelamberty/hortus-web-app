import React from "react";
import { Dropdown } from "../dropdown/Dropdown";
import { PlantTooltip } from "./PlantTooltip";

export function PlantForm({ plant, handleClose }) {

  function handleSubmit(e) {
    alert('An essay was submitted: ');
    e.preventDefault();
  }
  return (

    <form action={handleSubmit} class="bg-white px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
          Name
        </label>
        <input
          class="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 px-2"
          id="name"
          type="text"
          placeholder="Text input"
        />
      </div>
      {/* */}
      <div class="mb-4">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-state"
        >
          Family
        </label>
        <Dropdown data={["Family 1","Family 2"]} />
      </div>

      {/* */}
      <div class="mb-4">
        <label class="block">
          <input class="mr-2 leading-tight" type="checkbox" />
          <span class="text-sm">I agree this</span>
        </label>
      </div>
      <div class="mb-4">
        <label class="inline-flex items-center">
          <input type="radio" class="form-radio" name="accountType" value="1" />
          <span class="ml-2">Yes</span>
        </label>
        <label class="inline-flex items-center ml-6">
          <input type="radio" class="form-radio" name="accountType" value="2" />
          <span class="ml-2">No</span>
        </label>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">
          Message
          <textarea
            class="shadow form-textarea mt-1 block w-full border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="5"
            placeholder="Textarea"
          ></textarea>
        </label>
      </div>
      <div class="flex items-center justify-right">
      <button onClick={handleClose}
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Cancel
        </button>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
