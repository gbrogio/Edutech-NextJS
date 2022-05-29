import { useEffect, useState } from 'react';

import { FetcherCookie } from '@services/fetchers/fetcher-cookie';

export function usePersistedStateCookie(
  key: string,
  defaultValue: string,
): [string, React.Dispatch<React.SetStateAction<string>>] {
  const cookie = FetcherCookie();

  const [state, setState] = useState(() => {
    const value = cookie.get(key);
    return value || defaultValue;
  });

  useEffect(() => {
    cookie.set(key, state);
  }, [cookie, key, state]);

  return [state, setState];
}