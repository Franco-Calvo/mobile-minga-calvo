import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function TituloSeccion1Hero1(props) {
  return (
    <Text style={styles.titulo}>{props.text || props.children}</Text>
  );
}

const styles = StyleSheet.create({
  titulo: {
    color: "white",
    fontSize: 44,
    textAlign: "center",
    fontWeight: 'bold',
    marginVertical: 10,
  },
});