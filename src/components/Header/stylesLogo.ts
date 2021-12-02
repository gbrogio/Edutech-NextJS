import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: rgb(var(--Gray));

  opacity: .8;
  transition: .2s ease-in-out;

  :hover {
    opacity: 1;
  }

  .logo {
    display: inherit;
    align-items: inherit;
    justify-content: center;
    border: 4px solid rgb(var(--Gray));

    width: 4rem;
    height: 4rem;
    border-radius: 50%;

    > h1 {
      color: inherit;

      font-size: 3rem;
      transform: translateY(0);
    }
  }

  .slogan {
    text-align: center;

    margin-left: .5rem;

    h2 {
      font-style: italic;

      font-size: 2.375rem;
      font-weight: 900;
      letter-spacing: 0.1rem;
    }

    p {
      font-size: 1.25rem;
      font-weight: 500;
      letter-spacing: 0.05rem;
      line-height: 1rem;
      opacity: .8;
    }
  }
`;
