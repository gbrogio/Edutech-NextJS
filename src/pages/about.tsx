import React, { useEffect } from 'react';
import LayoutCp from 'components/Layout';
import { ListIcon } from 'style-components/Icons';
import {
  Title, Paragraph, LinkA, Bash,
} from 'style-components/Text';
import smoothScrollTo from 'scripts/Navigate';

const About: React.FC = () => {
  useEffect(() => {
    // scroll suave
    const internalLink = document.querySelectorAll('#internalLink'); // pega os links de scroll
    // pega o elemento final do scroll
    function getScrollTopByHref(element) {
      const id = element.getAttribute('href'); // id do elemento
      return document.getElementById(id.replace(/\#/g, '')).offsetTop; // a distancia entre o link e o elemento
    }

    // procura pelos links
    internalLink.forEach((item) => {
      // quando o link for clicado
      item.addEventListener('click', (event) => {
        event.preventDefault(); // retire a configuração padrão
        const to = getScrollTopByHref(event.currentTarget) - 250; // pegue a distancia do elemento
        smoothScrollTo(0, to, 500); // leve o cliente até o elemento
      });
    });
  });

  return (
    <LayoutCp footer>
      <section className="titleRead">
        <div className="Read">
          <a href="https://github.com/gbrogio/Edutech-NextJS/blob/main/README.md">
            <ListIcon />
            {' '}
            <p>README.md</p>
          </a>
        </div>
        <span style={{ fontSize: '4rem' }}>🌎</span>
        <div style={{ textAlign: 'center' }} tabIndex={0} aria-label="Edutech - 2021, Paraná, Brasil. Titulo">
          <Title style={{ fontWeight: 400, whiteSpace: 'nowrap' }}>
            <b>EDU</b>
            TECH - 2021
          </Title>
          <Paragraph style={{ margin: '0', opacity: 0.7 }}>Paraná, Brasil</Paragraph>
        </div>
      </section>
      <span className="line" />
      <section className="statusRead">
        <div className="badge" tabIndex={0} aria-label="informações sobre o projeto">
          <img alt="Linguagens Utilizadas no projeto: 2" role="group" tabIndex={0} src="https://img.shields.io/github/languages/count/gbrogio/Edutech-NextJS?color=34A853&label=Linguagens&style=for-the-badge" />

          <img alt="Tamanho do repositório: 365 kilobyte" role="group" tabIndex={0} src="https://img.shields.io/github/repo-size/gbrogio/Edutech-NextJS?color=34A853&label=Tamanho%20do%20Reposit%C3%B3rio&style=for-the-badge" />

          <LinkA href="https://github.com/gbrogio" tabIndex={0}>
            <img alt="Feito por Guilherme Brogio" src="https://img.shields.io/badge/feito%20por-GBrogio-4285F4?style=for-the-badge" />
          </LinkA>
          <img alt="ultima atualização" tabIndex={0} src="https://img.shields.io/github/last-commit/gbrogio/Edutech-NextJS?color=4285F4&label=Ultimo%20Commit&style=for-the-badge" />
        </div>
        <Paragraph
          className="paragraph"
          style={{ textAlign: 'center' }}
          tabIndex={0}
          aria-label="Status do Projeto: em Construção"
        >
          🚧  Status do Projeto 🚀 Em construção...  🚧
        </Paragraph>
      </section>

      <section className="indexRead tableContainer">
        <Title
          className="titleLight"
          tabIndex={0}
          aria-label="indice"
        >
          📄 Índice
        </Title>

        <ul className="table">
          <li aria-label="Recursos">
            ✨
            <LinkA tabIndex={0} role="link" id="internalLink" href="#Recursos">Recursos</LinkA>
          </li>
          <li tabIndex={0} role="link" aria-label="Sobre">
            📜
            <LinkA tabIndex={0} role="link" id="internalLink" href="#Sobre">Sobre</LinkA>
          </li>
          <li tabIndex={0} role="link" aria-label="Pré-requisitos">
            👌
            <LinkA tabIndex={0} role="link" id="internalLink" href="#PreRequisitos">Pré-requisitos</LinkA>
          </li>
          <li tabIndex={0} role="link" aria-label="Clonar e Instalar projeto">
            📦
            <LinkA tabIndex={0} role="link" id="internalLink" href="#ClonarInstalar">Clonar / Instalar</LinkA>
          </li>
          <li>
            🔨
            {' '}
            <LinkA tabIndex={0} role="link" id="internalLink" href="#recursos">Como usar</LinkA>
            <ul style={{ paddingLeft: '2em' }}>
              <li tabIndex={0} role="link" aria-label="Editar">
                ✏️
                <LinkA tabIndex={0} role="link" id="internalLink" href="#Editar">Editar</LinkA>
              </li>
              <li tabIndex={0} role="link" aria-label="Mapa das Pastas">
                🗺️
                <LinkA tabIndex={0} role="link" id="internalLink" href="#Mapa">Mapa das Pastas</LinkA>
              </li>
            </ul>
          </li>
          <li tabIndex={0} role="link" aria-label="Tecnologias">
            ⚒️
            <LinkA tabIndex={0} role="link" id="internalLink" href="#Tecnologias">Tecnologias</LinkA>
          </li>
          <li tabIndex={0} role="link" aria-label="Contato">
            👤
            <LinkA tabIndex={0} role="link" id="internalLink" href="#Contato">Contato</LinkA>
          </li>
        </ul>
      </section>
      <span className="line" />
      <section className="featuresRead tableContainer">
        <Title className="titleLight" id="Recursos" tabIndex={0} aria-label="Recursos">✨ Recursos</Title>

        <ul className="table">
          <li>
            <li>
              <input type="checkbox" className="inLine" disabled checked />
              <p className="inLine" tabIndex={0} aria-label="item: Login Com Google, finalizado">📖 Login Com Google</p>
            </li>
            <ul style={{ paddingLeft: '2em' }}>
              <li>
                <input type="checkbox" className="inLine" disabled checked />
                <p className="inLine" tabIndex={0} aria-label="item: Sair da Conta, finalizado">📖 Sair da Conta</p>
              </li>
              <li>
                <input type="checkbox" className="inLine" disabled checked />
                <p className="inLine" tabIndex={0} aria-label="item: Deletar Usuário, finalizado">📖 Deletar Usuário</p>
              </li>
            </ul>
          </li>
          <li>
            <li>
              <input type="checkbox" className="inLine" disabled checked />
              <p className="inLine" tabIndex={0} aria-label="item: Componentes, finalizado">📖 Componentes</p>
            </li>
            <ul style={{ paddingLeft: '2em' }}>
              <li>
                <input type="checkbox" className="inLine" disabled checked />
                <p className="inLine" tabIndex={0} aria-label="item: Cartão de Cursos, finalizado">📖 Cartão de Cursos</p>
              </li>
              <li>
                <input type="checkbox" className="inLine" disabled checked />
                <p className="inLine" tabIndex={0} aria-label="item: Botão Acessibilidade, finalizado">📖 Botão Acessibilidade</p>
              </li>
            </ul>
          </li>
          <li>
            <input type="checkbox" className="inLine" disabled checked />
            <p className="inLine" tabIndex={0} aria-label="item: Busca por Cursos - Alura, finalizado">📖 Busca por Cursos - Alura</p>
          </li>
          <li>
            <input type="checkbox" className="inLine" disabled />
            <p className="inLine" tabIndex={0} aria-label="item: Contraste Tema, não feito">📖 Contraste Tema</p>
          </li>
        </ul>
      </section>

      <span className="line" />
      <section className="aboutRead">
        <Title className="titleLight" id="Sobre" tabIndex={0} aria-label="Sobre">📜 Sobre</Title>

        <Paragraph tabIndex={0} className="paragraph">
          Site de auxilio aos alunos do programa
          <b>EDU</b>
          TECH.
          Encontre seus cursos de maneira simples, rápida e acessível. Algumas curiosidades:
          <br />
          se em qualquer pagina você digitar &quot;edutech&quot; algo vai acontecer...
          {' '}
          <br />
          se na pagina de cursos voce digitar &quot;gbrogio&quot; ou &quot;alura&quot; você vai
          habilitar cards secretos.
          {' '}
          <br />
          <br />
          <p
            style={{ marginTop: '6px' }}
            aria-label="
              Link do Projeto (figma):
            "
          >
            Link do Projeto:
            {' '}
            <LinkA href="https://www.figma.com/file/sy7bHGmsvnh3DjuhhEjY69/Edutech?node-id=3%3A3">Figma</LinkA>
          </p>
          {' '}
          <br />
          <p
            style={{ marginTop: '6px' }}
            aria-label="
              Link do Projeto (figma):
            "
          >
            Link do Site:
            {' '}
            <LinkA href="https://www.edutech-gbrogio.vercel.app">edutech-gbrogio.vercel.app</LinkA>
          </p>
          {' '}
          <br />
          <p
            style={{ marginTop: '6px' }}
            aria-label="
              observação: Infelizmente, até o momento, na busca por séries apenas a opção
              primeiro, segundo e terceiro ano Ensino Médio está funcionado. Isso devido a api
              utilizada não fornecer os cursos das séries: 6º, 7º, 8º e 9º.
              caso o seu curso não esteja aparecendo, ou apareça um curso a mais
              do previsto. considere informar em:
            "
          >
            obs: Infelizmente, até o momento, na busca por séries apenas a opção
            &quot;1°, 2º e 3º ano Ensino Médio&quot; está funcionado. Isso devido a api
            utilizada não fornecer os cursos das séries: 6º, 7º, 8º e 9º.
            caso o seu curso não esteja aparecendo, ou apareça um curso a mais
            do previsto. considere informar em:
          </p>
          <LinkA href="mailto:guilhermebrogio.ps@gmail.com" tabIndex={0} role="link" aria-label="ou mande um email para guilhermebrogio.ps@gmail.com"><img style={{ marginTop: '1rem' }} src="https://img.shields.io/badge/-guilhermebrogio.ps@gmail.com-c14438?style=flat-square&amp;logo=Gmail&amp;logoColor=white&amp;link=mailto:guilhermebrogio.ps@gmail.com" alt="Gmail Badge" /></LinkA>
        </Paragraph>
      </section>
      <span className="line" />
      <section className="requisiteRead">
        <Title className="titleLight" id="PreRequisitos" tabIndex={0} aria-label="Pré-requisitos">👌 Pré-requisitos</Title>
        <Paragraph className="paragraph">
          <p tabIndex={0} className="inLine">
            Antes de Começar você precisa ter instalado em seu computador as
            seguintes ferramentas:
            {' '}
          </p>
          <LinkA href="https://nodejs.org/" rel="nofollow" className="inLine">Node.js</LinkA>
          ,
          {' '}
          <LinkA href="https://git-scm.com/" rel="nofollow" className="inLine">Git</LinkA>
          ,
          <p tabIndex={0} className="inLine">
            {' '}
            um gerenciador de pacotes como
            {' '}
          </p>

          <LinkA href="https://yarnpkg.com/" rel="nofollow" className="inLine">Yarn</LinkA>
          <p tabIndex={0} className="inLine">
            {' '}
            ou
            {' '}
          </p>
          <LinkA href="https://nodejs.org/" rel="nofollow" className="inLine">npm</LinkA>
          <p tabIndex={0} className="inLine">
            {' '}
            e também será necessário um editor de texto/código como
            {' '}
          </p>
          <LinkA href="https://code.visualstudio.com/" rel="nofollow" className="inLine">
            Visual Studio
            Code (VSCode)
          </LinkA>
          .
        </Paragraph>
      </section>
      <span className="line" />
      <section className="requisiteRead">
        <Title className="titleLight" tabIndex={0} id="ClonarInstalar" aria-label="Clonar e Instalar">📦 Clonar / Instalar</Title>
        <Paragraph style={{ opacity: 0.7 }} tabIndex={0}>Clonar Projeto:</Paragraph>
        <Bash tabIndex={0} aria-label="no terminal use: git clone https://github.com/gbrogio/Edutech-NextJS.git">$  git clone https://github.com/gbrogio/Edutech-NextJS.git</Bash>

        <Paragraph style={{ opacity: 0.7 }} tabIndex={0}>Instalar Pacotes:</Paragraph>
        <Bash tabIndex={0} aria-label="no terminal use: yarn">$  yarn</Bash>

        <Paragraph style={{ opacity: 0.7 }} tabIndex={0}>ou</Paragraph>
        <Bash tabIndex={0} aria-label="no terminal use: npm i">$  npm i</Bash>

        <Paragraph style={{ opacity: 0.7 }} tabIndex={0}>Iniciar Servidor / Site:</Paragraph>
        <Bash tabIndex={0} aria-label="no terminal use: yarn dev">$  yarn dev</Bash>

        <Paragraph style={{ opacity: 0.7 }} tabIndex={0}>ou</Paragraph>
        <Bash tabIndex={0} aria-label="no terminal use: npm run dev">$  npm run dev</Bash>

        <Paragraph style={{ opacity: 0.7 }} tabIndex={0}>
          Servidor iniciado na “PORTA 3000”
          do seu navegador, acesse
          {' '}
          <LinkA href="http://localhost:3000">http://localhost:3000</LinkA>
        </Paragraph>
      </section>
      <span className="line" />
      <section className="editRead">
        <Title className="titleLight" id="Editar" tabIndex={0} aria-label="Editar">✏️ Editar</Title>

        <Paragraph tabIndex={0} className="paragraph">
          Dentro da pasta
          <em><strong>src</strong></em>
          , você
          encontrará as pastas:
          <em><strong>Components</strong></em>
          ,
          <em>
            <strong>
              {' '}
              Page
            </strong>
          </em>
          {' '}
          e
          <em><strong>Styles</strong></em>
          .
          Dentro delas, você pode editar o
          <em><strong>estilo</strong></em>
          ,
          <em>
            <strong>
              {' '}
              formato
            </strong>
          </em>
          {' '}
          e
          <em>
            <strong>comportamento</strong>
          </em>
          {' '}
          do
          <em>Site</em>
          .

          O
          <em><strong>CSS</strong></em>
          {' '}
          do site esta presente dentro da pasta
          <em>
            <strong>
              {' '}
              Styles
            </strong>
          </em>
          {' '}
          com o formato em
          <em><strong>.ts</strong></em>
          ,
          <em>Typescript</em>
          , ou dentro das pastas dos componentes com a
          nomenclatura
          <strong>style[Componente].ts</strong>
          .
          <br />
          <em style={{ opacity: 0.9 }}>
            obs: Ao mexer com a responsividade da pagina,
            isto é seu tamanho, você deverá atualizar a pagina para
            continuar com a experiencia
          </em>
        </Paragraph>
      </section>
      <span className="line" />
      <section className="mapRead">
        <Title className="titleLight" id="Mapa">🗺️ Mapa Das Pastas</Title>
        <Bash style={{ marginTop: '1rem' }}>
          -| |&gt; [public]: Pasta
          {' '}
          <br />
          -| | |&gt; [json]: Pasta
          {' '}
          <br />
          -| | |  |&gt; (serie-courses.json): Arquivo
          {' '}
          <br />
          -| |
          {' '}
          <br />
          -| | |&gt; (confetti.gif): Arquivo
          {' '}
          <br />
          -| | |&gt; (edutech.jpg): Arquivo
          {' '}
          <br />
          -| |
          {' '}
          <br />
          -| |&gt; [src]: Pasta
          {' '}
          <br />
          -| | |&gt; [assets/svg]: Pasta
          {' '}
          <br />
          -| | |  |&gt; (google.svg): Arquivo
          {' '}
          <br />
          -| |
          {' '}
          <br />
          -| | |&gt; [components]: Pasta
          {' '}
          <br />
          -| | |  |&gt; [Accessibility]: Pasta
          {' '}
          <br />
          -| | |  | |&gt; (index.tsx): Arquivo
          {' '}
          <br />
          -| | |  | |&gt; (stylesAccessibility.ts): Arquivo
          {' '}
          <br />
          -| | |  |
          {' '}
          <br />
          -| | |  |&gt; [Header]: Pasta
          {' '}
          <br />
          -| | |  | |&gt; (index.tsx): Arquivo
          {' '}
          <br />
          -| | |  | |&gt; (LinkCp.tsx): Arquivo
          {' '}
          <br />
          -| | |  | |&gt; (LogoCp.tsx): Arquivo
          {' '}
          <br />
          -| | |  | |&gt; (Nav.tsx): Arquivo
          {' '}
          <br />
          -| | |  | |&gt; (styleLink.ts): Arquivo
          {' '}
          <br />
          -| | |  | |&gt; (styles.ts): Arquivo
          {' '}
          <br />
          -| | |  | |&gt; (stylesLogo.ts): Arquivo
          {' '}
          <br />
          -| | |  | |&gt; (stylesUser.ts): Arquivo
          {' '}
          <br />
          -| | |  | |&gt; (UserCp.tsx): Arquivo
          {' '}
          <br />
          -| | |  |
          {' '}
          <br />
          -| | |  |&gt; [Inputs]: Pasta
          {' '}
          <br />
          -| | |  | |&gt; (ButtonCp.tsx): Arquivo
          {' '}
          <br />
          -| | |  | |&gt; (InputCp.tsx): Arquivo
          {' '}
          <br />
          -| | |  | |&gt; (styleButton.ts): Arquivo
          {' '}
          <br />
          -| | |  | |&gt; (styleInput.ts): Arquivo
          {' '}
          <br />
          -| | |  |
          {' '}
          <br />
          -| | |  |&gt; [Layout]: Pasta
          {' '}
          <br />
          -| | |  | |&gt; (index.tsx): Arquivo
          {' '}
          <br />
          -| | |  |
          {' '}
          <br />
          -| | |  |&gt; (CardCp.ts): Arquivo
          {' '}
          <br />
          -| | |
          {' '}
          <br />
          -| | |&gt; [context]: Pasta
          {' '}
          <br />
          -| | |  |&gt; (AuthContext.tsx): Arquivo
          {' '}
          <br />
          -| | |
          {' '}
          <br />
          -| | |&gt; [hook]: Pasta
          {' '}
          <br />
          -| | |  |&gt; (useAuth.ts): Arquivo
          {' '}
          <br />
          -| | |
          {' '}
          <br />
          -| | |&gt; [lib]: Pasta
          {' '}
          <br />
          -| | |  |&gt; (firebase.ts): Arquivo
          {' '}
          <br />
          -| | |
          {' '}
          <br />
          -| | |&gt; [pages]: Pasta
          {' '}
          <br />
          -| | |  |&gt; (_app.tsx): Arquivo
          {' '}
          <br />
          -| | |  |&gt; (_document.tsx): Arquivo
          {' '}
          <br />
          -| | |  |&gt; (about.tsx): Arquivo
          {' '}
          <br />
          -| | |  |&gt; (course.tsx): Arquivo
          {' '}
          <br />
          -| | |  |&gt; (index.tsx): Arquivo
          {' '}
          <br />
          -| | |
          {' '}
          <br />
          -| | |&gt; [scripts]: Pasta
          {' '}
          <br />
          -| | |  |&gt; (Konami.ts): Arquivo
          {' '}
          <br />
          -| | |  |&gt; (Navigate.ts): Arquivo
          {' '}
          <br />
          -| | |
          {' '}
          <br />
          -| | |&gt; [styles]: Pasta
          {' '}
          <br />
          -| | |  |&gt; [components]: Pasta
          {' '}
          <br />
          -| | |  | |&gt; (CardCp.ts): Arquivo
          {' '}
          <br />
          -| | |  | |&gt; (Dialog.ts): Arquivo
          {' '}
          <br />
          -| | |  | |&gt; (Icons.ts): Arquivo
          {' '}
          <br />
          -| | |  | |&gt; (Text.ts): Arquivo
          {' '}
          <br />
          -| | |  |
          {' '}
          <br />
          -| | |  |&gt; [global]: Pasta
          {' '}
          <br />
          -| | |  | |&gt; (Colors.ts): Arquivo
          {' '}
          <br />
          -| | |  | |&gt; (Global.ts): Arquivo
          {' '}
          <br />
          -| | |  |
          {' '}
          <br />
          -| | |  |&gt; [pages]: Pasta
          {' '}
          <br />
          -| | |  | |&gt; (Pages.ts): Arquivo
          {' '}
          <br />
          -| | |  |
          {' '}
          <br />
          -| | |  |&gt; [theme]: Pasta
          {' '}
          <br />
          -| | |  | |&gt; (contrast.ts): Arquivo
          {' '}
          <br />
          -| | |  | |&gt; (default.ts): Arquivo
          {' '}
          <br />
          -| | |  |
          {' '}
          <br />
          -| | |  |&gt; (styled.d.ts): Arquivo
          {' '}
          <br />
          -| | |
          {' '}
          <br />
          -| | |&gt; [utils]: Pasta
          {' '}
          <br />
          -| | |  |&gt; (usePersisteState.ts): Arquivo
          {' '}
          <br />
          -| | |
          {' '}
          <br />
          -| |
          {' '}
          <br />
          -|
          {' '}
          <br />
        </Bash>
      </section>
      <span className="line" />
      <section className="techRead">
        <Title className="titleLight" id="Tecnologias" tabIndex={0} aria-label="Tecnologias">⚒️ Tecnologias</Title>
        <Paragraph>
          <div style={{ marginTop: '2rem' }} className="badge">
            <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&amp;logo=typescript&amp;logoColor=white" alt="TypeScript" />
            <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&amp;logo=react&amp;logoColor=%2361DAFB" alt="React" />
            <img src="https://img.shields.io/badge/Next-black?style=for-the-badge&amp;logo=next.js&amp;logoColor=white" alt="Next JS" />
            <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&amp;logo=styled-components&amp;logoColor=white" alt="Styled Components" />
            <img src="https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&amp;logo=firebase" alt="Firebase" />
            <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&amp;logo=node.js&amp;logoColor=white" alt="NodeJS" />
          </div>
        </Paragraph>
        <Paragraph style={{ opacity: 0.9 }} tabIndex={0} className="paragraph">
          O TypeScript, foi a tecnologia utilizada para a construção do código;
          {' '}
          <br />
          O React, foi a tecnologia utilizada para a construção dos componentes e paginas;
          <br />
          O Next.JS, foi a tecnologia utilizada para a renderização dos códigos feitos em React;
          <br />
          O Styled Components, foi a tecnologia utilizada para a estilização da
          pagina (CSS em JavaScript);
          <br />
          O Firebase, foi a tecnologia utilizada para a autenticação e metodos de login da pagina;
          <br />
          O NodeJS, foi a tecnologia utilizada para manter o Next.JS e outros.
          <br />
        </Paragraph>
      </section>
      <span className="line" />
      <section className="contactRead">
        <Title className="titleLight" tabIndex={0} id="Contato" aria-label="Contato">👤 Contato</Title>

        <Paragraph className="authorInfo" style={{ opacity: 0.9 }}>
          <LinkA href="https://github.com/gbrogio">
            <img style={{ borderRadius: '50%' }} src="https://avatars.githubusercontent.com/u/79169549?s=400&u=b290516661edf038794521fe542f92d74eccb2b8&v=4" width="100" alt="" />
            <br />
            <sub tabIndex={0} role="link"><b>Guilherme Brogio</b></sub>
          </LinkA>
          <LinkA href="https://cursos.alura.com.br/user/gbrogio" title="GBrogio">🚀</LinkA>
        </Paragraph>
        <Paragraph
          tabIndex={0}
          aria-label="
            feito de coração por Guilherme Brogio.
            Manda um oi lá no nosso Servidor do Discord:
          "
        >
          Feito de 💜 por Guilherme Brogio
          {' '}
          <br />
          Manda um &quot;oi!&quot;👋🏽 lá no nosso
          {' '}
          <LinkA href="https://discord.gg/ANAWECH3UP">
            server do discord
          </LinkA>
          !
          {' '}
          <br />
          <LinkA href="mailto:guilhermebrogio.ps@gmail.com" tabIndex={0} role="link" aria-label="ou mande um email para guilhermebrogio.ps@gmail.com"><img style={{ marginTop: '1rem' }} src="https://img.shields.io/badge/-guilhermebrogio.ps@gmail.com-c14438?style=flat-square&amp;logo=Gmail&amp;logoColor=white&amp;link=mailto:guilhermebrogio.ps@gmail.com" alt="Gmail Badge" /></LinkA>
        </Paragraph>
      </section>

      <span className="padding" />
    </LayoutCp>
  );
};

export default About;
