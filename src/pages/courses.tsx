// importações
import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import Header from 'components/Header';
import { useRouter } from 'next/router';
import InputCp from 'components/Inputs/InputCp'

import { Main } from 'styles/pages/Page'

// Criando componente Card dos cursos
const createCardCp = async (name, slug, time) => {
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
      let color; // seta a variavel de cor

      // verificações
      if (getPath?.attributes[0].nodeName !== 'fill' || getPath?.attributes[0].nodeValue === '#031326') {
        color = getPath?.attributes[1].nodeValue // pega a cor desse icone
      } else {
        color = getPath?.attributes[0].nodeValue // pega a cor desse icone
      }

      // seta o background do componente de acordo com a cor recebida
      if (window.innerWidth >= 464) {
        Container.style.background = `linear-gradient(300.31deg, ${color} 39.38%, rgb(var(--BackgroundComponents)) 39.38%)`
      } else {
        Container.style.background = `linear-gradient(0deg, ${color} 31%, rgb(var(--BackgroundComponents)) 31%)`
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
  DurationDesc.textContent  = time + 'h'

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

const Courses: React.FC = () => {
  // estados
  const [courseSection, getCourseSection] = useState(null)
  const [keyWord, setKeyWord] = useState(null)

  // rota / url
  const router = useRouter()

  // variáveis de pesquisa
  let allCourses    = [];
  let allCSearched  = []
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
      setKeyWord(input.value.toLowerCase()) // armazenando pesquisa

      if (event.key === "Enter") {
        searchedCourse(keyWord);
      }
    })
  })

  // pesquisa
  const searchedCourse = async (keyWord) => {
    if(keyWord !== '') {
      allCFiltered.map(async (course) => {
        if (course.nome.toLowerCase().includes(keyWord)) {
          // criando o componente card
          const elmCard = await createCardCp(course.nome, course.slug, course.tempo_estimado)
          return courseSection.appendChild(elmCard) // enviando os cards como resposta ao cliente
        }
      })
    }
    setKeyWord('')
  }

  return (
    <>
      <Header />
      <Main>
        <section className="courses">
          <InputCp
            inputType="text"
            textOptions={{
              iD: "searchElm",
              placeholder: "coloque o nome do curso aqui...",
              onChange: () => {
                courseSection.innerText = ""; // preparando o terreno
              },
              error: 'alertFunc',
              hasIcon: 'search'
            }}
          />
          <div id="courses">

          </div>
        </section>
      </Main>
    </>
  );
};

export default Courses;
