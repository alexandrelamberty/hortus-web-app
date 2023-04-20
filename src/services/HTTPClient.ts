import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

enum StatusCode {
  Unauthorized = 401,
  Forbidden = 403,
  TooManyRequests = 429,
  InternalServerError = 500,
}

const headers: Readonly<Record<string, string | boolean>> = {
  Accept: "application/json",
  "Content-Type": "application/json; charset=utf-8",
  "Access-Control-Allow-Credentials": true,
  "X-Requested-With": "XMLHttpRequest",
};

// We can use the following function to inject the JWT token through an interceptor
// We get the `accessToken` from the localStorage that we set when we authenticate
const injectToken = (config: AxiosRequestConfig): AxiosRequestConfig => {
  try {
    const token = localStorage.getItem("accessToken");

    if (token != null && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  } catch (error) {
    // if (error) throw new Error(error);
    console.log(error);
    throw new Error("LocaStorageError");
  }
};

class HTTPClient {
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
    // withCredentials: true,
    });

    http.interceptors.request.use(injectToken, (error) =>
      Promise.reject(error)
    );

    // http.interceptors.response.use(
    //   (response) => response,
    //   (error) => {
    //     const { response } = error;
    //     console.log(error);
    // return this.handleError(response);
    //   }
    // );

    this.instance = http;
    return http;
  }

  //
  request<T = any, R = AxiosResponse<T>>(
    config: AxiosRequestConfig
  ): Promise<R> {
    return this.http.request(config);
  }

  get<TRequest = any, R = AxiosResponse<TRequest>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.get<TRequest, R>(url, config);
  }

  post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.post<T, R>(url, data, config);
  }

  put<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.put<T, R>(url, data, config);
  }

  delete<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.delete<T, R>(url, config);
  }
}

export const HTTP = new HTTPClient();
