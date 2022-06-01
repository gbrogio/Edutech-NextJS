import { useEffect, useState } from 'react';

import type { IAccessibilityPopoverProps } from './types/i-accessibility-popover';
import type { IAccessibilityOptions } from './types/i-accessibility-options';

import { AccessibilityTrigger } from './AccessibilityTrigger';

import { ACCESSIBILITY_OPTIONS } from './utils/accessibility-options';
import { ACCESSIBILITY_OPTIONS_TEXTS } from './utils/accessibility-options-texts';
import { focusTrapOnKeyboardEvent } from './services/focus-trap-on-keyboard-event';

import { AccessibilityTheme } from './styles/globals/theme/accessibility-theme';
import { RootCSS } from './styles/globals';
import { AccessibilityPanel } from './AccessibilityPanel';

export const AccessibilityPopover = <
  T extends IAccessibilityOptions | typeof ACCESSIBILITY_OPTIONS,
>({
  i18n,
  theme,
  options,
  functions,
  className,
  style,
  styleTrigger,
  stylePanel,
}: IAccessibilityPopoverProps<T>) => {
  const texts = i18n || ACCESSIBILITY_OPTIONS_TEXTS;
  const [panelOpen, setPanelOpen] = useState(false);
  const [hasI18n] = useState(i18n !== undefined);

  useEffect(() => {
    if (!panelOpen) {
      (
        document.getElementById(
          'accessibility-trigger-:t-1:',
        ) as HTMLButtonElement
      )?.focus();
    }
  }, [panelOpen]);

  return (
    <>
      <RootCSS
        className={className}
        accessibilityTheme={theme || AccessibilityTheme}
        style={style}
        onKeyDown={(e) => {
          if (e.key === 'Escape') {
            setPanelOpen(false);
          }
          return panelOpen && focusTrapOnKeyboardEvent(e);
        }}
      >
        {panelOpen && (
          <AccessibilityPanel
            texts={texts}
            functions={functions}
            style={stylePanel}
            hasI18n={hasI18n}
            options={options || ACCESSIBILITY_OPTIONS}
            closePanel={() => setPanelOpen(false)}
          />
        )}
        <AccessibilityTrigger
          triggerLabel={texts.panelTitle}
          aria-expanded={panelOpen}
          style={styleTrigger}
          hasI18n={hasI18n}
          id="accessibility-trigger-:t-1:"
          onClick={() => setPanelOpen(!panelOpen)}
        />
      </RootCSS>
      {panelOpen && (
        <div
          aria-hidden
          className="accessibility-popover-overlay"
          tabIndex={-1}
          onClick={() => setPanelOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 99,
          }}
        />
      )}
    </>
  );
};
