import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import pr from "../../assets/profile.png";
import bannerProfile from "../../assets/bannerProfile.png";

export default function Profile() {
  const [user, setUser] = useState(null);
  console.log(user);
  useEffect(() => {
    const getUser = async () => {
      const userData = await AsyncStorage.getItem("user");
      setUser(JSON.parse(userData));
    };
    getUser();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={bannerProfile} style={styles.bannerProfile} />
      {user ? (
        <View style={styles.userContainer}>
          <Text style={styles.userTitle}>Hi {user.name}!</Text>
          <Image style={styles.userPhoto} source={{ uri: user.photo }} />
          <Text style={styles.userText}>Nombre: {user.name}</Text>
          <Text style={styles.userEmail}>Email: {user.email}</Text>
        </View>
      ) : (
        <View style={styles.loggedOutContainer}>
          <Text style={styles.loggedOutText}>You are not logged in</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => alert("login")}
          >
            <Text style={styles.buttonText}>Log in</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(10,10,10)",
  },
  userContainer: {
    alignItems: "center",
    gap: 15,
  },
  userTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  userText: {
    justifyContent: "center",
    textAlignVertical: "center",
    alignItems: "center",
    textAlign: "center",
    height: 30,
    width: 290,
    backgroundColor: "rgba(255,255,255,1)",
    fontSize: 15,
    color: "#000",
    borderRadius: 15,
  },
  userEmail: {
    justifyContent: "center",
    textAlignVertical: "center",
    alignItems: "center",
    textAlign: "center",
    height: 30,
    width: 290,
    backgroundColor: "rgba(255,255,255,1)",
    fontSize: 15,
    color: "#000",
    borderRadius: 15,
    marginBottom: 150
  },
  userPhoto: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: "white",
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "white",
    color: "black",
    borderRadius: 5,
  },
  buttonText: {
    color: "black",
    backgroundColor: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  loggedOutContainer: {
    alignItems: "center",
  },
  loggedOutText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    marginBottom: 10,
  },
  bannerProfile: {
    width: "100%",
    height: "35%",
    position: "absolute",
    top: 25,
  },
});
