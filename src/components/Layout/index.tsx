import { MainCSS, FooterCSS } from './styles';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <header />
      <MainCSS>{children}</MainCSS>
      <FooterCSS />
    </>
  );
};
