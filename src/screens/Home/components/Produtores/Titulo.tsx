/* eslint-disable prettier/prettier */
import {StyleSheet, Text} from 'react-native';
import Topo from '../TopoClass';
// import Topo from '../TopoClass';

interface TitleProps {
  title: string;
}

function Titulo({title}: TitleProps) {
  return (
    <>
      <Topo />
      <Text style={styles.titulo}>{title}</Text>
    </>
  );
}
const styles = StyleSheet.create({
  titulo: {
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 32,
    margin: 16,
    color: '#464646',
  },
});
export {Titulo};
