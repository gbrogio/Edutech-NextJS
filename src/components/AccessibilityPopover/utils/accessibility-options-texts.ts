import type { IAccessibilityTexts } from '../types/i-accessibility-options';

import { ACCESSIBILITY_OPTIONS } from './accessibility-options';

export const ACCESSIBILITY_OPTIONS_TEXTS: IAccessibilityTexts<
  keyof typeof ACCESSIBILITY_OPTIONS
> = {
  panelTitle: 'Opções de Acessibilidade',
  closeLabel: 'Fechar Opções de Acessibilidade',
  handleTheme: {
    label: 'Trocar tema',
    description: 'Troca o tema da pagina',
  },
  handleFontSize: {
    label: 'Trocar tamanho da fonte',
    description: 'Troca o tamanho da fonte da pagina',
  },
};
