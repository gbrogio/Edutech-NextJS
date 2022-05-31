import { useEffect, useState } from 'react';

import { FetcherCookie } from '@services/fetchers/fetcher-cookie';

export function usePersistedStateCookie<T extends string>(
  key: string,
  defaultValue: T,
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const cookie = FetcherCookie();

  const [state, setState] = useState(() => {
    const value = cookie.get(key) as T;
    return value || defaultValue;
  });

  useEffect(() => {
    cookie.set(key, state);
  }, [cookie, key, state]);

  return [state, setState];
}
