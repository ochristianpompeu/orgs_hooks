/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';

interface ItemProps {
  nome?: string;
  imagem?: any;
  distancia?: string;
  estrelas?: number;
}

function Item({nome, imagem = null, distancia = '', estrelas = 0}: ItemProps) {
  return (
    <View style={styles.item}>
      <Text>{nome}</Text>
      {/* <Text>{distancia}</Text>
      <Text>{estrelas}</Text>
      <Image source={imagem} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#464646',
    padding: 16,
    marginVertical: 10,
  },
});

export {Item};
