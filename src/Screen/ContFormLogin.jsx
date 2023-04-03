import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import BienvenidaRegister from '../Components/BienvenidaRegister';
import FormLogin from '../Components/FormLogin';

export default function ContFormLogin() {
  return (
    <ScrollView style={styles.container}>
      <BienvenidaRegister text="Welcome!" />
      <FormLogin />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap:30,
    height: "100%",
    backgroundColor: '#FFFFFF',
  },
});