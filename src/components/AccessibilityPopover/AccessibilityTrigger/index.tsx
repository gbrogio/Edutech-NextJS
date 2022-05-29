import { ContainerCSS } from './styles';
import { HumanIcon } from '../styles/components/icons/HumanIcon';

interface AccessibilityTriggerProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  triggerLabel: string;
  hasI18n: boolean;
}

export const AccessibilityTrigger = ({
  triggerLabel,
  hasI18n,
  ...rest
}: AccessibilityTriggerProps) => (
  <ContainerCSS
    type="button"
    aria-controls="accessibility-panel-:p-1:"
    className="accessibility-trigger"
    tabIndex={0}
    {...rest}
  >
    <HumanIcon className="icon" />

    <span className="trigger-text" lang={!hasI18n ? 'pt-br' : undefined}>
      <span className="pl-2" />
      {triggerLabel}
    </span>
  </ContainerCSS>
);
