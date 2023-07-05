/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, View} from 'react-native';

interface ItemProps {
  nome?: string;
  imagem?: any;
  distancia?: string;
  estrelas?: number;
}

function Item({nome, imagem = null, distancia = '', estrelas = 0}: ItemProps) {
  return (
    <View style={styles.item}>
      <Image source={imagem} accessibilityLabel={nome} style={styles.imagem} />
      <View style={styles.data}>
        <Text style={styles.name}>{nome}</Text>
        <Text style={styles.distance}>{distancia}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#F6F6F6',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
    flexDirection: 'row',
    gap: 10,
    // Sombra no Android
    elevation: 4,
    // Sombra no IOS
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  imagem: {
    width: 48,
    height: 48,
    borderRadius: 6,
    marginVertical: 16,
    marginLeft: 16,
  },
  data: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
    marginLeft: 8,
    marginRight: 16,
  },
  name: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  distance: {
    fontSize: 12,
    lineHeight: 19,
  },
});

export {Item};
