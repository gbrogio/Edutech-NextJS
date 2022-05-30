import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';

import { ThemeProvider } from 'styled-components';

import { Layout } from '@components/Layout';
import { usePersistedStateCookie } from '@hooks/usePersistedStateCookie';

import { defaultTheme } from '@globalStyles/themes/default';
import { contrastTheme } from '@globalStyles/themes/contrast';
import { GlobalStyles } from '@globalStyles';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isMounted, setIsMounted] = useState(false);

  const [fontSize, setFontSize] = usePersistedStateCookie<'16px' | '18px'>(
    'FONT_SIZE',
    '16px',
  );
  const [theme, setTheme] = usePersistedStateCookie<'default' | 'contrast'>(
    'THEME',
    'default',
  );

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <ThemeProvider theme={theme === 'contrast' ? contrastTheme : defaultTheme}>
      <GlobalStyles.Reset />
      <GlobalStyles.Colors />
      <GlobalStyles.Fonts />
      <GlobalStyles.Shadows />
      <GlobalStyles.Others />
      {isMounted && (
        <Layout
          accessibilityFunctions={{
            handleFontSize: () =>
              setFontSize(fontSize === '16px' ? '18px' : '16px'),
            handleTheme: () =>
              setTheme(theme === 'default' ? 'contrast' : 'default'),
          }}
        >
          <Component {...pageProps} />
        </Layout>
      )}
    </ThemeProvider>
  );
};

export default appWithTranslation(MyApp);
