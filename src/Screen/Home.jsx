import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Text,
} from "react-native";
import bg from "../../assets/home.png";
import TituloSeccion1Hero1 from "../Components/TituloSeccion1Hero";
import Parrafo1Seccion1Hero1 from "../Components/Parrafo1Seccion1Hero";
import BotonSeccion1Hero1 from "../Components/BotonSeccion1Hero";
import FormLogin from "../Components/FormLogin";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

export default function Seccion1Hero1() {
  let [token, setToken] = useState("");
  useFocusEffect(
    React.useCallback(() => {
      async function getData() {
        try {
          const value = await AsyncStorage.getItem("token");
          setToken(value);
        } catch (error) {
          console.log(error);
        }
      }
      getData();
    }, [])
  );

  return (
    <ImageBackground source={bg} style={styles.backgroundImage}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.seccion}>
          <View style={styles.texto}>
            <TituloSeccion1Hero1 text="The Ultimate Manga Reader" />
            <Parrafo1Seccion1Hero1 text="Discover your next favorite manga" />
            <BotonSeccion1Hero1 text="Read" />
          </View>
        </View>
        {token ? (
          <Text style={styles.textWelcome}>
            Welcome to our amazing manga app! If you're a manga fan and love to
            read your favorite chapters anytime, anywhere, then you've come to
            the right place! Our app gives you access to a wide variety of manga
            and their chapters, whether you prefer shonen, shojo, or seinen.
          </Text>
        ) : (
          <ScrollView style={styles.seccion2}>
            <FormLogin />
          </ScrollView>
        )}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  textWelcome: {
    color: "white",
    fontSize: 20,
    fontWeight: 500,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 300,
    textAlign: "center",
  },
  scrollContainer: {
    flexGrow: 1,
    height: "200%",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  seccion: {
    height: "50%",
    padding: 20,
    justifyContent: "center",
  },
  seccion2: {
    height: "100%",
    backgroundColor: "white",
  },
  texto: {
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
  },
});
