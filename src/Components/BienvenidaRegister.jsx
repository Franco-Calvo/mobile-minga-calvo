import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Logomr from '../../assets/Logo2.png';

export default function BienvenidaRegister(props) {
  return (
    <View style={styles.bienvenida}>
      <Image source={Logomr} style={styles.logo} />
      <Text style={styles.welcomeH2}>{props.text} <Text style={styles.span}>{props.text2}</Text></Text>
      <Text style={styles.welcomeP}>Discover manga, manhua and manhwa, track your progress, have fun, read manga</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bienvenida: {
    marginTop:80,
    alignItems: 'center',
    justifyContent: "flex-start",
  },
  logo: {
    width: 150,
    height: 40,
    resizeMode: 'contain',
  },
  welcomeH2: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  span: {
    color: '#29abe2',
  },
  welcomeP: {
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
    marginHorizontal: 20,
  },
});