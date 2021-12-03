import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: var(--BackgroundPages);
    color: var(--Text);
    height: 100%;
    font-weight: 500;
    overflow-x: hidden;
    font-family: 'Roboto', sans-serif;
  }

  .opacity {
    opacity: .7;
  }
  .padding {
    padding: 5rem;
  }
  strong{
    font-weight: 900;
  }
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
    transform: translateY(-5px);
  }
`;
