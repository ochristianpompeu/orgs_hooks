/* eslint-disable prettier/prettier */
import {produtores} from '../mocks/produtores';
import {topo} from '../mocks/topo';

const carregaProdutores = () => {
  return produtores;
};

const carregaTopo = () => {
  return topo;
};

export {carregaProdutores, carregaTopo};
