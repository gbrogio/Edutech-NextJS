import { css } from 'styled-components';

export const HomePageCSS = css`
  > section.home {
    display: flex;
    align-items: center;

    margin-bottom: 4rem !important;

    > div.content {
      margin-right: 6rem;
      ::after {
        margin-bottom: 0;
      }
    }
    > .image {
      transform: scale(0.8);
    }
  }
`;
export const CoursesPageCSS = css`
  > .courses-container {
    margin: 0 !important;

    > .courses-container-wrapper {
      margin-top: 4rem;

      > ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
    }
  }
`;
