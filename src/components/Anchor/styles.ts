import styled, { css } from 'styled-components';

interface ContainerCSSProps {
  active?: boolean;
  secondary?: boolean;
}

const activeCSS = css`
  background-color: rgba(var(--color-primary), 0.2);

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 4px;

    border-radius: 2px 2px 0 0;
    background-color: rgb(var(--color-primary));
  }

  &:hover {
    background-color: rgba(var(--color-primary), 0.3);
  }
`;

const secondaryActiveCSS = css`
  &::after {
    display: none;
  }
`;

const secondaryCSS = css`
  justify-content: flex-start;

  width: 97.5%;
  border-radius: 0 2rem 2rem 0; // height / 2
`;

export const ContainerCSS = styled.div<ContainerCSSProps>`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 2rem;
  height: 4rem;

  a {
    text-decoration: none;
    color: inherit;
    opacity: 0.9;

    font-weight: 500;
  }

  &:hover {
    background-color: rgba(var(--color-default), 0.08);
  }

  ${({ active }) => active && activeCSS}
  ${({ secondary }) => secondary && secondaryCSS}
  ${({ secondary, active }) =>
    secondary && active && activeCSS && secondaryActiveCSS}
`;
