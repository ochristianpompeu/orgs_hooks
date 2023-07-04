/* eslint-disable prettier/prettier */
const green = require('../assets/produtores/green.png');
const salad = require('../assets/produtores/salad.png');
const jennyJack = require('../assets/produtores/jenny-jack.png');
const grow = require('../assets/produtores/grow.png');
const potager = require('../assets/produtores/potager.png');

const gerarNumeroAleatorio = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const produtores = {
  titulo: 'Produtores',
  lista: [
    {
      nome: 'Green',
      imagem: green,
      distancia: `${gerarNumeroAleatorio(1, 500)}m`,
      estrelas: gerarNumeroAleatorio(1, 5),
    },
    {
      nome: 'Salad',
      imagem: salad,
      distancia: `${gerarNumeroAleatorio(1, 500)}m`,
      estrelas: gerarNumeroAleatorio(1, 5),
    },
    {
      nome: 'Jenny Jack Farm',
      imagem: jennyJack,
      distancia: `${gerarNumeroAleatorio(1, 500)}m`,
      estrelas: gerarNumeroAleatorio(1, 5),
    },
    {
      nome: 'Grow',
      imagem: grow,
      distancia: `${gerarNumeroAleatorio(1, 500)}m`,
      estrelas: gerarNumeroAleatorio(1, 5),
    },
    {
      nome: 'Potager',
      imagem: potager,
      distancia: `${gerarNumeroAleatorio(1, 500)}m`,
      estrelas: gerarNumeroAleatorio(1, 5),
    },
  ],
};

export {produtores};
