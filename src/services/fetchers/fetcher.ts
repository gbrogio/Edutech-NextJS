import axios, { type AxiosResponse } from 'axios';

export interface IFetcher<T> {
  getAll: () => Promise<AxiosResponse<T, any>>;
  getOne: (id: string) => Promise<AxiosResponse<T, any>>;
  put: (id: string) => Promise<AxiosResponse<T, any>>;
  delete: (id: string) => Promise<AxiosResponse<T, any>>;
  post: (id: string) => Promise<AxiosResponse<T, any>>;
}

export function Fetcher<T>(
  url: string,
  options: { methodToFindIdUrl?: string } = { methodToFindIdUrl: '/' },
): IFetcher<T> {
  return {
    getAll: async () => axios.get<T>(url),

    getOne: async (id: string) =>
      axios.get<T>(`${url}${options.methodToFindIdUrl}${id}`),

    put: async (id: string) =>
      axios.put<T>(`${url}${options.methodToFindIdUrl}${id}`),

    delete: async (id: string) =>
      axios.delete<T>(`${url}${options.methodToFindIdUrl}${id}`),

    post: async (postOptions: any) => axios.post<T>(url, postOptions),
  };
}
