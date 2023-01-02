import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

enum StatusCode {
  Unauthorized = 401,
  Forbidden = 403,
  TooManyRequests = 429,
  InternalServerError = 500,
}

type HTTPHeader = Record<string, string | boolean>;

const headers: Readonly<HTTPHeader> = {
  Accept: "application/json",
  "Content-Type": "application/json; charset=utf-8",
  "Access-Control-Allow-Credentials": true,
  "X-Requested-With": "XMLHttpRequest",
};

export interface IApiClient {
  post<TRequest, TResponse>(
    url: string,
    data: TRequest,
    config?: AxiosRequestConfig
  ): Promise<TResponse>;
  patch<TRequest, TResponse>(url: string, data: TRequest): Promise<TResponse>;
  put<TRequest, TResponse>(url: string, data: TRequest): Promise<TResponse>;
  get<TResponse>(url: string): Promise<TResponse>;
  delete<TResponse>(url: string): Promise<TResponse>;
}

class APIClient implements IApiClient {
  // Singleton
  private instance: AxiosInstance | null = null;

  // Return only one instance the APIClient
  private get http(): AxiosInstance {
    return this.instance != null ? this.instance : this.initHttp();
  }

  // Create Axios instance
  initHttp() {
    const http = axios.create({
      baseURL: "http://localhost:3333",
      headers,
      withCredentials: false,
    });

    // Add a request interceptor
    axios.interceptors.request.use(
      function (config) {
        // Do something before request is sent
        return config;
      },
      function (error) {
        // Do something with request error
        return Promise.reject(error);
      }
    );

    http.interceptors.response.use(
      (response) => response,
      (error) => {
        const { response } = error;
        return this.handleError(response);
      }
    );

    this.instance = http;
    return http;
  }

  async post<TRequest, TResponse>(
    url: string,
    data: TRequest,
    config?: AxiosRequestConfig
  ): Promise<TResponse> {
    try {
      const response = config
        ? await this.http.post<TResponse>(url, data, config)
        : await this.http.post<TResponse>(url, data);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
    return {} as TResponse;
  }

  async patch<TRequest, TResponse>(
    url: string,
    data: TRequest
  ): Promise<TResponse> {
    try {
      const response = await this.http.patch<TResponse>(url, data);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
    return {} as TResponse;
  }

  async put<TRequest, TResponse>(
    url: string,
    data: TRequest
  ): Promise<TResponse> {
    try {
      const response = await this.http.put<TResponse>(url, data);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
    return {} as TResponse;
  }

  async delete<TResponse>(url: string): Promise<TResponse> {
    try {
      const response = await this.http.delete<TResponse>(url);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
    return {} as TResponse;
  }

  async get<TResponse>(url: string): Promise<TResponse> {
    try {
      const response = await this.http.get<TResponse>(url);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
    return {} as TResponse;
  }

  // Handle global app errors
  // We can handle generic app errors depending on the status code
  private handleError(error: any) {
    const { status } = error;

    switch (status) {
      case StatusCode.InternalServerError: {
        // Handle InternalServerError
        break;
      }
      case StatusCode.Forbidden: {
        // Handle Forbidden
        break;
      }
      case StatusCode.Unauthorized: {
        // Handle Unauthorized
        break;
      }
      case StatusCode.TooManyRequests: {
        // Handle TooManyRequests
        break;
      }
    }

    return Promise.reject(error);
  }
}

export const API = new APIClient();
