import { FONTS, BREAKPOINTS } from '@globalStyles/tokens';
import { ISharedTheme } from "@interfaces/i-default-theme";

export const sharedTheme: ISharedTheme = {
  fonts: {
    monospace: FONTS.$MONOSPACE,
    primary: FONTS.$PRIMARY
  },
  mediaQueries: {
    xs: `(max-width: ${BREAKPOINTS.$XS}px)`,
    sm: `(max-width: ${BREAKPOINTS.$SM}px)`,
    md: `(max-width: ${BREAKPOINTS.$MD}px)`,
    lg: `(max-width: ${BREAKPOINTS.$LG}px)`,
    xl: `(max-width: ${BREAKPOINTS.$XL}px)`
  }
}
