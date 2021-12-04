// importações
import React, { useEffect } from 'react';
import Head from 'next/head';

// propriedades
import { AppProps } from 'next/app';

// componente de autenticação
import { AuthProvider } from '../context/AuthContext';

// estilos globais
import { Colors } from 'styles/global/Colors';
import { CardCp } from 'style-components/CardCp'
import GlobalStyles from 'styles/global/Global';
import AccessibilityCp from 'components/Accessibility';

// tema
import Contrast from 'styles/theme/contrast';
import Default from 'styles/theme/default';
import { ThemeProvider } from 'styled-components';
import { setCookie, parseCookies } from 'nookies'
import usePersistedState from 'src/utils/usePersisteState';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  // altera a div __next
  useEffect(() => {
    if (document.getElementById('__next')) {
      const NextID = document.getElementById('__next');
      NextID.id = '__edutech-next';
    }
  });

  const [fontSize, setFontSize] = usePersistedState('USER_FONTSIZE', parseCookies().USER_FONTSIZE, '16px');
  const fontSmall = '16px';
  const fontBig = '18px';
  console.log(fontSize)

  const toggleFontSize = () => {
    if (fontSize === '16px') {
      setFontSize(fontBig);
      setCookie(null, 'USER_FONTSIZE', fontBig, {
        maxAge: 86400 * 7 * 4 * 12,
        path: '/',
      });
    } else if (fontSize === '18px') {
      setFontSize(fontSmall);
      setCookie(null, 'USER_FONTSIZE', fontSmall, {
        maxAge: 86400 * 7 * 4 * 12,
        path: '/',
      });
    }
  }
  useEffect(() => {
    document.querySelector('html').style.fontSize = fontSize === '16px' ? fontSmall : fontBig
  }, [fontSize])

  const [themeData, setThemeData] = usePersistedState('USER_THEME', parseCookies().USER_THEME, 'default');
  const defaultTheme = 'default';
  const contrastTheme = 'contrast';

  const toggleTheme = async () => {
    if (themeData === 'default') {
      setThemeData(contrastTheme);
      setCookie(null, 'USER_THEME', contrastTheme, {
        maxAge: 86400 * 7 * 4 * 12,
        path: '/',
      });
    } else if (themeData === 'contrast') {
      setThemeData(defaultTheme);
      setCookie(null, 'USER_THEME', defaultTheme, {
        maxAge: 86400 * 7 * 4 * 12,
        path: '/',
      });
    }
  };

  return (
    <AuthProvider>
      <Head>
        <meta name="description" content="GBrogio WebSite - EDUTECH" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="viewport-fit=cover" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <ThemeProvider theme={themeData === 'default' ? Default : Contrast}>
        <Colors />
        <GlobalStyles />
        <CardCp />
      </ThemeProvider>

      <AccessibilityCp
        toggleTheme={toggleTheme}
        toggleFontSize={toggleFontSize}
        fontSize={fontSize}
      />
      {/* carregamento das paginas */}
      <Component {...pageProps}/>
    </AuthProvider>

  );
};

export default MyApp;
