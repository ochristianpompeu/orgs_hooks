/* eslint-disable prettier/prettier */
import {FlatList} from 'react-native';
import {Item} from './Item';
import {carregaProdutores} from '../../../../services/dataLoad';
import {useEffect, useState} from 'react';
import {Titulo} from './Titulo';

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
    const produtoresLoaded: Produtores = carregaProdutores();
    setProdutores(produtoresLoaded);
    console.log(produtores);
  }, [produtores]);
  return (
    <FlatList
      data={produtores.lista}
      renderItem={({item}) => (
        <Item
          nome={item.nome}
          distancia={item.distancia}
          estrelas={item.estrelas}
          imagem={item.imagem}
        />
      )}
      keyExtractor={({nome}) => nome}
      ListHeaderComponent={<Titulo title={produtores.titulo} />}
    />
  );
}

export default Produtores;
