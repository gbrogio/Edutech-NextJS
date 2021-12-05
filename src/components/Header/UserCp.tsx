import React, { useState, useEffect } from 'react';

import { ArrowDown } from 'styles/components/Icons';
import { Dialog } from 'styles/components/Dialog';
import { Container } from './stylesUser';
import ButtonCp from '../Inputs/ButtonCp';

interface props {
  photo: string;
  domain: string;
  isWidth: number;
}
const UserCp: React.FC<props> = ({
  photo, domain, children, isWidth,
}) => {
  // estados
  const [isModal, setModal] = useState(false);

  // configurações
  const domainFormatted = domain.replace(/^([\w\.\-]+)[^@]/g, '');
  const accessibleDomainFormatted = domainFormatted.replace(/\./g, ' Ponto');

  // carregue quando o front-end estiver pronto
  useEffect(() => {
    // pega os elementos que fazem parte da modal usuario
    const modalDomain = document.getElementById('ModalUser');
    const UserButton = document.getElementById('UserButton');

    // evento de tecla pressionada
    document.addEventListener('keydown', (e) => {
      if (isModal && e.key === 'Escape') { // se a modal estiver aberta e a tecla pressionada for o "ESC"/"Escape"
        setModal(false); // feche a modal
      }
    });

    if (!isModal) { // se a modal for fechada
      UserButton.focus(); // mande o foco para o botão abrir modal
    } else { // caso contrario
      modalDomain.focus(); // mande o foco para a modal
    }
  });

  return (
    <>
      <Container id="UserButton" role="button" onClick={() => setModal(!isModal)} tabIndex={899}>

        {isWidth >= 400 && (
        <div className="userInfo">
          <p className="userName" aria-label={`Usuário informações. Nome: ${children}.`}>{children}</p>
          <p className="userDomain" aria-label={`. Dominio: ${accessibleDomainFormatted}.`}>{domainFormatted}</p>
        </div>
        )}

        <div className="userPhoto" role="menu">
          <img src={photo} alt="" />
          <ArrowDown role="button" style={{ transform: isModal ? 'rotate(180deg)' : 'rotate(0)' }} />
        </div>

      </Container>

      {isModal && (
      <Dialog id="ModalUser" tabIndex={isModal ? 900 : -1} aria-label="Usuário - Modal">
        <ButtonCp
          tabIndex={isModal ? 900 : -1}
          typeProps={{
            meth: 'sign',
            fill: false,
            outline: 'Bottom',
            provider: 'out',
            borderRadius: '10px 10px 0 0',
          }}
          background={null}
        >
          Sair da Conta
        </ButtonCp>
        <ButtonCp
          tabIndex={isModal ? 900 : -1}
          typeProps={{
            meth: 'sign',
            fill: false,
            outline: 'Top',
            provider: 'delete',
            borderRadius: '0 0 10px 10px',
          }}
          background={null}
          ariaLabel="Deletar Conta - ultimo item pressione escape para sair"
        >
          Deletar Conta
        </ButtonCp>
      </Dialog>
      )}
    </>
  );
};

export default UserCp;
