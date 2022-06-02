import { createContext, useEffect, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';

import { Accessibility } from '@components/Accessibility';
import { Header } from '@components/Header';
import { usePersistedStateCookie } from '@hooks/usePersistedStateCookie';

import { contrastTheme } from '@globalStyles/themes/contrast';
import { defaultTheme } from '@globalStyles/themes/default';

import { GlobalStyles } from '@globalStyles';

import { FooterCSS, MainCSS } from './styles';

interface LayoutContextValue {
  cTheme: 'contrast' | 'default';
  cFontSize: '18px' | '16px';
}

export const LayoutContext = createContext<LayoutContextValue>(
  {} as LayoutContextValue,
);

interface LayoutProviderProps {
  children: React.ReactNode;
}

export const LayoutProvider = ({ children }: LayoutProviderProps) => {
  const [fontSize, setFontSize] = usePersistedStateCookie<'16px' | '18px'>(
    'FONT_SIZE',
    '16px',
  );
  const [theme, setTheme] = usePersistedStateCookie<'default' | 'contrast'>(
    'THEME',
    'default',
  );

  useEffect(() => {
    document.querySelector('html')!.style.fontSize = fontSize;
  }, [fontSize]);

  const contextValue = useMemo(
    () => ({
      cTheme: theme,
      cFontSize: fontSize,
    }),
    [theme, fontSize],
  );
  return (
    <LayoutContext.Provider value={contextValue}>
      <ThemeProvider
        theme={theme === 'contrast' ? contrastTheme : defaultTheme}
      >
        <GlobalStyles.Reset />
        <GlobalStyles.Colors />
        <GlobalStyles.Fonts />
        <GlobalStyles.Shadows />
        <GlobalStyles.Others />

        <Accessibility
          handleFontSize={() =>
            setFontSize(fontSize === '16px' ? '18px' : '16px')
          }
          handleTheme={() =>
            setTheme(theme === 'default' ? 'contrast' : 'default')
          }
        />

        <Header />
        <MainCSS>{children}</MainCSS>
        <FooterCSS />
      </ThemeProvider>
    </LayoutContext.Provider>
  );
};
