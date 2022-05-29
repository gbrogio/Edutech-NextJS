import styled from 'styled-components';

import { ACCESSIBILITY_BREAKPOINTS } from '../utils/accessibility-breakpoints';

export const PanelCSS = styled.div`
  overflow: hidden auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  max-height: 400px;
  border-radius: 1rem;
  margin-bottom: 2rem;
  padding: 1rem;

  box-shadow: 0 1rem 0.5rem var(--accessibility-panel-color-shadow);
  background-color: var(--accessibility-panel-color-background);
  color: var(--accessibility-panel-color-text);

  > main.content {
    display: flex;
  }
  > footer {
    p > span {
      opacity: 0.6;
    }
    a {
      padding: 0 0.2rem;
      border: 1px solid transparent;

      &:hover,
      &:focus {
        color: var(--accessibility-popover-color-primary);
      }

      &:focus {
        outline: none;
        text-decoration: none;

        border-color: var(--accessibility-popover-color-primary);
      }
    }
  }

  @media ${ACCESSIBILITY_BREAKPOINTS.md} {
    width: calc(100% - 1rem); // 100% - left padding
  }
  @media ${ACCESSIBILITY_BREAKPOINTS.sm} {
    width: calc(100% - 0.5rem); // 100% - left padding

    > main.content {
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;

      > .content-item {
        width: 100%;
        max-width: 100%;
      }
    }
  }
`;
export const ContentCSS = styled.div.attrs({
  className: 'content-item',
})`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;

  max-width: 15rem;
  min-width: 10rem;
  margin: 0.5rem;
  border-radius: 0.5rem;

  background-color: var(--accessibility-content-color-background);

  > button {
    display: flex;
    align-items: center;
    flex-direction: column;

    width: 100%;
    height: 100%;
    padding: 2.25rem 1rem;
    border-radius: inherit;

    transition: all 0.15s linear;
    border: 3px solid transparent;

    &:hover,
    &:focus {
      border-color: var(--accessibility-popover-color-primary) !important;
    }
  }
`;
