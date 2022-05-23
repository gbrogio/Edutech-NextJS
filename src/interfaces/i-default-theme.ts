export interface IDefaultTheme {
  name: string;
  invertPercent: number;

  fonts: {
    primary: string;
    monospace: string;
  };
  colors: {
    line: string;
    card: string;
    text: string;
    error: string;
    header: string;
    gray400: string;
    gray500: string;
    success: string;
    shadows: string;
    default: string;
    primary: string;
    secondary: string;
    background: string;
  };
  shadowsDirection: {
    leftToRight: string;
    topToBottom: string;
  };
  mediaQueries: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}
