import { HamburgerIcon } from '@stylesComponents/icons/HamburgerIcon';
import { ContainerCSS } from './styles';

interface AccessibilityTriggerProps
  extends React.HTMLAttributes<HTMLButtonElement> {}

export const SidebarTrigger = ({ ...rest }: AccessibilityTriggerProps) => {
  return (
    <ContainerCSS
      type="button"
      aria-controls="sidebar:p-1:"
      className="sidebar-trigger"
      tabIndex={0}
      {...rest}
    >
      <HamburgerIcon />
    </ContainerCSS>
  );
};
