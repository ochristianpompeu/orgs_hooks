/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, View} from 'react-native';

const logo = require('../../../assets/logo.png');

function Topo() {
  return (
    <View style={styles.top}>
      <Image source={logo} style={styles.image} />
      <Text style={styles.welcome}>Fala doido!!</Text>
      <Text style={styles.subtitle}>Encontre os melhores produtores</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  top: {
    backgroundColor: '#F6F6F6',
    padding: 16,
  },
  image: {
    width: 70,
    height: 28,
  },
  welcome: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 26,
  },
});

export {Topo};
