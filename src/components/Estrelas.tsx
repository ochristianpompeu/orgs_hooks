/* eslint-disable prettier/prettier */
import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Estrela} from './Estrela';

interface EstrelasProps {
  quantidadeOriginal?: number;
  editavel?: boolean;
  grande?: boolean;
}

function Estrelas({
  quantidadeOriginal = 5,
  editavel = false,
  grande = false,
}: EstrelasProps) {
  const [quantidade, setQuantidade] = useState<number>(quantidadeOriginal);

  const RenderEstrleas = () => {
    const listaEstrelas = [];
    for (let i = 0; i < 5; i++) {
      listaEstrelas.push(
        <Estrela
          onPress={() => {
            setQuantidade(i + 1);
          }}
          disabled={!editavel}
          grande={grande}
          preenchida={i < quantidade}
          key={i}
        />,
      );
    }

    return listaEstrelas;
  };

  return (
    <View style={styles.estrelas}>
      <RenderEstrleas />
    </View>
  );
}

const styles = StyleSheet.create({
  estrelas: {
    flexDirection: 'row',
  },
});

export {Estrelas};
