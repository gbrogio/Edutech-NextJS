import { IDefaultTheme } from '@interfaces/i-default-theme';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends IDefaultTheme {}
}
