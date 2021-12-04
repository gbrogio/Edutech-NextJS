import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,

    colors: {
      BackgroundPages: string,
      BackgroundBtn: string,
      Text: string,
      Hover: string,
      Shadow: string,
      Green: string;
      Orange: string;
      Blue: string;
      Gray: string;
      Stroke: string;
      BackgroundComponents: string;
    }
  }
}
