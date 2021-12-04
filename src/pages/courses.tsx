// importações
import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import LayoutCp from 'components/Layout';
import router, { useRouter } from 'next/router';
import InputCp from 'components/Inputs/InputCp';
import {setCookie, parseCookies} from 'nookies';
import createCardCp from 'components/CardCp';
import { InvalidIcon } from 'style-components/Icons';

const Courses: React.FC = () => {
  // estados
  const [ErrMsg, setErrMsg] = useState(false)
  const [hasLoad, setHasLoad] = useState(false)
  const [courseSection, getCourseSection] = useState(null)

  // rota / url
  const router = useRouter()

  // variáveis de pesquisa
  let keyWord       = '';
  let allCourses    = [];
  let allCSearched  = [];
  let allCFiltered  = [];

  useEffect(() => {
    const divC = document.getElementById('courses') // elemento de resposta
    const selectSerie = document.getElementById('selectBar') as HTMLSelectElement;
    setHasLoad(true)
    getCourseSection(divC) // armazenando

    selectSerie.addEventListener('change', () => {
      const selectValue = selectSerie.value
      const routerSearch = selectValue.toLowerCase()
        .replace(/º/g, '')
        .replace(/é/g, 'e')
        .replace(/\s/g, '+')

      if (selectValue !== 'Selecione sua Série...') {
        router.push('/courses' + '?=' + routerSearch).then(() => {
          setCookie(null, 'SEARCH_COOKIE', selectValue, {
            maxAge: 86400 * 7 * 4 * 12,
            path: '/',
          });
          router.reload()
        })
      } else {
        router.push('/courses').then(() => {
          setCookie(null, 'SEARCH_COOKIE', selectValue, {
            maxAge: 86400 * 7 * 4 * 12,
            path: '/',
          });
          router.reload()
        })
      }
    }, false)

    selectSerie.value = parseCookies().SEARCH_COOKIE
    // pega o input
    const searchElm = document.getElementById('searchElm') as HTMLInputElement;
    const searchBtnSvg = document.getElementById('searchBtnSvg')
    const cardFocus = (keyWord) => {
      const Card = document.querySelector('div.CardCp')
      if (Card) {
        setTimeout(() => {
          const cardId = Card.attributes[3].textContent
          document.getElementById(cardId).focus()
        }, 1000)
      } else if (keyWord === '') {
        document.getElementById('notCourse').focus()
      }
    }
    const searchCourse = () => {
      if (divC.children.length === 0) {
        searchedCourse(keyWord);
        cardFocus(keyWord);
      } else {
        cardFocus(keyWord);
      }
    }
    searchBtnSvg.addEventListener('click', () => {
      searchCourse()
    })
    searchElm.addEventListener('keydown', (event) => {
      if (event.key === "Enter") {
        searchCourse()
      }
    })

    setInterval(() => {
      const divNC = document.getElementById('notCourse') // elemento de resposta
      if (divC.children.length === 0) {
        divNC.style.display = 'flex';
      } else {
        divNC.style.display = 'none';
      }
    }, 1000)

  })

  // integrações
  const acceptedValues = {
    anoensinomedio1(data) {
      allCourses.push(data[0])
      setCookie(null, 'SEARCH_COOKIE', "1º ano Ensino Médio", {
        maxAge: 86400 * 7 * 4 * 12,
        path: '/',
      });
    },
    anoensinomedio2(data) {
      allCourses.push(data[1])
      setCookie(null, 'SEARCH_COOKIE', "2º ano Ensino Médio", {
        maxAge: 86400 * 7 * 4 * 12,
        path: '/',
      });
    },
    anoensinomedio3(data) {
      allCourses.push(data[2])
      setCookie(null, 'SEARCH_COOKIE', "3º ano Ensino Médio", {
        maxAge: 86400 * 7 * 4 * 12,
        path: '/',
      });
    },
    ano9(data) {
      allCourses.push(data[6])
      setCookie(null, 'SEARCH_COOKIE', "9º ano", {
        maxAge: 86400 * 7 * 4 * 12,
        path: '/',
      });
    },
    ano8(data) {
      allCourses.push(data[5])
      setCookie(null, 'SEARCH_COOKIE', "8º ano", {
        maxAge: 86400 * 7 * 4 * 12,
        path: '/',
      });
    },
    ano7(data) {
      allCourses.push(data[4])
      setCookie(null, 'SEARCH_COOKIE', "7º ano", {
        maxAge: 86400 * 7 * 4 * 12,
        path: '/',
      });
    },
    ano6(data) {
      allCourses.push(data[3])
      setCookie(null, 'SEARCH_COOKIE', "6º ano", {
        maxAge: 86400 * 7 * 4 * 12,
        path: '/',
      });
    },
  }
  const removeDuplicate = () => {
    for (let i = 0; i < allCourses[0].length; i++){
      allCSearched.push(allCourses[0][i])
      allCFiltered = allCSearched.filter((item, duplicate) => allCSearched.indexOf(item) === duplicate);
    }
  }
  if (router.asPath === '/courses') {
    setCookie(null, 'SEARCH_COOKIE', 'Selecione sua Série...', {
      maxAge: 86400 * 7 * 4 * 12,
      path: '/',
    });

    // api alura
    fetch('https://www.alura.com.br/api/cursos')
      .then(res => res.json())
      .then(data => {
        allCourses.push(data)
        removeDuplicate()
      })
  } else { // meu json
    fetch('/json/serie-courses.json')
      .then(res => res.json()
      ).then(data => {
        const number = router.asPath.replace(/[^0-9]/g, '')
        const configSearch = router.asPath
          .replace(/^((ftp|http|https):\/\/)?(www.|)?([A-z&0-9./]*)/g, '')
          .replace(/[?=+]/g, '')
          .replace(/[0-9]/g, '')
          .replace(/o([^o]*)$/g, 'o') + number

        const pushValues = acceptedValues[configSearch]
        pushValues(data)

        removeDuplicate()
      })
  }
  // pesquisa
  const searchedCourse = async (keyWord) => {
    if(keyWord !== '') {
      allCFiltered.map(async (course) => {
        if (course.nome.toLowerCase().includes(keyWord)) {
          // criando o componente card
          const elmCard = await createCardCp(
            false,
            null,
            null,
            course.nome,
            course.slug,
            course.tempo_estimado,
            router
          )
          keyWord = ''
          return courseSection.appendChild(elmCard) // enviando os cards como resposta ao cliente
        }
      })
      // easterEgg, easterEggImg, pushTo, name, slug, description, router
      if (keyWord === 'gbrogio') {
        const elmCard = await createCardCp(
          true,
          'https://avatars.githubusercontent.com/u/79169549?v=4',
          'https://github.com/gbrogio',
          'Guilherme Brogio Macedo da Silva',
          null,
          'Desenvolvedor Front End em React, NextJs',
          router
        )

        return courseSection.appendChild(elmCard) // enviando os cards como resposta ao cliente
      }
      if (keyWord === 'alura') {
        const elmCard = await createCardCp(
          true,
          'https://www.alura.com.br/assets/favicon.1636535197.ico',
          'https://alura.com',
          'Alura',
          null,
          'Plataforma de Cursos Online',
          router,
        )

        return courseSection.appendChild(elmCard) // enviando os cards como resposta ao cliente
      }
    }
  }

  return (
    <>
      <LayoutCp>
        <section className="courses">
          <InputCp
            inputType="search"
            textOptions={{
              iD: "searchElm",
              placeholder: "coloque o nome do curso aqui...",
              onChange: (evn) => {
                courseSection.innerText = ""; // preparando o terreno
                keyWord = evn.target.value.toLowerCase()
              },
              error: 'alertFunc',
              hasIcon: 'search'
            }}
            selectOptions={{
              hasIcon: false,
              value: [
                'Selecione sua Série...',
                '6º ano',
                '7º ano',
                '8º ano',
                '9º ano',
                '1º ano Ensino Médio',
                '2º ano Ensino Médio',
                '3º ano Ensino Médio',
              ]
            }}
          />

          <div id="courses">
          </div>
          {hasLoad && (<div id="notCourse"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
                tabIndex={0}
              >
                <h1 style={{fontSize: '3rem', textAlign: 'center'}}>Série/Curso não Fornecido ou Inválido!</h1>
                <p style={{fontSize: '1.5rem', opacity: .7, textAlign: 'center'}}>Forneça os dados corretamente acima</p>
                <button onClick={() => {
                  document.getElementById("searchElm").focus()
                }}className="invisible">Voltar ao input</button>
                <InvalidIcon style={{marginTop: '2rem'}}/>
            </div>
          )}

        </section>
        <div className="padding"></div>
      </LayoutCp>
    </>
  );
};

export default Courses;
