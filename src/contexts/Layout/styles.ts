import styled from 'styled-components';

export const MainCSS = styled.main`
  margin-top: 4rem;
  margin-bottom: 4rem;

  > section.home {
    display: flex;
    align-items: center;

    margin-bottom: 4rem !important;

    > div.content {
      margin-right: 6rem;
      ::after {
        margin-bottom: 0;
      }
    }
    > .image {
      transform: scale(0.8);
    }
  }
  > section {
    margin: 0 10vw !important;
  }

  > .courses-container {
    margin: 0 !important;

    > .courses-container-wrapper {
      margin-top: 4rem;

      > ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
    }
  }

  @media ${(props) => props.theme.mediaQueries.lg} {
    text-align: center;
    margin-top: 12rem;

    > section {
      h1,
      h2 {
        width: fit-content;
        margin: 0 auto;
      }

      h1 {
        transform: translateX(0.5rem);
      }
      h2 {
        margin-top: 2rem;
      }
      .edutech-studied-path {
        margin: 0;
      }
    }
    > section,
    form > .wrapper {
      margin: 0 2.5rem !important;
    }
    > section.home {
      flex-direction: column;

      > div.content {
        margin-right: 0;
        margin-bottom: 4rem;
      }
    }
  }
  @media ${(props) => props.theme.mediaQueries.md} {
    > .courses-container > .courses-container-wrapper > ul > li {
      width: 100%;
    }
  }
  @media ${(props) => props.theme.mediaQueries.sm} {
    > section,
    form > .wrapper {
      margin: 0 0.5rem !important;
    }
    > section.home {
      > .image {
        width: 100%;
      }
    }
  }
  @media ${(props) => props.theme.mediaQueries.xs} {
    text-align: justify;

    h1,
    h2 {
      text-align: center;
    }
    h1 {
      margin-left: 0.5rem !important;
    }
  }
`;
export const FooterCSS = styled.footer``;
