import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    font-size: 16px;
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
  .inLine{
    display: inline;
  }
  .invisible {
    position: fixed;
    left: -99999999999rem;
    overflow: hidden;
  }
  strong{
    font-weight: 900;
  }
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
    transform: translateY(-5px);
  }

  .EasterEgg {
    z-index: -1;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    opacity: 0;
    transition: .2s ease-in-out;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
