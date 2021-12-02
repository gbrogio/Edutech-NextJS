import {createGlobalStyle} from 'styled-components';

export const CardCp = createGlobalStyle`
  div.CardCp {
    cursor: pointer;
    position: relative;
    background: linear-gradient(300.31deg, black 39.37%, rgb(var(--BackgroundComponents)) 39.38%);
    filter: drop-shadow(0px 4px 10px var(--Shadow));

    border-radius: 10px;
    width: 362px;
    height: 200px;
    padding: 1.5rem 30% 0 2rem;
    margin: 1.5rem;
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
    .logoCourse {
      position: absolute;
      bottom: 1rem;
      right: 2rem;

      > img {
        width: 60px;
      }
    }

    :hover {
      transform: scale(1.05);
    }
  }
`;

