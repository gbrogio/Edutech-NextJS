import { createGlobalStyle } from 'styled-components';

export const CardCp = createGlobalStyle`
  div.CardCp {
    cursor: pointer;
    position: relative;
    width: auto;
    background: linear-gradient(300.31deg, rgb(var(--Stroke)) 39.37%, rgb(var(--BackgroundComponents)) 39.38%);
    filter: drop-shadow(0px 4px 10px var(--Shadow));

    border-radius: 10px;
    max-width: 400px;
    min-width: 260px;
    height: auto;
    padding: 1.5rem 10rem 0 2rem;
    margin: 1rem;
    transition: .2s ease-in-out;

    p {
      line-height: 1.5rem;
    }
    .bold {
      font-weight: 900;
      p{
        font-weight: 400;
      }
    }
    .logoImg {
      position: absolute;
      bottom: 1rem;
      right: 2rem;

      > img {
        width: 60px;
      }
    }

    :hover, :focus {
      transform: scale(1.05);
    }

    @media screen and (max-width: 464px) {
      background: linear-gradient(0deg, rgb(var(--Stroke)) 21%, rgb(var(--BackgroundComponents)) 21%);

      height: 17rem;
      padding: 1.5rem 2rem 0 2rem;
      .descText {
        display: flex;
        flex-direction: column;
      }
    }
    @media screen and (max-width: 321px) {
      padding: 1.5rem 1rem 0 1rem;
      margin: .5rem;
      max-width: 300px;
    }
  }
`;
