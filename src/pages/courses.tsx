// importações
import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import Header from 'components/Header';
import { useRouter } from 'next/router';
import InputCp from 'components/Inputs/InputCp'

import { Main } from 'styles/pages/Page'

// Criando componente Card dos cursos
const createCardCp = async (name, slug, description, easterEgg, img) => {
  if (easterEgg) {
    // criando elementos
    const Container = document.createElement('div')
    const imageLogo = document.createElement('img')
    const DivText = document.createElement('div')
    const Name = document.createElement('p')
    const NameDesc = document.createElement('p')
    const Desc = document.createElement('p')
    const DescDesc = document.createElement('p')
    const logoImg = document.createElement('div')

    // seta o background do componente de acordo com a cor recebida
    if (window.innerWidth >= 464) {
      Container.style.background = `linear-gradient(300.31deg, rgb(var(--Blue)) 39.38%, rgb(var(--BackgroundComponents)) 39.38%)`
    } else {
      Container.style.background = `linear-gradient(0deg, rgb(var(--Blue)) 21%, rgb(var(--BackgroundComponents)) 21%)`
    }

    // adicionando a logo do curso
    imageLogo.setAttribute('src', img)
    imageLogo.style.borderRadius = '50%';

    // adicionando classes e id para facilitar o controle do componente
    Container.classList.add('CardCp')
    Container.id = 'EasterEggCard'
    Name.classList.add('bold')
    Desc.classList.add('bold')
    logoImg.classList.add('logoCourse')
    DivText.classList.add('descriptionCourse')

    // adicionando a descrição do componente
    Name.textContent        = 'Nome:'
    NameDesc.textContent    = name
    Desc.textContent      = 'Descrição:'
    DescDesc.textContent  = description

    // organizando os componentes
    Name.appendChild(NameDesc)
    Desc.appendChild(DescDesc)
    DivText.appendChild(Name)
    DivText.appendChild(Desc)
    logoImg.appendChild(imageLogo)
    Container.appendChild(DivText)
    Container.appendChild(logoImg)

    return Container  // retornando o componente

  } else {
    // criando elementos
    const Container = document.createElement('div')
    const imageLogo = document.createElement('img')
    const DivText = document.createElement('div')
    const Course = document.createElement('p')
    const CourseDesc = document.createElement('p')
    const Duration = document.createElement('p')
    const DurationDesc = document.createElement('p')
    const logoCourse = document.createElement('div')

    // pegando cor do logo de cada curso
    await fetch(`https://www.alura.com.br/assets/api/cursos/${slug}.svg`)
      .then((response) => {
        switch (response.status) {
          case 200:
            return response.text();
        }
      })
      .then((template) => {
        const parser = new DOMParser(); // cria uma dom propria para o elemento
        const doc = parser.parseFromString(template, 'text/html'); // manda o elemento para a DOM criada
        const svgElm = doc.querySelector('svg'); // pega o icone dentro da DOM
        let getPath = svgElm.querySelector('path[fill]') // paga o elemento path que contenha um fill
        let getPathNNone = svgElm.querySelectorAll('path[fill]')[2]
        let color; // seta a variavel de cor

        // verificações
        if (getPath?.attributes[0].nodeValue === 'none') {
          color = getPathNNone?.attributes[0].nodeValue

        } else if (getPath?.attributes[0].nodeName !== 'fill' ||
          getPath?.attributes[0].nodeValue === '#031326'
        ) {
          color = getPath?.attributes[1].nodeValue // pega a cor desse icone

        } else {
          color = getPath?.attributes[0].nodeValue // pega a cor desse icone
        }

        if (!color?.includes('#')) {
          color = 'rgb(var(--Pink))'
        }

        // seta o background do componente de acordo com a cor recebida
        if (window.innerWidth >= 464) {
          Container.style.background = `linear-gradient(300.31deg, ${color} 39.38%, rgb(var(--BackgroundComponents)) 39.38%)`
        } else {
          Container.style.background = `linear-gradient(0deg, ${color} 21%, rgb(var(--BackgroundComponents)) 21%)`
        }
      })
    // adicionando a logo do curso
    imageLogo.setAttribute('src', `https://www.alura.com.br/assets/api/cursos/${slug}.svg`)

    // adicionando classes e id para facilitar o controle do componente
    Container.classList.add('CardCp')
    Container.id = slug
    Course.classList.add('bold')
    Duration.classList.add('bold')
    logoCourse.classList.add('logoCourse')
    DivText.classList.add('descriptionCourse')

    // adicionando a descrição do componente
    Course.textContent        = 'Curso:'
    CourseDesc.textContent    = name
    Duration.textContent      = 'Duração:'
    DurationDesc.textContent  = description + 'h'

    // organizando os componentes
    Course.appendChild(CourseDesc)
    Duration.appendChild(DurationDesc)
    DivText.appendChild(Course)
    DivText.appendChild(Duration)
    logoCourse.appendChild(imageLogo)
    Container.appendChild(DivText)
    Container.appendChild(logoCourse)

    return Container  // retornando o componente
  }
}

const Courses: React.FC = () => {
  // estados
  const [courseSection, getCourseSection] = useState(null)

  // rota / url
  const router = useRouter()

  // variáveis de pesquisa
  let keyWord       = '';
  let allCourses    = [];
  let allCSearched  = [];
  let allCFiltered  = [];

  // integração com a api da Alura
  fetch('https://www.alura.com.br/api/cursos')
    .then(res => res.json())
    .then(data => {
      allCourses.push(data)
      for (let i = 0; i < allCourses[0].length; i++){
        allCSearched.push(allCourses[0][i])
        allCFiltered = allCSearched.filter((item, duplicate) => allCSearched.indexOf(item) === duplicate);
      }
    })

  useEffect(() => {
    const divC = document.getElementById('courses') // elemento de resposta
    getCourseSection(divC) // armazenando

    // pega o input
    var input = document.getElementById("searchElm") as HTMLInputElement;

    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        if (divC.children.length === 0) {
          searchedCourse(keyWord);
        }
      }
    })
  })

  // pesquisa
  const searchedCourse = async (keyWord) => {
    if(keyWord !== '') {
      allCFiltered.map(async (course) => {
        if (course.nome.toLowerCase().includes(keyWord)) {
          // criando o componente card
          const elmCard = await createCardCp(course.nome, course.slug, course.tempo_estimado, false, null)
          return courseSection.appendChild(elmCard) // enviando os cards como resposta ao cliente
        }
      })

      if (keyWord === 'gbrogio') {
        const elmCard = await createCardCp(
          'Guilherme Brogio Macedo da Silva',
          'https://github.com/gbrogio',
          'Desenvolvedor Front End em React, NextJs',
          true,
          'https://avatars.githubusercontent.com/u/79169549?v=4'
        )

        return courseSection.appendChild(elmCard) // enviando os cards como resposta ao cliente
      }
      if (keyWord === 'alura') {
        const elmCard = await createCardCp(
          'Alura',
          'https://alura.com',
          'Plataforma de Cursos Online',
          true,
          'https://www.alura.com.br/assets/favicon.1636535197.ico'
        )

        return courseSection.appendChild(elmCard) // enviando os cards como resposta ao cliente
      }
    }
  }

  return (
    <>
      <Header />
      <Main>
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
                '1º ano - Ensino Médio',
                '2º ano - Ensino Médio',
                '3º ano - Ensino Médio',
              ]
            }}
          />
          <div id="courses">

          </div>
        </section>
        <div className="padding"></div>
      </Main>
    </>
  );
};

export default Courses;
