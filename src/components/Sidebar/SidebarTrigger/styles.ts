import styled from 'styled-components';

export const ContainerCSS = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 2;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;

  &:hover,
  &:focus {
    background-color: rgba(var(--color-default), 0.2);
  }

  &:focus {
    outline: 3px solid rgb(var(--color-default));
  }
`;
