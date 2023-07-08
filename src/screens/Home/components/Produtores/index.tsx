/* eslint-disable prettier/prettier */
import {FlatList} from 'react-native';
import {Item} from './Item';
import {Titulo} from './Titulo';
import {useProdutores} from '../../../../hooks/useProdutores';

interface Produtores {
  titulo: string;
  lista: {
    nome: string;
    imagem: any;
    distancia: number;
    estrelas: number;
  }[];
}

function Produtores() {
  const [produtores] = useProdutores();

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
