import React, { useState, useEffect } from 'react';

import { AccessibilityIcon, ContrastIcon } from 'styles/components/Icons';
import { Dialog } from 'styles/components/Dialog'
import { Container } from './stylesAccessbility';
import ButtonCp from '../Inputs/ButtonCp';

interface props {
  toggleTheme: () => void;
  toggleFontSize: () => void;
  fontSize: number | string;
}

const AccessibilityCp: React.FC<props> = ({toggleTheme, toggleFontSize, fontSize}) => {
  // estados
  const [isModal, setModal] = useState(false);

  // carregue quando o front-end estiver pronto
  useEffect(() => {
    // evento de tecla pressionada
    document.addEventListener('keydown', (e) => {
      if (isModal && e.key === 'Escape') { // se a modal estiver aberta e a tecla pressionada for o "ESC"/"Escape"
        setModal(false); // feche a modal
      }
    });
  });

  return (
    <>
      <Container id="AccessButton" onClick={() => setModal(isModal ? false : true)}>
        <AccessibilityIcon />
        {isModal && <Dialog id="ModalAccess" aria-label="Acessibilidade - Modal" role="">
          <ButtonCp
            onClick={() => toggleTheme()}
            typeProps={{
              meth: "button",
              fill: false,
              outline: "Bottom",
              borderRadius: "10px 10px 0 0",
            }}
            style={{opacity: .95}}
            background="rgb(var(--BackgroundComponents))"
          >
            Contraste
            <ContrastIcon style={{marginLeft: '1.8rem'}}/>
          </ButtonCp>
          <ButtonCp
            onClick={() => toggleFontSize()}
            typeProps={{
              meth: "button",
              fill: false,
              outline: "Top",
              borderRadius: "0 0 10px 10px",
            }}
            style={{opacity: .95}}
            background="rgb(var(--BackgroundComponents))"
          >
            {fontSize === '16px' ? 'Aumentar fonte +' : <p style={{margin: '.5rem 0 0 .74rem'}}>Diminuir fonte -</p> }

          </ButtonCp>
        </Dialog>}
      </Container>
    </>
  );
};

export default AccessibilityCp;
