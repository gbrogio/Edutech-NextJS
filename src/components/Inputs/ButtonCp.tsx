// importações
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import useAuth from '../../hook/useAuth';

import { GoogleIcon, TrashIcon, Out } from 'styles/components/Icons';
import { Container } from './styleButton';

// propriedades
export interface propsBtn {
  tabIndex?: number;
  typeProps?: {
    meth?: 'sign' | 'button' | 'submit';
    fill?: boolean;
    outline?: boolean | 'Bottom' | 'Top' | 'Right' | 'Left';
    provider?: 'google' | 'out' | 'delete';
    borderRadius?: string;
  };
  hRef?: string;
  ariaLabel?: string;
  background?: null | string;
}

// componente
const ButtonCp: React.FC<propsBtn> = ({
  hRef, ariaLabel, tabIndex, typeProps, children, background //  recebendo propriedades
}) => {
  const { signInGoogle, signOut, deleteAccount } = useAuth();
  const router = useRouter(); // criando constancia de rota/navegação entre paginas.

  return (
    <Container
      typeProps={{
        meth: typeProps.meth,
        fill: typeProps.fill,
        outline: typeProps.outline,
        provider: typeProps.provider,
        borderRadius: typeProps.borderRadius,
      }}
      background={background}
      tabIndex={tabIndex}
      aria-label={ariaLabel}
      className={typeProps.provider ? 'signBtn' : ''} // seta a classe referente a typeProps.provider, se o valor existir adicione "signBtn", caso contrário não adicione.
      onClick={() => (typeProps.provider === 'google' ? signInGoogle() : typeProps.provider === 'out' ? signOut() : typeProps.provider === 'delete' ? deleteAccount() : {})} // caso houver click enviar para "/hRef".
    >
      {typeProps.provider === 'google' && (
        <>
          <GoogleIcon width="24" height="24" />
          {' '}
          <span />
          {' '}
        </>
      )}
      {typeProps.provider === 'out' && (
        <>
          <Out />
          {' '}
          <span />
          {' '}
        </>
      )}
      {typeProps.provider === 'delete' && (
        <>
          <TrashIcon />
          {' '}
          <span />
          {' '}
        </>
      )}
      {children /* Recebe os elementos filhos quando o componente é utilizado */}
    </Container>
  );
};

export default ButtonCp;
