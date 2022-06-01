import { SuccessIcon } from '@stylesComponents/icons/FetchStatusIcons';
import { Container } from './styles';

interface props {
  children: React.ReactNode;
}

export const ReadyStatus = ({ children }: props) => (
  <Container style={{ color: 'var(--color-success)' }}>
    <h1>{children}</h1>

    <SuccessIcon />
  </Container>
);
