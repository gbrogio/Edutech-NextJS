import Head from 'next/head';
import React, { useState } from 'react';
import LayoutCp from 'components/Layout';

import { Title, Paragraph, LinkA } from 'style-components/Text';

const Home: React.FC = () => {
  return (
    <>
      <LayoutCp>
        <section className="aboutEdutech">
          <div>
            <Title
              tabIndex={0}
              id="blurElm"
              role="heading"
              aria-label="Sobre o Programa Edutech - titulo. ."
            >Sobre EduTech</Title>
            <Paragraph tabIndex={0} id="blurElm">
              O Programa Edutech é uma iniciativa da Secretaria de Estado
              da Educação e do Esporte, tal iniciativa tem como objetivo a formação
              de estudantes na área de tecnologia e inovação para o desenvolvimento
              de projetos significativos à comunidade. Em parceria com a plataforma
              Alura, onde os cursos são disponibilizados, procuram mostrar o
              melhor de cada aluno e ajuda-los a serem protagonistas na aplicação
              de estratégias para resolução de problemas a seus futuros empregos,
              ou a sua comunidade como um todo.
            </Paragraph>
          </div>
          <img src="/edutech.jpg" alt="
            Logomarca do programa EDUTECH: uma esfera central com artefatos ao redor.
          "/>
        </section>
        <span className="line"/>
        <section className="trails">
          <Title
            tabIndex={0}
            id="blurElm"
            role="heading"
            aria-label="Trilhas de Estudo do Programa - titulo. ."
          >Trilhas de Estudo:</Title>
          <div>
            <Paragraph>
              <p
                tabIndex={0}
                id="blurElm"
                className="title"
                role="heading"
                aria-label="Nivel 1, Games e Animações, para sextos e sétimos anos"
              >
                <h1>Games e Animações</h1>
                <p> - Nível 1 (6º e 7º Anos)</p>
              </p>
              <p className="desc" tabIndex={0} id="blurElm">Nessa trilha de Games
                e Animação do 6º ao 7º Ano, serão desenvolvidos jogos 2D, desde
                a concepção do tema do jogo, passando pelo seu funcionamento,
                analisando as regras do jogo e desenvolvendo toda a parte visual de
                animação, criação dos personagens e a programação para o funcionamento do jogo...
                <LinkA
                  href="https://www.educacao.pr.gov.br/programacao"
                  tabIndex={0}
                  id="blurElm"
                >Ler Mais
                </LinkA>
              </p>
            </Paragraph>
          </div>
          <span className="line" style={{opacity: .25}}/>
          <div>
          <Paragraph>
            <p
              tabIndex={0}
              id="blurElm"
              className="title"
              role="heading"
              aria-label="Nivel 2, Games e Animações, para oitavos e nonos anos"
            >
              <h1>Games e Animações</h1>
              <p> - Nível 2 (8º e 9º Anos)</p>
            </p>
            <p className="desc" tabIndex={0} id="blurElm">Nessa trilha de Games
              e Animação do 8º ao 9º Ano, serão desenvolvidos jogos 2D, desde a
              concepção do tema do jogo, passando pelo seu funcionamento, analisando
              as regras do jogo e desenvolvendo toda a parte visual de animação,
              criação dos personagens e a programação
              para o funcionamento do jogo... <LinkA
                href="https://www.educacao.pr.gov.br/programacao"
                tabIndex={0}
                id="blurElm"
              >Ler Mais
              </LinkA>
            </p>
          </Paragraph>
          </div>
          <span className="line" style={{opacity: .25}}/>

          <div>
          <Paragraph>
            <p
              tabIndex={0}
              id="blurElm"
              className="title"
              role="heading"
              aria-label="primeira série - FRONT-END com HTML e CSS"
            >
              <h1>FRONT-END com HTML e CSS</h1>
              <p> - 1ª Série, Ensino Médio</p>
            </p>
            <p className="desc" tabIndex={0} id="blurElm">
              Neste curso vamos aprender como a lógica de programação funciona e
              vamos aplicá-la na construção de páginas e site utilizando a tecnologia
              HMTL5 e CSS3, que são as tecnologias de base utilizadas hoje no mercado
              de trabalho... <LinkA
                href="https://www.educacao.pr.gov.br/programacao"
                tabIndex={0}
                id="blurElm">Ler Mais
              </LinkA>
            </p>
          </Paragraph>
          </div>
          <div>
          <span className="line" style={{opacity: .25}}/>

          <Paragraph>
            <p
            tabIndex={0}
            id="blurElm"
            className="title"
            role="heading"
            aria-label="segunda série - Desenvolvimento de MOBILE baseado em JavaScript">
              <h1>Desenvolvimento de MOBILE baseado em JavaScript</h1>
              <p> - 2ª Série, Ensino Médio</p>
            </p>
            <p className="desc" tabIndex={0} id="blurElm">Neste curso vamos aprender
              como a lógica de programação funciona e vamos aplicá-la na construção
              de aplicativos MOBILE, iniciando pelos conceitos do que são WEB APPs,
              planejando como as aplicações podem rodar em diversos tipos de
              equipamentos, como computadores, tablets ou smartphones garantindo
              que os aplicativos sejam utilizados pelo maior número de pessoas possível...
              <LinkA
                href="https://www.educacao.pr.gov.br/programacao"
                tabIndex={0}
                id="blurElm"
              >Ler Mais
              </LinkA>
            </p>
          </Paragraph>
          </div>
          <div>
          <span className="line" style={{opacity: .25}}/>

          <Paragraph>
            <p
              tabIndex={0}
              id="blurElm"
              className="title"
              role="heading"
              aria-label="terceira série, Programação em JAVA"
            >
              <h1>Programação em JAVA</h1>
              <p> - 3ª Série, Ensino Médio</p>
            </p>
            <p className="desc" tabIndex={0} id="blurElm">
              Neste curso, vamos estudar uma das linguagens de programação mais
              robusta, difundida e utilizada ao longo de décadas no mundo da
              programação. O maior exemplo que podemos citar para falar da Linguagem
              de programação JAVA é o sistema Android, ele é desenvolvido nessa
              poderosa linguagem, sendo o sistema mais utilizado em número de
              usuários em todo o mundo... <LinkA
                href="https://www.educacao.pr.gov.br/programacao"
                tabIndex={0}
                id="blurElm">Ler Mais
              </LinkA>
            </p>
          </Paragraph>
          </div>

        </section>
        <span className="line"/>
        <section className="alura">
          <Title
            tabIndex={0}
            id="blurElm"
            aria-label="Sobre o Alura - titulo. ."
          >
            Alura
          </Title>
          <Paragraph tabIndex={0} id="blurElm">
            Contando com uma percepção de Dev em T, isto é, especialista x generalista
            é uma plataforma de cursos online que hoje já conta com mais de 1.200
            cursos, navegue por diversas tecnologia, como UX, Marketing Digital ou
            Data Science, por exemplo. <LinkA
              href="https://www.alura.com.br/"
              tabIndex={0} id="blurElm">Acessar Plataforma
            </LinkA>
          </Paragraph>
        </section>
      </LayoutCp>
    </>
  );
};

export default Home;
