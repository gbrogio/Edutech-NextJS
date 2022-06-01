import { useTranslation } from 'next-i18next';
import { useEffect, useRef, useState } from 'react';

import { Anchor } from '@components/Anchor';
import { focusTrapOnKeyboardEvent } from '@services/focus-trap-on-keyboard-event';

import { LineCSS } from '@stylesComponents/SeparatorsCSS';

import { BREAKPOINTS } from '@globalStyles/tokens';
import { SidebarTrigger } from './SidebarTrigger';

import { ContainerCSS } from './styles';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
}

const ANIMATION_TIME = 200;

export const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const { t } = useTranslation();
  const [display, setDisplay] = useState('flex');

  const sidebarReference = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sidebarOpen) {
      setDisplay('flex');
      setTimeout(() => {
        sidebarReference.current?.focus();
      }, ANIMATION_TIME);
    } else {
      const firstTrigger = document.getElementById('sidebar-trigger-:t-1:');

      firstTrigger?.focus();
      setTimeout(() => {
        setDisplay('none');
      }, ANIMATION_TIME);
    }

    if (window.innerWidth < BREAKPOINTS.$MD) {
      document.body.style.overflow = sidebarOpen ? 'hidden' : 'auto';
    }
  }, [sidebarOpen]);

  return (
    <>
      <ContainerCSS
        hasOpen={sidebarOpen}
        animationTime={ANIMATION_TIME}
        role="menu"
        tabIndex={0}
        id="sidebar:p-1:"
        ref={sidebarReference}
        style={{ display }}
        onKeyDown={(e) => {
          if (e.key === 'Escape') {
            setSidebarOpen(false);
          }
          return sidebarOpen && focusTrapOnKeyboardEvent(e);
        }}
      >
        <SidebarTrigger
          aria-expanded={sidebarOpen}
          id="sidebar-trigger-:t-2:"
          onClick={() => setSidebarOpen(false)}
        />
        <Anchor secondary href="/about">
          {t('links.about')}
        </Anchor>
        <LineCSS />
        <section>
          <span className="filter-serie-text">
            {t('header.sidebar.sidebar-years-hs-text')}
          </span>
          <ul>
            <li>
              <Anchor secondary href="/courses/?school-year=first-year-hs">
                {t('form.select.options.first-year-hs')}
              </Anchor>
            </li>
            <li>
              <Anchor secondary href="/courses/?school-year=second-year-hs">
                {t('form.select.options.second-year-hs')}
              </Anchor>
            </li>
            <li>
              <Anchor secondary href="/courses/?school-year=third-year-hs">
                {t('form.select.options.third-year-hs')}
              </Anchor>
            </li>
          </ul>
        </section>
      </ContainerCSS>
      {sidebarOpen && (
        <div
          aria-hidden
          className="sidebar-overlay"
          tabIndex={-1}
          onClick={() => setSidebarOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 102,
          }}
        />
      )}
    </>
  );
};
