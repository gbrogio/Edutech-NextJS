import styled from 'styled-components';

import { ACCESSIBILITY_BREAKPOINTS } from '../../utils/accessibility-breakpoints';

import type { IAccessibilityTheme } from '../../types/i-accessibility-theme';

interface RootCSSProps {
  accessibilityTheme: IAccessibilityTheme;
}

export const RootCSS = styled.div<RootCSSProps>`
  --accessibility-panel-color-background: ${({ accessibilityTheme }) =>
    accessibilityTheme.colors.accessibilityPanelBackground};
  --accessibility-panel-color-shadow: ${({ accessibilityTheme }) =>
    accessibilityTheme.colors.accessibilityPanelShadow};
  --accessibility-panel-color-text: ${({ accessibilityTheme }) =>
    accessibilityTheme.colors.accessibilityPanelText};
  --accessibility-content-color-background: ${({ accessibilityTheme }) =>
    accessibilityTheme.colors.accessibilityContentBackground};
  --accessibility-popover-color-primary: ${({ accessibilityTheme }) =>
    accessibilityTheme.colors.accessibilityPopoverPrimary};
  --accessibility-popover-color-icon: ${({ accessibilityTheme }) =>
    accessibilityTheme.colors.accessibilityPopoverIcon};
  --accessibility-trigger-color-shadow: ${({ accessibilityTheme }) =>
    accessibilityTheme.colors.accessibilityTriggerShadow};

  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  z-index: 100;
  bottom: 2rem;
  right: 2rem;

  .pl-2 {
    padding-left: 0.5rem;
  }
  .mt-6 {
    margin-top: 1.5rem;
  }
  .mb-6 {
    margin-bottom: 1.5rem;
  }
  .title {
    font-size: 1.5rem;
  }
  .close {
    position: absolute;
    top: 0.75rem;
    right: 0.5rem;
    font-size: 2rem;
    padding: 0 0.6rem;

    &:hover,
    &:focus {
      color: var(--accessibility-popover-color-primary);
    }
    &:focus {
      border-radius: 0.2rem;
      outline: black solid 3px;
    }
  }

  button {
    cursor: pointer;

    text-transform: none;
    font-family: inherit;
    line-height: inherit;
    color: inherit;

    font-size: 100%;
  }
  a {
    color: inherit;
    text-underline-offset: 4px;
  }

  @media ${ACCESSIBILITY_BREAKPOINTS.md} {
    width: calc(100% - 1rem); // 100& - right
    bottom: 1rem;
    right: 1rem;
  }
`;
