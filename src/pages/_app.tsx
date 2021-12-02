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

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  // altera a div __next
  useEffect(() => {
    if (document.getElementById('__next')) {
      const NextID = document.getElementById('__next');
      NextID.id = '__edutech-next';
    }
  });

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

      <Colors />
      <CardCp />
      <GlobalStyles />

      {/* carregamento das paginas */}
      <Component {...pageProps}/>
    </AuthProvider>

  );
};

export default MyApp;
