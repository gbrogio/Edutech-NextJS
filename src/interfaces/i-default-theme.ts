export interface IDefaultTheme {
  title: string;

  invert: number;
  fonts: {
    monospace: string;
  };
  colors: {
    default: string;
    background: string;
    secondary: string;
    primary: string;
    success: string;
    header: string;
    error: string;
    text: string;
    line: string;
    loading400: string;
    loading500: string;
    card: string;
  };
  shadows: {
    color: string;
    bottom: string;
    right: string;
  };
  mediaQueries: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}
