// importações
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import useAuth from '../../hook/useAuth';

import { GoogleIcon, TrashIcon, Out } from 'styles/components/Icons';
import { Container } from './styleButton';

// propriedades
export interface propsBtn {
  tabIndex?: number;
  onClick?: () => void;
  style?: object;
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
  hRef, style, onClick, ariaLabel, tabIndex, typeProps, children, background //  recebendo propriedades
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
      style={style}
      background={background}
      tabIndex={tabIndex ? tabIndex : -1}
      aria-label={ariaLabel}
      className={typeProps.provider ? 'signBtn' : ''} // seta a classe referente a typeProps.provider, se o valor existir adicione "signBtn", caso contrário não adicione.
      onClick={typeProps.provider ? () => (typeProps.provider === 'google' ? signInGoogle() : typeProps.provider === 'out' ? signOut() : typeProps.provider === 'delete' ? deleteAccount() : {}) : onClick} // caso houver click enviar para "/hRef".
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
