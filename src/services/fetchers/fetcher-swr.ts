import useSWR from 'swr';

export type IFetcherSWR<T> = {
  isLoading: boolean;
  isError: boolean;
  data: T | undefined | null;
};

export function FetcherSWR<T>(
  url: string,
  fetcher: (URL: string) => Promise<T>,
): IFetcherSWR<T> {
  const { data, error, isValidating } = useSWR(url, fetcher);

  return {
    isLoading: isValidating,
    isError: error,
    data,
  };
}
