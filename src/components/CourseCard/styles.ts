import styled, { css } from 'styled-components';

interface CourseCardProps {
  backgroundColor: string | undefined;
  isLoading: boolean;
}

export const ContainerCSS = styled.div<CourseCardProps>`
  cursor: pointer;
  text-align: left !important;
  display: flex;

  width: 26rem;
  height: 12rem;
  margin: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;

  transition: 0.2s ease-in-out;
  animation: shimmer 2.5s infinite;

  box-shadow: 0 0 0.5rem 0.05rem rgba(var(--color-shadow), 0.2);
  background: linear-gradient(
    -30deg,
    var(--color-gray-400) 0%,
    var(--color-gray-400) 40%,
    var(--color-gray-500) 50%,
    var(--color-gray-500) 55%,
    var(--color-gray-400) 65%,
    var(--color-gray-400) 100%
  );
  background-size: 400%;

  .course-text-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin: 0.5rem 0;

    p {
      display: flex;
      flex-direction: column;
    }
  }
  .course-image-wrapper {
    align-self: flex-end;
    text-align: right;

    width: 65%;
  }

  :hover {
    transform: scale(1.05);
    box-shadow: 0.5rem 0.5rem 1rem rgba(var(--color-shadow), 0.1);
  }

  ${(props) =>
    !props.isLoading &&
    css`
      animation: none;
    `}
  ${(props) =>
    props.backgroundColor &&
    css`
      background: linear-gradient(
        300.31deg,
        ${props.backgroundColor} 39.38%,
        var(--color-card) 39.38%
      );

      @media ${props.theme.mediaQueries.md} {
        .course-image-wrapper {
          background-color: ${props.backgroundColor};
        }
      }
    `}
  ${(props) => css`
    @media ${props.theme.mediaQueries.md} {
      flex-direction: column;

      margin: 1rem 0.5rem;
      width: auto;
      padding: 0;
      height: auto;

      background: var(--color-card);

      .course-text-wrapper {
        padding: 1rem;
      }
      .course-image-wrapper {
        position: relative;
        border-radius: inherit;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        width: 100%;
        height: 3.5rem;
        > span {
          transform: translate(-1rem, -45%);
        }
      }
      :hover,
      :focus {
        transform: scale(0.95);
      }
    }
  `}

  @keyframes shimmer {
    from {
      background-position: 100%;
    }
    to {
      background-position: 0;
    }
  }
`;
