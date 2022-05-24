import styled from 'styled-components';

export const LineCSS = styled.span.attrs({
  role: 'separator',
})`
  display: flex;

  width: 100%;
  height: 2px;
  margin: 2rem 0;

  background-color: var(--color-line);
`;

export const SubLineCSS = styled.span.attrs({
  role: 'separator',
})`
  display: flex;

  width: calc(100% - 8rem); // 100% - 8rem (4rem on each side)
  height: 2px;
  margin: 1rem 50%;
  transform: translateX(-50%);

  background-color: var(--color-line);
`;
