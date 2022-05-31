import { useTheme } from 'styled-components';

import { AccessibilityPopover } from '@components/AccessibilityPopover';
import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';

interface AccessibilityProps {
  handleFontSize: () => void;
  handleTheme: () => void;
}

export const Accessibility = ({
  handleFontSize,
  handleTheme,
}: AccessibilityProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const currentTheme = useTheme();
  const { t } = useTranslation();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? (
    <AccessibilityPopover
      theme={{
        colors: {
          accessibilityContentBackground: currentTheme.colors.gray400,
          accessibilityPanelBackground: currentTheme.colors.header,
          accessibilityPanelShadow: `rgba(${currentTheme.colors.shadow}, 0.2)`,
          accessibilityPanelText: currentTheme.colors.text,
          accessibilityPopoverIcon: currentTheme.colors.text,
          accessibilityPopoverPrimary: `rgb(${currentTheme.colors.primary})`,
          accessibilityTriggerShadow: `rgba(${currentTheme.colors.primary}, 0.2)`,
        },
      }}
      stylePanel={{
        border: '2px solid',
        backdropFilter: 'blur(10px)',
      }}
      styleTrigger={{
        color: currentTheme.colors.background,
      }}
      functions={{
        handleFontSize,
        handleTheme,
      }}
      i18n={{
        panelTitle: t('accessibility-popover.panel-title'),
        closeLabel: t('accessibility-popover.close-label'),
        handleFontSize: {
          description: t('accessibility-popover.handle-font-size.description'),
          label: t('accessibility-popover.handle-font-size.label'),
        },
        handleTheme: {
          description: t('accessibility-popover.handle-theme.description'),
          label: t('accessibility-popover.handle-theme.label'),
        },
      }}
    />
  ) : null;
};
