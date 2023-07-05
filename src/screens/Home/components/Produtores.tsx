/* eslint-disable prettier/prettier */
import {Text} from 'react-native';

import {carregaProdutores} from '../../../services/dataLoad';
import {useEffect, useState} from 'react';

interface Produtores {
  titulo: string;
  lista: {
    nome: string;
    imagem: any;
    distancia: string;
    estrelas: number;
  }[];
}

function Produtores() {
  const [produtores, setProdutores] = useState<Produtores>({
    titulo: '',
    lista: [
      {
        nome: '',
        imagem: '',
        distancia: '',
        estrelas: 0,
      },
    ],
  });
  useEffect(() => {
    const produtoresLoaded = carregaProdutores();
    setProdutores(produtoresLoaded);
    console.log(produtores);
  }, [produtores]);

  return (
    <>
      <Text>{produtores.titulo}</Text>
    </>
  );
}

export {Produtores};
