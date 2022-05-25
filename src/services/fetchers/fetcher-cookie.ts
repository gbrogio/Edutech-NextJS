import nookie from 'nookies';

export function FetcherCookie(ctx?: any) {
  return {
    get: (key: string) => {
      const value = nookie.get(ctx || null)[key];

      return value;
    },
    set: (key: string, value: string) => {
      nookie.set(ctx || null, key, value, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });
    },
    remove: (key: string) => {
      nookie.destroy(ctx || null, key);
    },
  };
}
