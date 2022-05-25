import { CONTRAST_THEME } from '@globalStyles/tokens';
import { IDefaultTheme } from '@interfaces/i-default-theme';
import { sharedTheme } from './shared-themes';

export const contrastTheme: IDefaultTheme = {
  name: 'default',
  invertPercent: 0,

  colors: {
    line: CONTRAST_THEME.$LINE,
    card: CONTRAST_THEME.$CARD,
    text: CONTRAST_THEME.$TEXT,
    error: CONTRAST_THEME.$ERROR,
    header: CONTRAST_THEME.$HEADER,
    shadow: CONTRAST_THEME.$SHADOW,
    gray400: CONTRAST_THEME.$GRAY400,
    gray500: CONTRAST_THEME.$GRAY500,
    success: CONTRAST_THEME.$SUCCESS,
    default: CONTRAST_THEME.$DEFAULT,
    primary: CONTRAST_THEME.$PRIMARY,
    secondary: CONTRAST_THEME.$SECONDARY,
    background: CONTRAST_THEME.$BACKGROUND,
  },
  shadowsDirection: {
    topToBottom: `0 0 20px 5px rgba(${CONTRAST_THEME.$SHADOW}, 0.1)`,
    leftToRight: `0 4.5rem 1.5rem 3px rgba(${CONTRAST_THEME.$SHADOW}, 0.1)`,
  },
  ...sharedTheme,
};
