import styled from 'styled-components';

export const TopContentCSS = styled.div.attrs({
  className: 'top-content content',
})`
  .left-content {
    display: flex;
    align-items: center;

    width: 12rem; // 12rem - margin-left

    > .site-title {
      font-family: var(--font-monospace);

      margin-left: 1rem;
      line-height: 1.2rem;
      font-size: 1rem;

      p:first-child {
        font-size: 1.1rem;
      }
      p:last-child {
        opacity: 0.7;
      }
    }
  }
  .right-content {
    display: flex;
    align-items: center;
    justify-content: end;

    width: 10rem; // 12rem - margin-right
    margin-right: 2rem;

    > .social-link {
      display: flex;
      align-items: center;

      width: 8rem;
      opacity: 0.7;

      transition: 0.2s ease-in-out;

      &:hover {
        transform: scale(1.1);
        opacity: 1;
      }
      &:active {
        transform: scale(0.9);
      }
    }
  }
`;
