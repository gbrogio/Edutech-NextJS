/* eslint no-use-before-define: "off", @typescript-eslint/no-use-before-define: "off" */

// importações
import React, { useState, useEffect } from 'react';
import LayoutCp from 'components/Layout';
import { useRouter } from 'next/router';
import InputCp from 'components/Inputs/InputCp';
import { setCookie, parseCookies } from 'nookies';
import createCardCp from 'components/CardCp';
import { InvalidIcon } from 'style-components/Icons';

const Courses: React.FC = () => {
  // estados
  const [hasLoad, setHasLoad] = useState(false);
  const [courseSection, getCourseSection] = useState(null);

  // rota / url
  const router = useRouter();

  // variáveis de pesquisa
  let keyWord = '';
  const allCourses = [];
  const allCSearched = [];
  let allCFiltered = [];

  useEffect(() => {
    const divC = document.getElementById('courses'); // elemento de resposta
    const selectSerie = document.getElementById('selectBar') as HTMLSelectElement; // elemento escolha de série
    setHasLoad(true); // avisa se o front ja carregou
    getCourseSection(divC); // armazenando

    // define o valor do select de acordo com a serie selecionada
    selectSerie.addEventListener('change', () => {
      const selectValue = selectSerie.value; // pega o valor atual
      const routerSearch = selectValue.toLowerCase() // transforma o valor em minusculo
        .replace(/º/g, '') // retira o sinal º
        .replace(/é/g, 'e') // substitui o é por e
        .replace(/\s/g, '+'); // substitui os espaços por +

      if (selectValue !== 'Selecione sua Série...') { // se tiver uma série selecionada
        router.push(`${'/courses?='}${routerSearch}`).then(() => { // redirecione o cliente e
          setCookie(null, 'SEARCH_COOKIE', selectValue, { // seta o cookie de pesquisa para o valor atual
            maxAge: 86400 * 7 * 4 * 12,
            path: '/',
          });
          router.reload(); // recarrega a pagina
        });
      } else { // se não tiver uma série selecionada
        router.push('/courses').then(() => { // empurre para a rota default e
          setCookie(null, 'SEARCH_COOKIE', selectValue, { // seta o cookie de pesquisa para o valor default
            maxAge: 86400 * 7 * 4 * 12,
            path: '/',
          });
          router.reload(); // recarrega a pagina
        });
      }
    }, false);

    selectSerie.value = parseCookies().SEARCH_COOKIE; /* define o valor do select
    para o valor presente nos cookies */

    // pega o input de pesquisa
    const searchElm = document.getElementById('searchElm') as HTMLInputElement;
    // pega o botão de pesquisa
    const searchBtnSvg = document.getElementById('searchBtnSvg');

    // alteração do focos
    const cardFocus = (word) => {
      const Card = document.querySelector('div.CardCp');
      if (Card) {
        setTimeout(() => {
          const cardId = Card.attributes[3].textContent; // pega o id do em questão
          document.getElementById(cardId).focus(); /* e define o foco no elemento
          que contenha esse id */
        }, 1500);
      } else if (word === '' || word === ' ') { //  se não houver pesquisa
        document.getElementById('notCourse').focus(); // define o doco no elemento div#notCourse
      }
    };
    // define a função de pesquisar
    const searchCourse = (isBtn: boolean) => {
      if (divC.children.length === 0) {
        if (isBtn) { // se for o botão de busca clicado
          searchedCourse(keyWord, true); // executa a pesquisa
        } else {
          searchedCourse(keyWord, false); // executa a pesquisa
        }
        cardFocus(keyWord); // define o foco
      } else {
        cardFocus(keyWord); // define o foco
      }
    };

    // executam a função de pesquisar se
    searchBtnSvg.addEventListener('click', () => { // houver click
      searchCourse(true);
    });
    searchElm.addEventListener('keydown', (event) => { // ou apertar a tecla enter
      if (event.key === 'Enter') {
        searchCourse(false);
      }
    });
    // dependendo da resposta habilitar/desabilitar div#notCourse
    setInterval(() => {
      const divNC = document.getElementById('notCourse'); // elemento de resposta
      if (divC.children.length === 0) {
        divNC.style.display = 'flex'; // habilitar
      } else {
        divNC.style.display = 'none'; // desabilitar
      }
    }, 1000);
  });

  // integrações com api
  // define o que cada valor retornado vaz - infelizmente incompleto
  const acceptedValues = {
    anoensinomedio1(data) {
      allCourses.push(data[0]);
      setCookie(null, 'SEARCH_COOKIE', '1º ano Ensino Médio', {
        maxAge: 86400 * 7 * 4 * 12,
        path: '/',
      });
    },

    anoensinomedio2(data) {
      allCourses.push(data[1]);
      setCookie(null, 'SEARCH_COOKIE', '2º ano Ensino Médio', {
        maxAge: 86400 * 7 * 4 * 12,
        path: '/',
      });
    },
    anoensinomedio3(data) {
      allCourses.push(data[2]);
      setCookie(null, 'SEARCH_COOKIE', '3º ano Ensino Médio', {
        maxAge: 86400 * 7 * 4 * 12,
        path: '/',
      });
    },
    // Não foi possivel encontrar os cursos para as séries abaixo
    ano9(data) {
      allCourses.push(data[6]);
      setCookie(null, 'SEARCH_COOKIE', '9º ano', {
        maxAge: 86400 * 7 * 4 * 12,
        path: '/',
      });
    },
    ano8(data) {
      allCourses.push(data[5]);
      setCookie(null, 'SEARCH_COOKIE', '8º ano', {
        maxAge: 86400 * 7 * 4 * 12,
        path: '/',
      });
    },
    ano7(data) {
      allCourses.push(data[4]);
      setCookie(null, 'SEARCH_COOKIE', '7º ano', {
        maxAge: 86400 * 7 * 4 * 12,
        path: '/',
      });
    },
    ano6(data) {
      allCourses.push(data[3]);
      setCookie(null, 'SEARCH_COOKIE', '6º ano', {
        maxAge: 86400 * 7 * 4 * 12,
        path: '/',
      });
    },
  };
  // filtrando cursos iguais e os armazenando
  const removeDuplicate = () => {
    for (let i = 0; i < allCourses[0].length; i++) {
      allCSearched.push(allCourses[0][i]);
      allCFiltered = allCSearched;
    }
  };
  // faz a verificação para executar a procura pela api a api
  if (router.asPath === '/courses') { // caso não tenha serie
    // defina o cookie serie para o estado default
    setCookie(null, 'SEARCH_COOKIE', 'Selecione sua Série...', {
      maxAge: 86400 * 7 * 4 * 12,
      path: '/',
    });

    // e faça a integração com a api alura - https://alura.com/api/cursos
    fetch('https://www.alura.com.br/api/cursos')
      .then((res) => res.json())
      .then((data) => {
        allCourses.push(data);
        removeDuplicate();
      });
  } else { // caso tenha uma serie selecionada
    // pegue o numero da serie pesquisada
    const number = router.asPath.replace(/[^0-9]/g, '');
    // e transforme a pequisa no formato anoensinomedio[number] ou ano[number]
    const configSearch = router.asPath
      .replace(/^((ftp|http|https):\/\/)?(www.|)?([A-z&0-9./]*)/g, '') // regex parte da url
      .replace(/[?=+]/g, '') // retira o sinal de pesquisa
      .replace(/[0-9]/g, '') // retira o numero
      .replace(/o([^o]*)$/g, 'o') + number; // pegue a ultima letra e adicione o [numero]

    // e faça a integração com o meu json - /json/serie-courses.json
    fetch('/json/serie-courses.json')
      .then((res) => res.json())
      .then((data) => {
        const pushValues = acceptedValues[configSearch];
        pushValues(data);

        removeDuplicate();
      });
  }
  // pesquisa
  const createCardFunc = async (course) => {
    // criando o componente card
    const elmCard = await createCardCp(
      false,
      null,
      null,
      course.nome,
      course.slug,
      course.tempo_estimado,
      router,
    );
    // colocando os cards na pagina
    const setElement = await courseSection.appendChild(elmCard);

    return setElement; // enviando os cards como resposta ao cliente
  };
  const searchedCourse = async (word: string, showAllCurses: boolean) => {
    if ((word === '' || word === ' ') && showAllCurses) {
      allCSearched.map((course) => {
        createCardFunc(course);
        word = '';
      });
    }
    if (word !== '') {
      allCFiltered.map((course) => {
        if (course.nome.toLowerCase().includes(word)) {
          createCardFunc(course);
          word = '';
        }
      });
      if (word === 'gbrogio') {
        // criando o componente card
        const elmCard = await createCardCp(
          true,
          'https://avatars.githubusercontent.com/u/79169549?v=4',
          'https://github.com/gbrogio',
          'Guilherme Brogio Macedo da Silva',
          null,
          'Desenvolvedor Front End em React, NextJs',
          router,
        );

        courseSection.appendChild(elmCard); // enviando os cards como resposta ao cliente
      }
      if (word === 'alura') {
        // criando o componente card
        const elmCard = await createCardCp(
          true,
          'https://www.alura.com.br/assets/favicon.1636535197.ico',
          'https://alura.com',
          'Alura',
          null,
          'Plataforma de Cursos Online',
          router,
        );

        courseSection.appendChild(elmCard); // enviando os cards como resposta ao cliente
      }
    }
  };

  return (
    <LayoutCp footer={false}>
      <section className="courses">
        <InputCp
          inputType="search"
          textOptions={{
            iD: 'searchElm',
            placeholder: 'coloque o nome do curso aqui...',
            onChange: (evn) => {
              courseSection.innerText = ''; // preparando o terreno
              keyWord = evn.target.value.toLowerCase();
            },
            error: 'alertFunc',
            hasIcon: 'search',
          }}
          selectOptions={{
            hasIcon: false,
            value: [
              'Selecione sua Série...',
              // '6º ano', // Não foi possivel encontrar os cursos para essa série
              // '7º ano', // Não foi possivel encontrar os cursos para essa série
              // '8º ano', // Não foi possivel encontrar os cursos para essa série
              // '9º ano', // Não foi possivel encontrar os cursos para essa série
              '1º ano Ensino Médio',
              '2º ano Ensino Médio',
              '3º ano Ensino Médio',
            ],
          }}
        />

        <div id="courses" />
        {hasLoad && (
          <div
            id="notCourse"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            tabIndex={0}
          >
            <h1 style={{ fontSize: '3rem', textAlign: 'center' }}>Série/Curso não Fornecido ou Inválido!</h1>
            <p style={{ fontSize: '1.5rem', opacity: 0.7, textAlign: 'center' }}>Forneça os dados corretamente acima</p>
            <button
              type="button"
              onClick={() => {
                document.getElementById('searchElm').focus();
              }}
              className="invisible"
            >
              Voltar ao input
            </button>
            <InvalidIcon style={{ marginTop: '2rem' }} />
          </div>
        )}
      </section>
      <div className="padding" />
    </LayoutCp>
  );
};

export default Courses;
