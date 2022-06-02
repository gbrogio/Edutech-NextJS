import styled from 'styled-components';

import { MediaQueryStyles } from './media-query-styles';
import { HomePageCSS, CoursesPageCSS } from './pages-styles';

export const MainCSS = styled.main`
  margin-top: 4rem;
  margin-bottom: 4rem;
  min-height: calc(100vh - 4rem - 4rem); // 100vh - margin-top - margin-bottom

  > section {
    margin: 0 10vw !important;
  }

  ${HomePageCSS}
  ${CoursesPageCSS}

  ${MediaQueryStyles}
`;
export const FooterCSS = styled.footer`
  text-align: center;

  padding: 1rem 0;

  color: #fff;
  background-color: ${({ theme }) =>
    theme.name === 'contrast'
      ? 'var(--color-header)'
      : 'rgb(var(--color-secondary))'};
`;
