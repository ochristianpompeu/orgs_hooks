/* eslint-disable prettier/prettier */
import {useEffect, useState} from 'react';
import {carregaProdutores} from '../services/dataLoad';

interface Produtor {
  nome: string;
  imagem: any;
  distancia: string;
  estrelas: number;
}
interface Produtores {
  titulo: string;
  lista: Produtor[];
}
function useProdutores() {
  const [produtores, setProdutores] = useState<Produtores>({
    titulo: '',
    lista: [],
  });

  useEffect(() => {
    const produtoresLoaded: Produtores = carregaProdutores();
    setProdutores(produtoresLoaded);
  }, []);
  return [produtores];
}

export {useProdutores};
