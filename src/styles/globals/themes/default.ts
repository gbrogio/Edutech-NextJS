import type { ITheme } from '@interfaces/i-theme';

import { DEFAULT_THEME } from '@globalStyles/tokens';
import { sharedTheme } from './shared-themes';

export const defaultTheme: ITheme = {
  name: 'default',
  invertPercent: 0,

  colors: {
    line: DEFAULT_THEME.$LINE,
    card: DEFAULT_THEME.$CARD,
    text: DEFAULT_THEME.$TEXT,
    error: DEFAULT_THEME.$ERROR,
    header: DEFAULT_THEME.$HEADER,
    shadow: DEFAULT_THEME.$SHADOW,
    gray400: DEFAULT_THEME.$GRAY400,
    gray500: DEFAULT_THEME.$GRAY500,
    success: DEFAULT_THEME.$SUCCESS,
    default: DEFAULT_THEME.$DEFAULT,
    primary: DEFAULT_THEME.$PRIMARY,
    secondary: DEFAULT_THEME.$SECONDARY,
    background: DEFAULT_THEME.$BACKGROUND,
  },
  shadowsDirection: {
    topToBottom: `0 0 20px 5px rgba(${DEFAULT_THEME.$SHADOW}, 0.1)`,
    leftToRight: `0 4.5rem 1.5rem 3px rgba(${DEFAULT_THEME.$SHADOW}, 0.1)`,
  },
  ...sharedTheme,
};
