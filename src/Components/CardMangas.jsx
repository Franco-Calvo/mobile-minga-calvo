import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useDispatch } from "react-redux";
import mangaClick from "../Store/Details/actions";

export default function CardMangas({ title, photo, _id }) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { mangaClicked } = mangaClick;

  function DetailsScreen() {
    dispatch(mangaClicked({ state: true }));
    setTimeout(() => {
      navigation.navigate("Details", { _id });
    }, 500);
  }
  return (
    <View style={styles.card}>
      <View style={styles.imgContainer}>
        <Image style={styles.imgManga} source={photo} />
      </View>

      <View style={styles.text1}>
        <View style={styles.containerButtons}>
          <Text style={styles.title}>{title}</Text>
          <Button
            style={styles.read}
            onPress={DetailsScreen}
            title="Details"
            trailing={(props) => <Icon name="eye" {...props} />}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerButtons: {
    gap: 10,
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    flexDirection: "row",
    marginVertical: 10,
    width: "95%",
    borderWidth: 1,
    borderRadius: 8,
  },
  shonen: {
    backgroundColor: "#F06C9B",
  },
  text1: {
    flex: 1,
    width: "50%",
    height: 150,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryName: {
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  read: {
    height: 32,
    right: 0,
    backgroundColor: "black",
  },
  imgContainer: {
    width: "50%",
    height: 150,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    overflow: "hidden",
  },
  imgManga: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
  },
});
