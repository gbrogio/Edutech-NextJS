export type KeyedIAccessibilityOptionsInFunction<
  T extends string | number | symbol,
> = {
  [key in T]: () => void;
};
export type KeyedIAccessibilityTexts<T extends string | number | symbol> = {
  [key in T]: {
    label: string;
    description: string;
  };
};
export type IAccessibilityOptions = {
  [key: string]: {
    Icon: () => JSX.Element;
  };
};
export type IAccessibilityTexts<T extends string | number | symbol> =
  KeyedIAccessibilityTexts<T> & {
    panelTitle: string;
    closeLabel: string;
  };
