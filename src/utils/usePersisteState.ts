import { useState, useEffect } from 'react';
import { setCookie } from 'nookies';

function usePersistedState(key: any, value: any, initialState: any) {
  const [state, setState] = useState(() => {
    const cookieValue = value;
    if (cookieValue) {
      return (cookieValue);
    }
    return initialState;
  });

  useEffect(() => {
    setCookie(null, key, state, {
      maxAge: 86400 * 7 * 4 * 12,
      path: '/',
    });
  }, [key, state]);
  return [state, setState];
}

export default usePersistedState;
