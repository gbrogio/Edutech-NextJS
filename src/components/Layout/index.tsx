// importações
import React, { useEffect } from 'react';
import Header from 'components/Header';
import { KonamiCode } from 'scripts/Konami';
import { Main, Footer } from 'styles/pages/Page';

interface props {
  footer: boolean;
}

const LayoutCp: React.FC<props> = ({ children, footer }) => {
  useEffect(() => {
    const Content = document.getElementById('Content');
    Content.addEventListener('keydown', (e) => {
      if (e.keyCode === 9) {
        Content.tabIndex = -1;
      }
    });

    KonamiCode('edutech', () => {
      const Confetti = document.getElementById('EasterEggConfetti');
      Confetti.style.opacity = '.2';
      setTimeout(() => {
        Confetti.style.opacity = '0';
      }, 10000);
    }, null);
  });

  return (
    <>
      <Header />
      <Main role="main" id="Content" aria-label="Conteúdo principal pressione tab para prosseguir">
        {children}
      </Main>
      <div className="EasterEgg" id="EasterEggConfetti"><img src="/confetti.gif" alt="" /></div>
      {footer && (
      <Footer>
        &copy; - 2021 - Guilherme Brogio
      </Footer>
      )}
    </>
  );
};

export default LayoutCp;
