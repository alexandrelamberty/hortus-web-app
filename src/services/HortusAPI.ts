import { AxiosRequestConfig } from "axios";
import { apiRequest } from "./AxiosClient";

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
