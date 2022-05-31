export interface ISharedTheme {
  fonts: {
    primary: string;
    monospace: string;
  };
  mediaQueries: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

export interface ITheme extends ISharedTheme {
  name: 'default' | 'contrast';
  invertPercent: number;

  colors: {
    line: string;
    card: string;
    text: string;
    error: string;
    header: string;
    shadow: string;
    gray400: string;
    gray500: string;
    success: string;
    default: string;
    primary: string;
    secondary: string;
    background: string;
  };
  shadowsDirection: {
    leftToRight: string;
    topToBottom: string;
  };
}
