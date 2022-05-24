import { createGlobalStyle } from "styled-components";

const Colors = createGlobalStyle`
  :root {
    --color-primary: ${(props) => props.theme.colors.primary};
    --color-secondary: ${(props) => props.theme.colors.secondary};
    --color-success: ${(props) => props.theme.colors.success};
    --color-error: ${(props) => props.theme.colors.error};
    --color-gray-400: ${(props) => props.theme.colors.gray400};
    --color-gray-500: ${(props) => props.theme.colors.gray500};
    --color-line: ${(props) => props.theme.colors.line};
    --color-card: ${(props) => props.theme.colors.card};
    --color-text: ${(props) => props.theme.colors.text};
    --color-shadow: ${(props) => props.theme.colors.shadow};
    --color-background: ${(props) => props.theme.colors.background};
    --color-header: ${(props) => props.theme.colors.header};
    --color-default: ${(props) => props.theme.colors.default};
    --color-primary: ${(props) => props.theme.colors.primary};
    --color-secondary: ${(props) => props.theme.colors.secondary};
    --color-success: ${(props) => props.theme.colors.success};
    --color-error: ${(props) => props.theme.colors.error};
  }

`;
const Shadows = createGlobalStyle`
  :root {
    --shadow-left-to-right: ${(props) => props.theme.shadowsDirection.leftToRight};
    --shadow-top-to-bottom: ${(props) => props.theme.shadowsDirection.topToBottom};
  }
`;
const Fonts = createGlobalStyle`
  :root {
    --font-primary: ${(props) => props.theme.fonts.primary};
    --font-monospace: ${(props) => props.theme.fonts.monospace};
  }
`;
const Others = createGlobalStyle`
  :root {
    --invert-percent: ${(props) => props.theme.invertPercent};
  }
`;

const Reset = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html { font-size: 16px; }

  body {
    overflow: hidden scroll;

    font-family: var(--font-primary);
    color: var(--color-text);
  }

  ul li {
    list-style: none;
  }
  a {
    color: rgb(var(--color-secondary));
  }
  button {
    cursor: pointer;
    border: none;
    background: none;

    color: var(--color-text);

    &:focus {
      outline: none;
    }
  }

  span.line {
    display: block;
    width: 100%;
    height: 2px;
    background: rgba(var(--color-default), 0.2);
  }
`;

const GlobalStyles = {
  Colors,
  Shadows,
  Fonts,
  Others,
  Reset,
};

export default GlobalStyles;
