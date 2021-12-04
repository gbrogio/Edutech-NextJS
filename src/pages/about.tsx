import Head from 'next/head';
import React, { useState } from 'react';
import LayoutCp from 'components/Layout';
import { Title, Paragraph, LinkA, Bash } from 'style-components/Text';

const About: React.FC = () => {
  return (
    <>
      <LayoutCp>
        <section className="titleRead">
          <span style={{fontSize: '4rem'}}>🌎</span>
          <div style={{textAlign: 'center'}} tabIndex={0} aria-label="Edutech - 2021, Paraná, Brasil. Titulo">
            <Title style={{fontWeight: 400, whiteSpace: 'nowrap'}}><b>EDU</b>TECH - 2021</Title>
            <Paragraph style={{margin: '0', opacity: .7}}>Paraná, Brasil</Paragraph>
          </div>
        </section>
        <span className="line"></span>
        <section className="statusRead">
          <div className="badge" tabIndex={0} aria-label="informações sobre o projeto">
            <img alt="Linguagens Utilizadas no projeto: 2" role="group" tabIndex={0} src="https://img.shields.io/github/languages/count/gbrogio/Edutech-NextJS?color=34A853&label=Linguagens&style=for-the-badge"/>

            <img alt="Tamanho do repositório: 193 kilobyte" role="group" tabIndex={0} src="https://img.shields.io/github/repo-size/gbrogio/Edutech-NextJS?color=34A853&label=Tamanho%20do%20Reposit%C3%B3rio&style=for-the-badge"/>

            <LinkA href="https://github.com/gbrogio"tabIndex={0}>
              <img alt="Feito por Guilherme Brogio" src="https://img.shields.io/badge/feito%20por-GBrogio-4285F4?style=for-the-badge"/>
            </LinkA>
            <img alt="ultima atualização" tabIndex={0} src="https://img.shields.io/github/last-commit/gbrogio/Edutech-NextJS?color=4285F4&label=Ultimo%20Commit&style=for-the-badge"/>
          </div>
          <Paragraph
            className="paragraph"
            style={{textAlign: 'center'}}
            tabIndex={0}
            aria-label="Status do Projeto: em Construção"
          >🚧  Status do Projeto 🚀 Em construção...  🚧</Paragraph>
        </section>

        <section className="indexRead tableContainer">
          <Title className="titleLight"
            tabIndex={0}
            aria-label="indice"
          >📄 Índice</Title>

          <ul className="table">
            <li tabIndex={0} role="link" aria-label="Recursos">✨ Recursos</li>
            <li tabIndex={0} role="link" aria-label="Sobre">📜 Sobre</li>
            <li tabIndex={0} role="link" aria-label="Pré-requisitos">👌 Pré-requisitos</li>
            <li tabIndex={0} role="link" aria-label="Clonar e Instalar projeto">📦 Clonar / Instalar</li>
            <li>
              🔨 Como usar
              <ul style={{paddingLeft: '2em'}} >
                <li tabIndex={0} role="link" aria-label="Editar">✏️ Editar</li>
                <li tabIndex={0} role="link" aria-label="Mapa das Pastas">🗺️ Mapa das Pastas</li>
              </ul>
            </li>
            <li tabIndex={0} role="link" aria-label="Tecnologias">⚒️ Tecnologias</li>
            <li tabIndex={0} role="link" aria-label="Contato">👤 Contato</li>
          </ul>
        </section>
        <span className="line"></span>
        <section className="featuresRead tableContainer">
          <Title className="titleLight" tabIndex={0} aria-label="Recursos">✨ Recursos</Title>

          <ul className="table">
            <li>
              <li><input type="checkbox" className="inLine" disabled checked/><p className="inLine" tabIndex={0} aria-label="item: Login Com Google, finalizado">📖 Login Com Google</p></li>
              <ul style={{paddingLeft: '2em'}}>
                <li><input type="checkbox" className="inLine" disabled checked/><p className="inLine" tabIndex={0} aria-label="item: Sair da Conta, finalizado">📖 Sair da Conta</p></li>
                <li><input type="checkbox" className="inLine" disabled checked/><p className="inLine" tabIndex={0} aria-label="item: Deletar Usuário, finalizado">📖 Deletar Usuário</p></li>
              </ul>
            </li>
            <li>
              <li><input type="checkbox" className="inLine" disabled /><p className="inLine" tabIndex={0} aria-label="item: Componentes, não terminado">📖 Componentes</p></li>
              <ul style={{paddingLeft: '2em'}}>
                <li><input type="checkbox" className="inLine" disabled checked/><p className="inLine" tabIndex={0} aria-label="item: Cartão de Cursos, finalizado">📖 Cartão de Cursos</p></li>
                <li><input type="checkbox" className="inLine" disabled/><p className="inLine" tabIndex={0} aria-label="item: Botão Acessibilidade, não feito">📖 Botão Acessibilidade</p></li>
              </ul>
            </li>
            <li><input type="checkbox" className="inLine" disabled checked/><p className="inLine" tabIndex={0} aria-label="item: Busca por Cursos - Alura, finalizado">📖 Busca por Cursos - Alura</p></li>
            <li><input type="checkbox" className="inLine" disabled/><p className="inLine" tabIndex={0} aria-label="item: Contraste Tema, não feito">📖 Contraste Tema</p></li>
          </ul>
        </section>

        <span className="line"></span>
        <section className="aboutRead">
          <Title className="titleLight" tabIndex={0} aria-label="Sobre">📜 Sobre</Title>

          <Paragraph tabIndex={0} className="paragraph">Site de auxilio aos alunos do programa <b>EDU</b>TECH.
            Encontre seus cursos de maneira simples, rápida e acessível. <br />
            <p style={{marginTop: '6px'}} aria-label="
              observação: Infelizmente, até o momento, na busca por séries apenas a opção
              primeiro ano Ensino Médio está funcionado.
            ">
              obs: Infelizmente, até o momento, na busca por séries apenas a opção
              "1° ano Ensino Médio" está funcionado.
            </p>
          </Paragraph>
        </section>
        <span className="line"></span>
        <section className="requisiteRead">
          <Title className="titleLight" tabIndex={0} aria-label="Pré-requisitos">👌 Pré-requisitos</Title>
          <Paragraph className="paragraph">
            <p tabIndex={0} className="inLine">
              Antes de Começar você precisa ter instalado em seu computador as
              seguintes ferramentas:{' '}
            </p>
            <LinkA href="https://nodejs.org/" rel="nofollow" className="inLine">Node.js</LinkA>,{' '}
            <LinkA href="https://git-scm.com/" rel="nofollow" className="inLine">Git</LinkA>,
            <p tabIndex={0} className="inLine">
              {' '}um gerenciador de pacotes como{' '}
            </p>

            <LinkA href="https://yarnpkg.com/" rel="nofollow" className="inLine">Yarn</LinkA>
            <p tabIndex={0} className="inLine">
              {' '}ou{' '}
            </p>
            <LinkA href="https://nodejs.org/" rel="nofollow" className="inLine">npm</LinkA>
            <p tabIndex={0} className="inLine">
              {' '}e também será necessário um editor de texto/código como{' '}
            </p>
            <LinkA href="https://code.visualstudio.com/" rel="nofollow" className="inLine">Visual Studio
            Code (VSCode)</LinkA>.
          </Paragraph>
        </section>
        <span className="line"></span>
        <section className="requisiteRead">
          <Title className="titleLight" tabIndex={0} aria-label="Clonar e Instalar">📦 Clonar / Instalar</Title>
          <Paragraph style={{opacity: .7}} tabIndex={0}>Clonar Projeto:</Paragraph>
          <Bash tabIndex={0} aria-label="no terminal use: git clone https://github.com/gbrogio/Edutech-NextJS.git">$  git clone https://github.com/gbrogio/Edutech-NextJS.git</Bash>

          <Paragraph style={{opacity: .7}} tabIndex={0}>Instalar Pacotes:</Paragraph>
          <Bash tabIndex={0} aria-label="no terminal use: yarn">$  yarn</Bash>

          <Paragraph style={{opacity: .7}} tabIndex={0}>ou</Paragraph>
          <Bash tabIndex={0} aria-label="no terminal use: npm i">$  npm i</Bash>

          <Paragraph style={{opacity: .7}} tabIndex={0}>Iniciar Servidor / Site:</Paragraph>
          <Bash tabIndex={0} aria-label="no terminal use: yarn dev">$  yarn dev</Bash>

          <Paragraph style={{opacity: .7}} tabIndex={0}>ou</Paragraph>
          <Bash tabIndex={0} aria-label="no terminal use: npm run dev">$  npm run dev</Bash>

          <Paragraph style={{opacity: .7}} tabIndex={0}>Servidor iniciado na “PORTA 3000”
            do seu navegador, acesse {' '}
            <LinkA href="http://localhost:3000">http://localhost:3000</LinkA>
          </Paragraph>
        </section>
        <span className="line"></span>
        <section className="editRead">
          <Title className="titleLight" tabIndex={0} aria-label="Editar">✏️ Editar</Title>

          <Paragraph tabIndex={0} className="paragraph">Dentro da pasta <em><strong>src</strong></em>, você
            encontrará as pastas: <em><strong>Components</strong></em>,
            <em><strong>{' '}Page</strong></em> e <em><strong>Styles</strong></em>.
            Dentro delas, você pode editar o <em><strong>estilo</strong></em>,
            <em><strong>{' '}formato</strong></em> e <em><strong>comportamento</strong>
            </em> do <em>Site</em>.

            O <em><strong>CSS</strong></em> do site esta presente dentro da pasta
            <em><strong>{' '}Styles</strong></em> com o formato em <em><strong>.ts</strong></em>,
            <em>Typescript</em>, ou dentro das pastas dos componentes com a
            nomenclatura <strong>style[Componente].ts</strong>.
            <br/><em style={{opacity: .9}}>obs: Ao mexer com a responsividade da pagina,
            isto é seu tamanho, você deverá atualizar a pagina para
            continuar com a experiencia</em>
          </Paragraph>
        </section>
        <span className="line"></span>
        <section className="mapRead">
          <Title className="titleLight">🗺️ Mapa Das Pastas</Title>
          <Bash style={{marginTop: '1rem'}}>Nothing for here</Bash>
        </section>
        <span className="line"></span>
        <section className="techRead">
          <Title className="titleLight" tabIndex={0} aria-label="Tecnologias">⚒️ Tecnologias</Title>
          <Paragraph>
            <div style={{marginTop: '2rem'}} className="badge">
              <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&amp;logo=typescript&amp;logoColor=white" alt="TypeScript" />
              <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&amp;logo=react&amp;logoColor=%2361DAFB" alt="React" />
              <img src="https://img.shields.io/badge/Next-black?style=for-the-badge&amp;logo=next.js&amp;logoColor=white" alt="Next JS" />
              <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&amp;logo=styled-components&amp;logoColor=white" alt="Styled Components" />
              <img src="https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&amp;logo=firebase" alt="Firebase" />
              <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&amp;logo=node.js&amp;logoColor=white" alt="NodeJS" />
            </div>
          </Paragraph>
          <Paragraph style={{opacity: .9}} tabIndex={0} className="paragraph">
            O TypeScript, foi a tecnologia utilizada para a construção do código; <br/>
            O React, foi a tecnologia utilizada para a construção dos componentes e paginas;<br/>
            O Next.JS, foi a tecnologia utilizada para a renderização dos códigos feitos em React;<br/>
            O Styled Components, foi a tecnologia utilizada para a estilização da pagina (CSS em JavaScript);<br/>
            O Firebase, foi a tecnologia utilizada para a autenticação e metodos de login da pagina;<br/>
            O NodeJS, foi a tecnologia utilizada para manter o Next.JS e outros.<br/>
          </Paragraph>
        </section>
        <span className="line"></span>
        <section className="contactRead">
          <Title className="titleLight" tabIndex={0} aria-label="Contato">👤 Contato</Title>

          <Paragraph className="authorInfo" style={{opacity: .9,}}>
            <LinkA href="https://github.com/gbrogio">
              <img style={{borderRadius: '50%'}} src="https://avatars.githubusercontent.com/u/79169549?s=400&u=b290516661edf038794521fe542f92d74eccb2b8&v=4" width="100" alt=""/>
              <br />
              <sub tabIndex={0} role="link"><b>Guilherme Brogio</b></sub>
            </LinkA>
            <LinkA href="https://cursos.alura.com.br/user/gbrogio" title="GBrogio">🚀</LinkA>
          </Paragraph>
          <Paragraph tabIndex={0} aria-label="
            feito de coração por Guilherme Brogio.
            Manda um oi lá no nosso Servidor do Discord:
          ">
            Feito de 💜 por Guilherme Brogio <br/>
            Manda um "oi!"👋🏽 lá no nosso <LinkA href="https://discord.gg/ANAWECH3UP">
              server do discord
            </LinkA>! <br/>
            <img style={{marginTop: '1rem'}} tabIndex={0} aria-label="ou mande um email para guilhermebrogio.ps@gmail.com" src="https://img.shields.io/badge/-guilhermebrogio.ps@gmail.com-c14438?style=flat-square&amp;logo=Gmail&amp;logoColor=white&amp;link=mailto:guilhermebrogio.ps@gmail.com" alt="Gmail Badge" />
          </Paragraph>
        </section>

        <span className="padding"></span>
      </LayoutCp>
    </>
  );
};

export default About;
