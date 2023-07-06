/* eslint-disable prettier/prettier */
import {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

interface EstrelasProps {
  quantidadeOriginal?: number;
  editavel?: boolean;
  grande?: boolean;
}

const estrela = require('../assets/estrela.png');
const estrelaCinza = require('../assets/estrelaCinza.png');

function Estrelas({
  quantidadeOriginal = 5,
  editavel = false,
  grande = false,
}: EstrelasProps) {
  const [quantidade, setQuantidade] = useState<number>(quantidadeOriginal);

  const styles = stylesFunction(grande);
  console.log('Estrelas: ', quantidade);

  const getImage = (index: number) => {
    if (index < quantidade) {
      return estrela;
    }

    return estrelaCinza;
  };
  const RenderEstrleas = () => {
    const listaEstrelas = [];
    for (let i = 0; i < 5; i++) {
      listaEstrelas.push(
        <TouchableOpacity
          key={i}
          onPress={() => {
            setQuantidade(i + 1);
          }}
          disabled={!editavel}>
          <Image source={getImage(i)} style={styles.estrela} />
        </TouchableOpacity>,
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

const stylesFunction = (grande: boolean) =>
  StyleSheet.create({
    estrelas: {
      flexDirection: 'row',
    },
    estrela: {
      width: grande ? 36 : 12,
      height: grande ? 36 : 12,
      marginRight: 2,
    },
  });

export {Estrelas};
