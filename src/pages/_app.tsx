import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

import { LayoutProvider } from '@contexts/Layout';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <LayoutProvider>
    <Component {...pageProps} />
  </LayoutProvider>
);

export default appWithTranslation(MyApp);
