// importações
import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import Header from 'components/Header';
import { useRouter } from 'next/router';

import { Main } from 'styles/pages/Page'


// Criando componente Card dos cursos
const createCardCp = (name, slug, time) => {
  // criando elementos
  const Container = document.createElement('div')
  const Course = document.createElement('p')
  const CourseDesc = document.createElement('p')
  const Duration = document.createElement('p')
  const DurationDesc = document.createElement('p')
  const logoCourse = document.createElement('div')
  const imageLogo = document.createElement('img')

  // pegando cor do logo de cada curso
  fetch(`https://www.alura.com.br/assets/api/cursos/${slug}.svg`)
    .then(function (response) {
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
      if (getPath.attributes[0].nodeName !== 'fill' || getPath.attributes[0].nodeValue === '#031326') {
        color = getPath.attributes[1].nodeValue // pega a cor desse icone
      } else {
        color = getPath.attributes[0].nodeValue // pega a cor desse icone

      }

      // seta o background do componente de acordo com a cor recebida
      Container.style.background = `linear-gradient(300.31deg, ${color} 39.37%, rgb(var(--BackgroundComponents)) 39.38%)`
    })

  // adicionando classes e id para facilitar o controle do componente
  Container.classList.add('CardCp')
  Container.id = slug
  Course.classList.add('bold')
  Duration.classList.add('bold')
  logoCourse.classList.add('logoCourse')

  // adicionando a descrição do componente
  Course.textContent        = 'Curso:'
  CourseDesc.textContent    = name
  Duration.textContent      = 'Duração:'
  DurationDesc.textContent  = time + 'h'

  // adicionando a logo do curso
  imageLogo.setAttribute('src', `https://www.alura.com.br/assets/api/cursos/${slug}.svg`)


  // organizando os componentes
  Course.appendChild(CourseDesc)
  Duration.appendChild(DurationDesc)
  logoCourse.appendChild(imageLogo)
  Container.appendChild(Course)
  Container.appendChild(Duration)
  Container.appendChild(logoCourse)

  return Container  // retornando o componente
}

const Courses: React.FC = () => {
  // estados
  const [loading, setLoading] = useState(false)

  // variáveis de pesquisa
  let allCourses    = [];
  let allCFiltered          = [];

  // rota / url
  const router = useRouter()

  // integração com a api da ALura
  fetch('https://www.alura.com.br/api/cursos')
    .then(res => res.json())
    .then(data => allCourses.push(data))

  // pesquisa
  const searchedCourse = async (keyWord) => {
    const sec = document.getElementById('courses') // elemento de resposta

    try {
      setLoading(true)
      sec.innerText = ""; // preparando o terreno

      // armazenando os cursos
      for (let i = 0; i < allCourses[0].length; i++){
        allCFiltered.push(allCourses[0][i])
      }

      // filtrando os cursos
      allCFiltered.map((course) => {
        if (course.nome.toLowerCase().includes(keyWord)) {
          // criando o componente card
          const elmCard = createCardCp(course.nome, course.slug, course.tempo_estimado)
          setTimeout(() => {
            if(keyWord !== '') sec.appendChild(elmCard)// enviando os cards como resposta ao cliente
          }, 2000)
        }
      })
    }
    finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Header />
      <Main>
        <section className="courses">
          <input
            type="text"
            onChange={(evn) => {
              setTimeout(() => {
                searchedCourse(evn.target.value.toLowerCase())
              }, 3000)
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
