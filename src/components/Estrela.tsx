/* eslint-disable prettier/prettier */
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
const estrela = require('../assets/estrela.png');
const estrelaCinza = require('../assets/estrelaCinza.png');

interface EstrelaProps {
  onPress: () => void;
  disabled?: boolean;
  grande?: boolean;
  preenchida?: boolean;
}

function Estrela({
  onPress,
  disabled = true,
  grande = false,
  preenchida = false,
}: EstrelaProps) {
  const styles = stylesFunction(grande);
  const getImagem = () => {
    if (preenchida) {
      return estrela;
    }

    return estrelaCinza;
  };

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <Image source={getImagem()} style={styles.estrela} />
    </TouchableOpacity>
  );
}

const stylesFunction = (grande: boolean) =>
  StyleSheet.create({
    estrela: {
      width: grande ? 36 : 12,
      height: grande ? 36 : 12,
      marginRight: 2,
    },
  });

export {Estrela};
