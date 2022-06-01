import { LoadingIcon } from '@stylesComponents/icons/FetchStatusIcons';
import { Container } from './styles';

interface props {
  children: React.ReactNode;
}

export const LoadingStatus = ({ children }: props) => (
  <Container style={{ color: 'rgb(var(--color-secondary))' }} role="alert">
    <h1>{children}</h1>

    <LoadingIcon />
  </Container>
);
