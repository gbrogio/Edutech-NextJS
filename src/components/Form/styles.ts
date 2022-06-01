import styled from 'styled-components';

export const FormCSS = styled.form`
  color: var(--text);
  width: 100%;
  margin-top: 8rem;
  .wrapper {
    margin: 0 12rem;

    display: flex;
    align-items: center;

    > div {
      width: 100%;

      > div {
        fieldset {
          border: 1px solid rgba(var(--color-default), 0.25);
        }
        :hover {
          fieldset {
            border: 1px solid rgb(var(--color-default));
          }
        }
        &.Mui-focused {
          fieldset {
            border: 1px solid rgb(var(--color-secondary));
          }
        }
      }
    }
    > div:first-child {
      width: min-content;
      margin-right: 2rem;
    }
  }

  @media ${(props) => props.theme.mediaQueries.md} {
    margin-top: 0;
    margin-bottom: 4rem;

    .wrapper {
      flex-direction: column;

      > div:first-child {
        width: 100%;
        margin-right: 0;
      }
    }
  }
`;
