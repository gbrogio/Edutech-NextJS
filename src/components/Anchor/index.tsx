import Link from 'next/link';
import { useRouter } from 'next/router';
import { ContainerCSS } from './styles';

interface AnchorProps {
  children: React.ReactNode;
  href: string;
  secondary?: boolean;
}

export const Anchor = ({ children, href, secondary }: AnchorProps) => {
  const router = useRouter();

  return (
    <ContainerCSS
      role="link"
      active={router.asPath === href || router.pathname === href}
      secondary={secondary}
      onClick={() => router.push(href)}
    >
      <Link href={href}>{children}</Link>
    </ContainerCSS>
  );
};
