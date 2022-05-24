import styled, { css } from 'styled-components';

const sharedStyles = css`
  width: 20px;
  height: 2px;
  left: 0;

  background-color: var(--color-text);
`;

export const HamburgerIcon = styled.span.attrs({
  ariaHidden: true,
  className: 'hamburger-icon'
})`
  position: relative;
  display: inline-block;
  ${sharedStyles}

  &:before {
    content: '';
    position: absolute;
    top: -5px;
    ${sharedStyles}
  }

  &:after {
    content: '';
    position: absolute;
    top: 5px;
    ${sharedStyles}
  }
`;
