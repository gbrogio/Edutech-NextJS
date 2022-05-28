import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

import { ThemeProvider } from 'styled-components';

import { Layout } from '@components/Layout';

import { defaultTheme } from '@globalStyles/themes/default';
import { GlobalStyles } from '@globalStyles';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles.Reset />
      <GlobalStyles.Colors />
      <GlobalStyles.Fonts />
      <GlobalStyles.Shadows />
      <GlobalStyles.Others />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default appWithTranslation(MyApp);
