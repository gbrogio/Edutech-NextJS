// navegação Suave

const smoothScrollTo = (endX, endY, duration) => {
  // pegando posição X&Y da pagina
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;

  // pegando distancia X&Y entre "você" e o elemento a ser levado
  const distanceX = endX - startX;
  const distanceY = endY - startY;

  const startTime = new Date().getTime(); // setando tempo 1

  duration = typeof duration !== 'undefined' ? duration : 400; // se a duração não for definida considerar 400

  // Transição
  const easeInOutQuart = (time, from, distance, duration2) => {
    if ((time /= duration2 / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  // Leva você as novas coordenadas
  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime; // setando tempo 2

    // pegando nova posição
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);

    // limpando timer
    if (time >= duration) {
      clearInterval(timer);
    }

    // Scroll
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
}

// Exportando
export default smoothScrollTo;
