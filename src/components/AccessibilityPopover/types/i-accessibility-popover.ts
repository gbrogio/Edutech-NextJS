import type {
  IAccessibilityTexts,
  KeyedIAccessibilityOptionsInFunction,
} from './i-accessibility-options';
import type { IAccessibilityTheme } from './i-accessibility-theme';

export type IAccessibilityPopoverProps<T> = {
  i18n?: IAccessibilityTexts<keyof T>;
  theme?: IAccessibilityTheme;
  functions: KeyedIAccessibilityOptionsInFunction<keyof T>;
  className?: string;
  style?: React.CSSProperties;
  styleTrigger?: React.CSSProperties;
  stylePanel?: React.CSSProperties;
  options?: T;
};
