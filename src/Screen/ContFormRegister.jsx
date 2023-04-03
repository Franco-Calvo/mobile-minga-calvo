import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import BienvenidaRegister from '../Components/BienvenidaRegister';
import FormRegister from '../Components/FormRegister';

export default function ContFormRegister({ handleRender }) {
  return (
    <ScrollView style={styles.container}>
      <BienvenidaRegister text="Welcome!" />
      <FormRegister handleRender={handleRender} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 900,
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});