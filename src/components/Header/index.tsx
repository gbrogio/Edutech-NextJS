import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import { Anchor } from '@components/Anchor';
import { Sidebar } from '@components/Sidebar';

import { SidebarTrigger } from '@components/Sidebar/SidebarTrigger';
import { useState } from 'react';
import gbrogioLogo from '../../assets/svgs/gbrogio-logo.svg';

import { ContainerCSS, TopContentCSS, BottomContentCSS } from './styles';

const NavigationSection = () => {
  const { t } = useTranslation();

  return (
    <section className="middle-content">
      <nav>
        <ul>
          <li>
            <Anchor href="/">{t('links.home')}</Anchor>
          </li>
          <li>
            <Anchor href="/courses">{t('links.search-courses')}</Anchor>
          </li>
          <li>
            <Anchor href="https://github.com/gbrogio/Edutech-NextJS">
              {t('links.about')}
            </Anchor>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export const Header = () => {
  const { t } = useTranslation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <ContainerCSS>
        <TopContentCSS>
          <section className="left-content">
            <SidebarTrigger
              aria-expanded={sidebarOpen}
              id="sidebar-trigger-:t-1:"
              aria-label={t('sidebar.sidebar-trigger-aria-label')}
              onClick={() => setSidebarOpen(!sidebarOpen)}
            />
            <h1 className="site-title">
              <p lang="en">
                <strong>EDU</strong>
                <span>TECH - </span>
                {new Date().getFullYear()}
              </p>
              <p lang="pt-br">Paraná, Brasil</p>
            </h1>
          </section>
          <NavigationSection />
          <section className="right-content">
            <a
              className="social-link"
              target="_blank"
              href="https://github.com/gbrogio"
              rel="noreferrer"
            >
              <Image
                src={gbrogioLogo}
                alt="Guilherme Brogio - logo"
                className="course-image"
                width={716}
                height={131}
                style={{
                  filter: `invert(var(--invert-percent))`,
                }}
              />
            </a>
          </section>
        </TopContentCSS>
        <BottomContentCSS>
          <NavigationSection />
        </BottomContentCSS>
      </ContainerCSS>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </>
  );
};
