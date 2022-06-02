import type { AppProps } from 'next/app';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';

import { LayoutProvider } from '@contexts/Layout';
import { CoursesProvider } from '@contexts/Courses';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>EduTech - GBrogio</title>
    </Head>
    <LayoutProvider>
      <CoursesProvider>
        <Component {...pageProps} />
      </CoursesProvider>
    </LayoutProvider>
  </>
);

export default appWithTranslation(MyApp);
