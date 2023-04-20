import { createAsyncThunk } from "@reduxjs/toolkit";
import { Culture } from "../../interfaces/Culture";
import { CultureDTO } from "../../interfaces/CultureDTO";
import { HTTP } from "../../services/HTTPClient";

type ListCulturesParams = {
  limit?: number;
  skip?: number;
};

export const listCultures = createAsyncThunk(
  "cultures/list",
  async (args: ListCulturesParams, thunk) => {
    // return await axios.get(import.meta.env.VITE_API_URL + "/cultures");
    const response = await HTTP.get<null, any>("cultures");
    return response.data;
  }
);

export const createCulture = createAsyncThunk(
  "cultures/create",
  async (culture: CultureDTO) => {
    return HTTP.post<CultureDTO>("cultures", culture);
  }
);

export const readCulture = createAsyncThunk("cultures/read", (id: string) => {
  async (id: string) => {
    return HTTP.post<string, Culture>("cultures", id);
  };
});

export const updateCulture = createAsyncThunk(
  "cultures/update",
  async (culture: CultureDTO) => {
    return HTTP.put<CultureDTO>("cultures", culture);
  }
);

export const deleteCulture = createAsyncThunk(
  "cultures/delete",
  (id: string) => {
    async (id: string) => {
      return HTTP.delete<string>("cultures/:id", {
        params: {
          id: "123456789",
        },
      });
    };
  }
);
