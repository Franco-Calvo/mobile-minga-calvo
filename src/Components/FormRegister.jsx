import React, { useState } from "react";
import axios from "axios";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Spinner from "react-native-loading-spinner-overlay/lib";
import google from "../../assets/Googlee.png";
import { Alert } from "react-native";

export default function FormRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const [loading, setLoading] = useState();

  async function handleSubmit() {
    let data = {
      name: name,
      email: email,
      photo: photo,
      password: password,
    };

    let url = "https://minga-0gy1.onrender.com/auth/signup";
    try {
      setLoading(true);
      await axios.post(url, data);
      console.log("creado");
      setTimeout(() => {
        setLoading(false);
      }, 30);
      Alert.alert(
        "Account created!",
        "Your account has been created successfully."
      );
      navigation.navigate("Home");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.fieldset}>
        <Text style={styles.legend}>Name</Text>
        <View style={styles.legendCont}>
          <TextInput
            style={styles.input}
            id="name"
            name="name"
            required
            onChangeText={(inputText) => setName(inputText)}
          />
        </View>
      </View>

      <View style={styles.fieldset}>
        <Text style={styles.legend}>Email</Text>
        <View style={styles.legendCont}>
          <TextInput
            style={styles.input}
            id="email"
            name="email"
            required
            onChangeText={(inputText) => setEmail(inputText)}
          />
        </View>
      </View>

      <View style={styles.fieldset}>
        <Text style={styles.legend}>Photo</Text>
        <View style={styles.legendCont}>
          <TextInput
            style={styles.input}
            id="photo"
            name="photo"
            required
            onChangeText={(inputText) => setPhoto(inputText)}
          />
        </View>
      </View>

      <View style={styles.fieldset}>
        <Text style={styles.legend}>Password</Text>
        <View style={styles.legendCont}>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            id="password"
            name="password"
            required
            onChangeText={(inputText) => setPassword(inputText)}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Sign up</Text>
        <Spinner
          visible={loading}
          textContent={"Loading..."}
          textStyle={{ color: "#FFF" }}
        />
      </TouchableOpacity>

      <View style={styles.divGoogle}>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
            // handle Google sign up logic here
          }}
        >
          <Image style={styles.googleImg} source={google} />
          <Text style={styles.buttonText2}>Sign up with Google</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.parrafosForm}>
        <Text>
          Already have an account?
          <Text
            style={styles.parrafosFormText}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            {" "}
            Log in
          </Text>
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 15,
    marginTop: 30,
    width: "100%",
  },
  fieldset: {
    display: "flex",
    alignItems: "flex-start",
    width: 410,
    height: 65,
    width: "90%",
    justifyContent: "flex-start",
    background: "#EBEBEB",
    borderBottomWidth: 1,
  },
  legendCont: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  imagen: {
    width: 19,
    height: 19,
    marginBottom: 10,
  },
  googleImg: {
    width: 30,
    height: 30,
  },
  buttonText2: {
    color: "gray",
  },
  legend: {
    marginLeft: 10,
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 1,
    fontWeight: 500,
    color: "#5F5F5F",
  },
  input: {
    width: "90%",
    backgroundColor: "transparent",
    height: 45,
    fontSize: 15,
    padding: 11,
    borderRadius: 5,
  },
  divCheck: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    fontSize: 12,
    lineHeight: 5,
    letterSpacing: 5,
    color: "#1F1F1F",
    gap: 5,
    width: 410,
  },

  button: {
    backgroundColor: "black",
    borderRadius: 10,
    height: 60,
    marginBottom: 20,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "white",
  },

  button2: {
    backgroundColor: "white",
    borderRadius: 10,
    height: 60,
    margin: 15,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    flexDirection: "row",
    gap: 20,
  },

  buttonText3: {
    color: "grey",
  },

  divGoogle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 390,
    height: 16,
    borderRadius: 10,
    background: "#EBEBEB",
    border: 1,
  },

  parrafosForm: {
    display: "flex",
    gap: 17,
    width: "100%",
    marginTop: 20,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  parrafosFormText: {
    color: "#FA0003",
    fontWeight: 700,
  },
});
