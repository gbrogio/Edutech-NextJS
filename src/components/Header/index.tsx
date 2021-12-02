// importações
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
// Navegações
import {Nav, navLeft} from './Nav'

// estilos e icones
import { Hamburger, BookInfo } from 'styles/components/Icons';
import LinkCp from './LinkCp';
import LogoCp from './LogoCp';
import UserCp from './UserCp';
import useAuth from '../../hook/useAuth';
import ButtonCp from '../Inputs/ButtonCp';

// estilo global
import { Container } from './styles';

const Header: React.FC = () => {
  // dados do usuario
  const { isUser } = useAuth();

  // estados
  const [isNav, setNav] = useState(false);
  const [isWidth, setWidth] = useState(0);
  const [isIndex, setIndex] = useState(-1);

  // navegação
  const router = useRouter();

  // verificações
  const verifyIndex = () => {
    if (isNav) return 10
    return -1
  };

  useEffect(() => setIndex(verifyIndex()), [isNav])


  // carregue quando o front-end estiver pronto
  useEffect(() => {
    setWidth(window.innerWidth); // pega o tamanho da pagina

    // pega os elementos que fazem parte da navegação esquerda
    const buttonMenu = document.getElementById('menuBtn') as HTMLInputElement;
    const labelMenu = document.getElementById('labelBtn') as HTMLLabelElement;
    const navLeft = document.getElementById('menuLeft');
    const BlurElm = document.querySelectorAll('#blurElm');

    // evento de tecla pressionada
    document.addEventListener('keydown', (e) => {
      if (isNav && e.key === 'Escape') { // se a tecla pressionada for o "ESC"/"Escape" e se a navegação esquerda estiver aberta
        setNav(false); // Avise aos elementos que a navegação esquerda foi retirada
        navLeft.style.visibility = 'hidden' // desabilite o menu

        // ativa o foco do elemento
        BlurElm.forEach((Elm) => {
          Elm.setAttribute('tabindex', '0');
        })
      }
    });

    if (!isNav) { //  se a navegação esquerda for falsa
      buttonMenu.checked = false; // Retire o menu
      labelMenu.focus(); // coloque o foco no ultimo elemento clicado
      navLeft.style.visibility = 'hidden' // desabilite o menu

      // ativa o foco do elemento
      BlurElm.forEach((Elm) => {
        Elm.setAttribute('tabindex', '0');
      })

    } else { //  se a navegação esquerda estiver ativada
      buttonMenu.checked = true; // ative o menu
      navLeft.focus(); // e coloque o foco no menu
      navLeft.style.visibility = 'visible' // habilite o menu


      // ativa o foco do elemento
      BlurElm.forEach((Elm) => {
        Elm.setAttribute('tabindex', '-1');
      })
    }
  });

  return (
    <Container role="none" tabIndex={9} aria-label="Cabeçalho Navegação">
      <div className="group">
        <section className="navLeftContainer">
          <input type="checkbox" id="menuBtn" />

          <section
            aria-label="Navegação Esquerda"
            role="menu"
            tabIndex={isIndex}
            className="menuLeft"
            id="menuLeft"
          >
            <div>
              <LinkCp
                tabIndex={isIndex}
                hRef="/about"
                iD={{
                  get: 'linkLeft',
                  lid: 'about',
                }}
                isActive={
                  router.pathname === '/about'
                }
                isInternal={
                  router.pathname === '/about'
                }
              >
                <BookInfo style={{ marginRight: '1rem' }} />
                Sobre o Site
              </LinkCp>
            </div>

            <span className="Line"/>

            <div>
              <p
                aria-label="escolha sua série:"
                tabIndex={isIndex}
              >
                Filtrar por Serie

              </p>

              {navLeft(isIndex, LinkCp)}
            </div>
          </section>

          <div
            style={{display: isNav ? 'flex' : 'none'}}
            aria-hidden="true"
            className="overlay"
            onClick={() => {
              setNav(false);
            }}
          />

          <div>
            <label
              tabIndex={9}
              aria-label={`Botão Menu Esquerdo ${isNav ? 'Status: Aberto, pressione "Escape" para sair' : 'Status Fechado'}`}
              id="labelBtn"
              aria-hidden="true"
              onClick={() => {
                setNav(true);
              }}
            >
              <Hamburger />
            </label>

            <section
              tabIndex={9}
              role="none"
              className="Edutech"
              aria-label="Nome do Site: Edutech - 2021, Paraná, Brasil"
            >
              <p>
                <strong>EDU</strong>
                TECH - 2021
              </p>
              <p className="opacity">Paraná, Brasil</p>
            </section>
          </div>
        </section>

        {isWidth >= 940 && Nav(router.pathname, LinkCp, 9)}

        {isUser ? (
          <div className="userZone">
            <UserCp
              isWidth={isWidth}
              photo={isUser.photo}
              domain={isUser.email}
              >{isUser.name}
            </UserCp>
          </div>
        ) : isWidth >= 450 && (
          <div className="signZone">
            <ButtonCp
              tabIndex={9}
              typeProps={{
                meth: 'sign',
                provider: 'google',
              }}
            >
              Entrar com Google
            </ButtonCp>
          </div>
        )}
      </div>

      {isWidth < 940 && <div className="bottomHeader">{Nav(router.pathname, LinkCp, 899)}</div>}
    </Container>
  );
};
{/* <LogoCp
  fontFamily={{
    inside: 'Roboto',
    text: {
      top: 'Roboto',
      bottom: 'Roboto',
    },
  }}
  inside="G"
  description="dev front-end"
>
  Guilherme Brogio
</LogoCp> */}
export default Header;
