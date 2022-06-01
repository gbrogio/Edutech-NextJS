import { ErrorIcon } from '@stylesComponents/icons/FetchStatusIcons';
import { Container } from './styles';

interface props {
  children: React.ReactNode;
}

export const ErrorStatus = ({ children }: props) => (
  <Container style={{ color: 'var(--color-error)' }} role="alert">
    <h1>{children}</h1>

    <ErrorIcon />
  </Container>
);
