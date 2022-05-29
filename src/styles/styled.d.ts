import type { ITheme } from '@interfaces/i-theme';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
