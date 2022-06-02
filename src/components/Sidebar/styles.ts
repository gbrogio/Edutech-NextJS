import styled, { css } from 'styled-components';

interface ContainerCSSProps {
  hasOpen: boolean;
  animationTime: number;
}

const hasCloseCSS = css`
  animation: slide_out 0.2s ease forwards;
`;

export const ContainerCSS = styled.div<ContainerCSSProps>`
  overflow: hidden scroll;
  position: fixed;
  display: none;
  flex-direction: column;

  top: 0;
  left: 0;
  width: 320px;
  height: 100%;
  z-index: 103;
  padding: 2rem 0;
  transform: translateX(-100%);

  animation: slide_in ${({ animationTime }) => animationTime}ms ease forwards;

  backdrop-filter: blur(10px);
  background-color: var(--color-header);

  .sidebar-trigger {
    position: absolute;

    top: 1rem;
    right: 1rem;
  }
  .filter-serie-text {
    margin: 0 1rem;
    opacity: 0.6;
  }
  ul {
    margin-top: 1rem;
  }

  ${({ hasOpen }) => !hasOpen && hasCloseCSS}

  @keyframes slide_in {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
  @keyframes slide_out {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;
