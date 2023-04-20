import { AxiosRequestConfig } from "axios";
import { apiRequest } from "./AxiosClient";
import { Plant } from "../interfaces/Plant";
import { Culture } from "../interfaces/Culture";
import { Seed } from "../interfaces/Seed";

type GetUsersResponseData = {
  id: string;
  name: string;
  email: string;
}[];

type GetUserResponseData = {
  id: string;
  name: string;
  email: string;
};

export const getUsers = async (): Promise<GetUsersResponseData> => {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: "/users",
  };
  return await apiRequest<GetUsersResponseData>(config);
};

export const getUser = async (userId: string): Promise<GetUserResponseData> => {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: `/users/${userId}`,
  };
  return await apiRequest<GetUserResponseData>(config);
};

export const postRegister = async (
  userId: string
): Promise<GetUserResponseData> => {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: `/users/${userId}`,
  };
  return await apiRequest<GetUserResponseData>(config);
};

export const postLogin = async (
  userId: string
): Promise<GetUserResponseData> => {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: `/users/${userId}`,
  };
  return await apiRequest<GetUserResponseData>(config);
};

// Plants

type GetPlantsResponseData = Plant[];

type GetPlantResponseData = Plant;

export const getPlants = async (): Promise<GetPlantsResponseData> => {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: "/plants",
  };
  return await apiRequest<GetPlantsResponseData>(config);
};

export const getPlant = async (
  plantId: string
): Promise<GetPlantResponseData> => {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: `/plants/${plantId}`,
  };
  return await apiRequest<GetPlantResponseData>(config);
};

// Seeds

type GetSeedsResponseData = Seed[];

type GetSeedResponseData = Seed;

export const getSeeds = async (): Promise<GetPlantsResponseData> => {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: "/seeds",
  };
  return await apiRequest<GetPlantsResponseData>(config);
};

export const getSeed = async (seedId: string): Promise<GetSeedResponseData> => {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: `/seeds/${seedId}`,
  };
  return await apiRequest<GetSeedResponseData>(config);
};

// Cultures

type GetCulturesResponseData = Culture[];

type GetCultureResponseData = Culture;

export const getCultures = async (): Promise<GetCulturesResponseData> => {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: "/cultures",
  };
  return await apiRequest<GetCulturesResponseData>(config);
};

export const getCulture = async (
  cultureId: string
): Promise<GetCultureResponseData> => {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: `/cultures/${cultureId}`,
  };
  return await apiRequest<GetCultureResponseData>(config);
};
