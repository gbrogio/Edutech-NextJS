import styled from 'styled-components';

import { MediaQueryStyles } from './media-query-styles';
import { HomePageCSS, CoursesPageCSS } from './pages-styles';

export const MainCSS = styled.main`
  margin-top: 4rem;
  margin-bottom: 4rem;

  > section {
    margin: 0 10vw !important;
  }

  ${HomePageCSS}
  ${CoursesPageCSS}

  ${MediaQueryStyles}
`;
export const FooterCSS = styled.footer``;
