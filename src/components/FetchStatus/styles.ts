import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  flex: 1;
  height: 100%;

  h1 {
    color: inherit;

    margin: 2rem;
    font-size: 3rem;
  }

  @media ${(props) => props.theme.mediaQueries.sm} {
    h1 {
      font-size: 1.5rem;
      margin: 0 !important;
    }
  }
`;
