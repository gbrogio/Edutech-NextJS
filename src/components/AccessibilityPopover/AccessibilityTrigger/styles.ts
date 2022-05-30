import styled from 'styled-components';
import { iconSize } from '../styles/components/icons/SharedIconStyles';

export const ContainerCSS = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
  border-radius: 0.25rem;

  transition: border-radius 0.5s ease-in-out;

  box-shadow: 0 0.25rem 2rem var(--accessibility-trigger-color-shadow);

  color: var(--accessibility-popover-color-text);
  background-color: var(--accessibility-popover-color-primary);

  .trigger-text {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    transition: width, max-width 0.5s ease-in-out 0.5s;

    max-width: 0;

    color: inherit;
  }
  .icon {
    color: inherit;
  }
  &:hover,
  &:focus {
    .trigger-text {
      max-width: 100vw;
      width: ${`calc(100% - ${iconSize})`};
    }
  }
  &:focus {
    box-shadow: 0 0 0 4px var(--accessibility-panel-color-background),
      0 0 0 8px var(--accessibility-popover-color-primary);
  }
`;
