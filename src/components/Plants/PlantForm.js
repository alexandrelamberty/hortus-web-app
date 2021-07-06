import React from "react";
import { useForm } from "react-hook-form";
import { createPlant } from "../../services/PlantService";
export function PlantForm({ plant, handleClose }) {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log("FORM SUBMITTED");
    console.log(data);
    createPlant(data)
      .then((data) => {
        console.log(data);
      })
      .catch(console.error);
  };
  let family = ["Fam 12", "Fam 2"];
  let genus = ["Fam 12", "Fam 2"];
  let types = ["Root", "Buld", "Seed", "Leaf"];
  return (
    <form class="bg-white px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
          Name
        </label>
        <input
          class="focus:border-light-blue-500 focus:ring-2 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 px-2"
          id="name"
          type="text"
          placeholder="Text input"
          {...register("name")}
        />
        <input />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
          Family
        </label>
        <div class="relative">
          <select
            {...register("family")}
            class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option>Select dropdown</option>
            {family.map((item) => (
              <option>{item}</option>
            ))}
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
          Genus
        </label>
        <div class="relative">
          <select
            {...register("genus")}
            class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option>Select dropdown</option>
            {genus.map((item) => (
              <option>{item}</option>
            ))}
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
          Type
        </label>
        <div class="relative">
          <select
            {...register("genus")}
            class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option>Select dropdown</option>
            {types.map((item) => (
              <option>{item}</option>
            ))}
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">
          Message
          <textarea
            class="shadow form-textarea mt-1 block w-full border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="5"
            placeholder="Textarea"
            {...register("description")}
          ></textarea>
        </label>
      </div>

      {/* Phase Seeding */}
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
          Seeding
        </label>
        <input
          class="focus:border-light-blue-500 focus:ring-2 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 px-2"
          id="name"
          type="text"
          placeholder="Text input"
          {...register("name")}
        />
        <input />
      </div>

      {/* Controlls */}
      <div class="flex items-center justify-right">
        <button
          onClick={handleClose}
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Cancel
        </button>
        <button
          type="submit"
          onClick={handleSubmit((data) => {
            onSubmit(data);
          })}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
