import type { GetServerSideProps } from 'next';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { EdutechStudiedPath } from '@components/EdutechStudiedPath';
import { setCurrentLocale } from '@services/apis/i18n/set-current-locale';
import { FetcherCookie } from '@services/fetchers/fetcher-cookie';
import { LineCSS } from '@stylesComponents/SeparatorsCSS';
import { DescriptionCSS, TitleCSS } from '@stylesComponents/TextCSS';
import { EDUTECH_STUDIED_PATHS } from '@utils/edutech-studied-paths';

import { BREAKPOINTS } from '@globalStyles/tokens';

import { useLayoutContext } from '@contexts/Layout/useLayoutContext';
import edutechContrast from '../assets/imgs/edutech-contrast.png';
import edutechDefault from '../assets/imgs/edutech-default.png';

interface HomeProps {
  theme: 'default' | 'contrast';
}

const Home = ({ theme }: HomeProps) => {
  const { t } = useTranslation();

  const [currentTheme, setCurrentTheme] = useState(theme);
  const { cTheme } = useLayoutContext();

  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener('resize', () => setWidth(window.innerWidth));
    return () => {
      window.removeEventListener('resize', () => setWidth(window.innerWidth));
    };
  }, []);
  useEffect(() => {
    setCurrentTheme(cTheme);
  }, [cTheme]);

  return (
    <>
      <section className="home">
        <div className="content">
          <TitleCSS>{t('home.title')}</TitleCSS>
          <DescriptionCSS>{t('home.description')}</DescriptionCSS>
        </div>
        <div className="image">
          <Image
            src={currentTheme === 'contrast' ? edutechContrast : edutechDefault}
            alt="Programa EduTech - logo"
            layout={width <= BREAKPOINTS.$SM ? 'responsive' : 'fixed'}
            width={500}
            height={525}
            draggable={false}
            priority
          />
        </div>
      </section>

      <LineCSS />

      <section className="studied-paths">
        <TitleCSS>{t('home.studied-paths.title')}</TitleCSS>
        {EDUTECH_STUDIED_PATHS.map(
          ({ title, schoolYear, description, id }, index) => (
            <EdutechStudiedPath
              key={id}
              title={t(title)}
              schoolYear={t(schoolYear)}
              hasLine={index !== EDUTECH_STUDIED_PATHS.length - 1}
            >
              {t(description)}
            </EdutechStudiedPath>
          ),
        )}
      </section>

      <LineCSS />

      <section className="platform">
        <TitleCSS>{t('home.platform.title')}</TitleCSS>
        <DescriptionCSS>{t('home.platform.description')}</DescriptionCSS>

        <Link href="https://www.alura.com.br" passHref>
          <a href="replace" target="_blank">
            {t('home.platform.link-text')}
          </a>
        </Link>
      </section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookie = FetcherCookie(ctx);
  const theme = cookie.get('THEME') || null;

  return {
    props: {
      theme,
      ...(await serverSideTranslations(setCurrentLocale(ctx.locale!), [
        'common',
      ])),
    },
  };
};
export default Home;
