import { FontSizeIcon } from '../styles/components/icons/FontSizeIcon';
import { ThemeIcon } from '../styles/components/icons/ThemeIcon';

/* docs
  MAKE ACCESSIBILITY_OPTIONS LIKE: {
    [key: string]: {
      Icon: React.ReactNode;
    };
  }
  ONLY!
*/

export const ACCESSIBILITY_OPTIONS = {
  handleTheme: {
    Icon: () => <ThemeIcon />,
  },
  handleFontSize: {
    Icon: () => <FontSizeIcon />,
  },
};
