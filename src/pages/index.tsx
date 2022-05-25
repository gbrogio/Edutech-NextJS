import type { GetServerSideProps, NextPage } from 'next';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { EdutechStudiedPath } from '@components/EdutechStudiedPath';
import { setCurrentLocale } from '@services/apis/i18n/set-current-locale';
import { LineCSS } from '@stylesComponents/SeparatorsCSS';
import { DescriptionCSS, TitleCSS } from '@stylesComponents/TextCSS';
import { EDUTECH_STUDIED_PATHS } from '@utils/edutech-studied-paths';

import { useTheme } from 'styled-components';
import { BREAKPOINTS } from '@globalStyles/tokens';

const Home: NextPage = () => {
  const { t } = useTranslation();
  const { name: currentTheme } = useTheme();

  const [width, setWidth] = useState(0);
  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <section className="home">
        <div className="content">
          <TitleCSS>{t('home.title')}</TitleCSS>
          <DescriptionCSS>{t('home.description')}</DescriptionCSS>
        </div>
        <div className="image">
          <Image
            src={`/img/edutech-${currentTheme}.png`}
            alt=""
            layout={width <= BREAKPOINTS.$SM ? 'responsive' : 'fixed'}
            width={364}
            height={373}
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

        <Link href="https://www.alura.com.br" target="_blank" passHref>
          <a href="replace">{t('home.platform.link-text')}</a>
        </Link>
      </section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(setCurrentLocale(locale!), ['common'])),
    },
  };
};
export default Home;
