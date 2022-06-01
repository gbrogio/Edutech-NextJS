import styled from 'styled-components';

export const ContainerCSS = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  backdrop-filter: blur(10px);

  background-color: var(--color-header);
  box-shadow: var(--shadow-top-to-bottom);

  .content {
    width: 100%;
    height: 4rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;

    > .middle-content > nav > ul {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  > .bottom-content {
    display: none;
  }

  @media ${(props) => props.theme.mediaQueries.lg} {
    height: 8rem;

    > .top-content > .middle-content {
      display: none;
    }
    > .top-content {
      > .right-content {
        margin-right: 0.5rem;
      }
      > .left-content {
        margin-right: 2rem;
      }
    }
    > .bottom-content {
      display: block;
    }
  }
  @media ${(props) => props.theme.mediaQueries.sm} {
    > .top-content,
    > .bottom-content {
      overflow: auto hidden;
      white-space: nowrap;
      display: flex;
    }

    > .top-content:first-child {
      margin-right: 1rem;
    }
    > .top-content:last-child {
      margin-left: 1rem;
    }
  }
`;

export { TopContentCSS } from './top-content-styles';
export { BottomContentCSS } from './bottom-content-styles';
