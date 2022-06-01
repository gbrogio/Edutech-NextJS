import Link from 'next/link';

import type {
  IAccessibilityOptions,
  IAccessibilityTexts,
  KeyedIAccessibilityOptionsInFunction,
} from '../types/i-accessibility-options';

import { PanelCSS, ContentCSS } from './styles';

interface AccessibilityPanelProps<U> {
  texts: IAccessibilityTexts<keyof U>;
  functions: KeyedIAccessibilityOptionsInFunction<keyof U>;
  style?: React.CSSProperties;
  hasI18n: boolean;
  options: U;
  closePanel: () => void;
}

export const AccessibilityPanel = <T extends IAccessibilityOptions>({
  texts,
  functions,
  style,
  hasI18n,
  options,
  closePanel,
}: AccessibilityPanelProps<T>) => {
  return (
    <PanelCSS
      id="accessibility-panel-:p-1:"
      aria-label={texts.panelTitle}
      style={style}
      tabIndex={0}
      ref={(ref) => {
        if (ref) {
          ref.focus();
        }
      }}
    >
      <header className="mb-6">
        <span className="title" lang={!hasI18n ? 'pt-br' : undefined}>
          {texts.panelTitle}
        </span>
        <button type="button" className="close" onClick={closePanel}>
          <span aria-label={texts.closeLabel}>&times;</span>
        </button>
      </header>
      <main className="content">
        {Object.entries(texts).map(([key, value]) => {
          if (typeof value !== 'string') {
            const { Icon } = options[key];
            return (
              <ContentCSS title={value.description} key={key}>
                <button
                  type="button"
                  onClick={() => {
                    functions[key]();
                    closePanel();
                  }}
                >
                  <Icon />
                  <span
                    className="content-text mt-6"
                    lang={!hasI18n ? 'pt-br' : undefined}
                  >
                    {value.label}
                  </span>
                </button>
              </ContentCSS>
            );
          }
          return null;
        })}
      </main>
      <footer className="mt-6">
        <p lang="pt-br">
          <span>Feito de &#128153; por </span>
          <Link href="https://github.com/gbrogio" passHref>
            <a href="replace" target="_blank" onClick={closePanel}>
              GBrogio
            </a>
          </Link>
        </p>
      </footer>
    </PanelCSS>
  );
};
