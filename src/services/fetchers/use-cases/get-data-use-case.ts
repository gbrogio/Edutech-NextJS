import { Fetcher } from '@services/fetchers';

export async function getDataFromApi<T>(
  URL: string,
  options?: {
    callbackError: () => any;
    id?: string;
  },
): Promise<T> {
  try {
    const httpClient = Fetcher<T>(URL);
    if (options?.id) {
      const { data } = await httpClient.getOne(options.id);
      return data;
    }
    const { data } = await httpClient.getAll();
    return data;
  } catch (err: any) {
    if (options) return options.callbackError();
    throw new Error(
      `On error in execute the fetch. The error say: \n${err.message}`,
    );
  }
}
