// Criando componente Card dos cursos

// Background Responsivo
const background = (color) => {
  const bg = `linear-gradient(300.31deg, ${color} 39.38%, rgb(var(--BackgroundComponents)) 39.38%)`
  const bg2 = `linear-gradient(0deg, ${color} 21%, rgb(var(--BackgroundComponents)) 21%)`

  return {bg, bg2}
}

// criando evento de click
const PushUrl = (Container, router, URL) => {
  Container.addEventListener('click', () => {
    router.push(URL)
  })
}


const createCardCp = async (easterEgg, easterEggImg, pushTo, name, slug, description, router) => {
  let URL = `https://cursos.alura.com.br/course/${slug}`

  // criando elementos
  const Container = document.createElement('div')
  const imageLogo = document.createElement('img')
  const DivText = document.createElement('div')
  const Name = document.createElement('p')
  const NameDesc = document.createElement('p')
  const Desc = document.createElement('p')
  const TextDesc = document.createElement('p')
  const logoImg = document.createElement('div')

  // adicionando classes e id para facilitar no controle do componente
  Container.classList.add('CardCp')
  Name.classList.add('bold')
  Desc.classList.add('bold')

  NameDesc.textContent = name

  // atributos de acessibilidade
  Container.setAttribute('role', 'link');
  Container.tabIndex = 0


  // adicionando classes e id para facilitar no controle do componente
  logoImg.classList.add('logoImg')
  DivText.classList.add('descText')



  if (easterEgg) {
    URL = pushTo

    // seta o background do componente de acordo com a cor recebida
    const {bg, bg2} = background('rgb(var(--Blue))') // pegando background
    if (window.innerWidth >= 464) {
      Container.style.background = bg
    } else {
      Container.style.background = bg2
    }

    // adicionando a img
    imageLogo.setAttribute('src', easterEggImg)
    imageLogo.style.borderRadius = '50%';

    // adicionando classes e id para facilitar no controle do componente
    Container.id = 'CardCp EasterEggCard'

    // adicionando a descrição do componente
    Name.textContent        = 'Nome:'
    Desc.textContent      = 'Descrição:'
    TextDesc.textContent  = description

    PushUrl(Container, router, URL) // criando evento de click

    // ordenando elementos
    Name.appendChild(NameDesc)
    Desc.appendChild(TextDesc)
    DivText.appendChild(Name)
    DivText.appendChild(Desc)
    logoImg.appendChild(imageLogo)
    Container.appendChild(DivText)
    Container.appendChild(logoImg)
    return Container  // retornando o componente
  }

  const URLSvg = `https://www.alura.com.br/assets/api/cursos/${slug}.svg`

  // pegando cor do logo de cada curso
  await fetch(URLSvg)
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
      let getPathNoNone = svgElm.querySelectorAll('path[fill]')[2]
      let color; // seta a variavel de cor

      // verificações
      if (getPath?.attributes[0].nodeValue === 'none') {
        color = getPathNoNone?.attributes[0].nodeValue

      } else if (
        getPath?.attributes[0].nodeName !== 'fill' ||
        getPath?.attributes[0].nodeValue === '#031326'
      ) {
        color = getPath?.attributes[1].nodeValue // pega a cor desse icone

      } else {
        color = getPath?.attributes[0].nodeValue // pega a cor desse icone
      }
      if (!color?.includes('#')) {
        color = 'rgb(var(--Orange))'
      }

      const {bg, bg2} = background(color) // pegando background

      // seta o background do componente de acordo com a cor recebida
      if (window.innerWidth >= 464) {
        Container.style.background = bg
      } else {
        Container.style.background = bg2
      }
    })

  // adicionando a logo do curso
  imageLogo.setAttribute('src', URLSvg)

  // adicionando a descrição do componente
  Name.textContent        = 'Curso:'
  Desc.textContent      = 'Duração:'
  NameDesc.textContent    = name
  TextDesc.textContent  = description + 'h'

  // adicionando classes e id para facilitar o controle do componente
  Container.id = 'CardCp ' + slug

  PushUrl(Container, router, URL) // criando evento de click

  // ordenando elementos
  Name.appendChild(NameDesc)
  Desc.appendChild(TextDesc)
  DivText.appendChild(Name)
  DivText.appendChild(Desc)
  logoImg.appendChild(imageLogo)
  Container.appendChild(DivText)
  Container.appendChild(logoImg)

  return Container  // retornando o componente
}

export default createCardCp
