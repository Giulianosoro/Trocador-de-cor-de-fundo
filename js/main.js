// Array com as cores de fundo
var cores = [
    '#ff0000', // vermelho
    '#00ff00', // verde
    '#0000ff', // azul
    '#ffff00', // amarelo
    '#ff00ff', // magenta
    '#00ffff'  // ciano
  ];
  
  // Função para trocar a cor de fundo do body
  function trocarCor() {
    // Gerar um número aleatório entre 0 e o número de cores - 1
    var indice = Math.floor(Math.random() * cores.length);
  
    // Obter a cor correspondente ao índice aleatório
    var novaCor = cores[indice];
  
    // Definir a nova cor de fundo do body
    document.body.style.backgroundColor = novaCor;
  }
  
