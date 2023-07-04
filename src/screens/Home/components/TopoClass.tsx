/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {carregaTopo} from '../../../services/dataLoad';
const logo = require('../../../assets/logo.png');

class Topo extends React.Component {
  state = {
    topo: {
      boasVindas: '',
      legenda: '',
    },
  };

  atualizaTopo() {
    const retornoTopo = carregaTopo();
    this.setState({topo: retornoTopo});
  }

  componentDidMount(): void {
    this.atualizaTopo();
  }

  render() {
    return (
      <View style={styles.top}>
        <Image source={logo} style={styles.image} />
        <Text style={styles.welcome}>{this.state.topo.boasVindas}</Text>
        <Text style={styles.subtitle}>{this.state.topo.legenda}</Text>
      </View>
    );
  }
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

export default Topo;
