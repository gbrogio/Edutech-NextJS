import styled from 'styled-components';

export const Main = styled.main`
  overflow: hidden;
  z-index: 5;
  padding: 0 10rem 0 10rem;
  display: flex;
  flex-direction: column;
  height: 100%;

  /* Home - seções */
  .aboutEdutech {
    display: flex;
    align-items: center;

    img {
      margin-left: 10%
    }
    margin-top: 130px;

    @media screen and (max-width: 1060px) {
      flex-direction: column;
      text-align: center;

      img {
        margin-left: 0;
      }
      div {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
    @media screen and (max-width: 940px) {
      margin-top: calc(130px + 2rem);
    }
  }
  .trails {
  }
  .alura {
    @media screen and (max-width: 1060px) {
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
    }
  }

  /* Courses - seções */
  .courses {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: calc(130px + 3.5rem);

    > div#courses {
      width: calc(100vw - .5rem);
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    @media screen and (max-width: 940px) {
      margin-top: calc(130px + 6.5rem);
    }
  }

  /* About - seções*/
  .titleRead {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: calc(130px + 3.5rem);

    > div.Read {
      position: absolute;

      top: 130px;
      left: 10rem;
      a {
        display: flex;
        align-items: center;
        color: var(--Text);
      }

      @media screen and (max-width: 830px) {
        left: 2rem;
      }
      @media screen and (max-width: 365px) {
        left: .5rem;
      }
    }
    > div {
      margin-top: 1rem;
    }
    @media screen and (max-width: 375px) {
      flex-direction: column;

      > div {
        > h1 {
          white-space: normal!important;
          display: inline;
          ::before {
            display: inline-block;
            transform: translateY(4px);
          }
        }
      }
    }
  }

  div.badge {
    text-align: center;
    img {
      margin: 0 .5rem;
    }
    @media screen and (max-width: 365px) {
      text-align: justify;
      transform: translateX(-.8rem)
    }
  }
  .tableContainer {
    align-items: flex-start;
  }
  .featuresRead {
    li {
      list-style: none;
    }
  }
  .mapRead {
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap');
    pre {
      font-family: 'JetBrains Mono', sans-serif;
    }
  }
  .contactRead {
    > p.authorInfo {
      display: flex;

      > :last-child {
        background: rgb(var(--Blue), .8);
        width: 40px;
        height: 40px;
        border-radius: 50%;
        align-items: center;
        display: flex;
        justify-content: center;
        transform: translateX(-2rem);
        border: 2px solid rgb(var(--Blue), .7);

        :hover {
          zoom: 1.1;
        }
      }
    }
  }
  .table {
    margin: 0 2rem;
    opacity: .8;
  }

  .line {
    margin: 2rem 0;
    display: flex;
    justify-content: center;
    background-color: rgb(var(--Stroke));

    opacity: .7;
    height: 1px;
  }

  @media screen and (max-width: 830px) {
    padding: 0 2rem;

    @media screen and (max-width: 365px) {
      p.paragraph {
        text-align: justify;
      }
      padding: 0 .5rem;
      .aboutEdutech {
        img {
          width: 90%;
        }
      }
      .line {
        width: calc(99%);
      }
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  background-color: rgb(var(--Green));
  margin-top: 5rem;
  height: 45px;
`;
