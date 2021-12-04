// importações
import React, { useEffect } from 'react';
import {parseCookies} from 'nookies'
import { useRouter } from 'next/router';

import { Container } from './styleLink';

// propriedades
interface props {
  ariaLabel?: string;
  hRef?: string;
  iD: {
    get: string,
    lid: string,
  };
  tabIndex: number;
  isActive?: boolean;
  isInternal?: boolean;
}

const LinkCp: React.FC<props> = ({
  hRef, iD, isActive, isInternal, ariaLabel, tabIndex, children,
}) => {
  const router = useRouter(); // rota/navegação entre paginas.

  return (
    <Container
      tabIndex={tabIndex}
      aria-label={isActive ? ariaLabel + ' ' + children + ', status: ativo' : isActive === false ? ariaLabel + ' ' + children + ', status: desativado' : ariaLabel}
      onClick={() => {
        router.push(hRef).then(() => {
          router.reload()
        })
      }}
      id={isInternal ? `${iD.get}` : ''}
      data-lid={iD.lid}
      className={isActive ? `activeLink ${iD.get === 'linkLeft' ? 'linkLeft' : ''}` : ''}
    >
      {children}
    </Container>
  );
};

export default LinkCp;
