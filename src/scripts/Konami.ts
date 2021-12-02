// Konami Code (adiciona easter egg no site)
export const KonamiCode = (modalActive) => {
  let allowKeys = []; // teclas pressionadas
  const konamiCode = 'edutech'; // palavra chave
  let tempClear; // limpando "allowKeys"

  document.addEventListener('keydown', (e) => {
    clearTimeout(tempClear); // limpando "allowKeys"
    const keyPress = e.key; //  pga a tecla pressionada

    allowKeys.push(keyPress); // manda as teclas para "allowKeys"

    const allowedKeys = allowKeys.join(''); // pegando teclas

    if (allowedKeys.includes(konamiCode)) { // verificando se foi digitado a sequencia correta
      modalActive(true); // ativando Easter Egg
    }

    // limpando "allowKeys"
    tempClear = setTimeout(() => {
      allowKeys = [];
    }, 1000);
  });
};
