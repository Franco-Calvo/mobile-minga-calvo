import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  ImageBackground,
  ScrollView,
} from "react-native";
import axios from "axios";
import CardMangas from "../Components/CardMangas";
import search from "../../assets/Search.png";
import fondo from "../../assets/Frame.png";

export default function Mangas() {
  const [mangas, setMangas] = useState([]);
  const [originalMangas, setOriginalMangas] = useState([]);
  const [categorias, setCate] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://10.0.2.2:8080/mangas/view?page=${currentPage}`)
      .then((response) => {
        if (response.data.mangas.length === 0) {
          setHasMore(false);
        } else {
          if (currentPage === 1) {
            setOriginalMangas(response.data.mangas);
          } else {
            setOriginalMangas((prevMangas) => [
              ...prevMangas,
              ...response.data.mangas,
            ]);
          }
        }
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, [currentPage, searchQuery]);

  useEffect(() => {
    axios
      .get("https://10.0.2.2:8080/mangas/")
      .then((response) => {
        setCate(response.data.categories);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSearch = (text) => {
    setSearchQuery(text);
    setCurrentPage(1);
    setOriginalMangas([]);
    setHasMore(true);
  };

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const filteredMangas = originalMangas.filter((manga) => {
    return manga.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
      <View style={styles.containTotal}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.fondoMangaImg}>
            <Image source={fondo} style={styles.container}></Image>
          </View>

          <View style={styles.sectionManga}>
            <View style={styles.var}>
              <View style={styles.item} />
            </View>
            <View style={styles.searchContainer}>
              <Image source={search} style={styles.searchIcon} />
              <TextInput
                style={styles.searchInput}
                placeholder="Find your manga here"
                onChangeText={handleSearch}
              />
            </View>
            <ScrollView contentContainerStyle={styles.contCartas}>
              {filteredMangas.length > 0 &&
                filteredMangas.map((manga, index) => (
                  <CardMangas
                    key={index}
                    _id={manga._id}
                    title={manga.title}
                    category={
                      categorias.find((cat) => cat._id === manga.category_id)
                        ?.name
                    }
                    photo={{ uri: manga.cover_photo }}
                  />
                ))}
            </ScrollView>

            {loading && <Text style={styles.loadMoreButton}>Loading...</Text>}
            {!loading && hasMore && (
              <Text style={styles.loadMoreButton} onPress={handleLoadMore}>
                Load more
              </Text>
            )}
            {!loading && !hasMore && (
              <Text style={styles.noMoreButton}>No more mangas to show</Text>
            )}
          </View>
        </ScrollView>
      </View>
  );
}

const styles = {
  scrollView: {
    height: "100%"
  },
  loadMoreButton: {
    color: "black",
    fontSize: 15,
    height: 22,
    borderRadius: 15,
    width: 110,
    backgroundColor: "rgba(255, 255, 255, 1)",
    textAlign: "center",
  },
  noMoreButton: {
    color: "white",
    fontSize: 15,
    height: 22,
    borderRadius: 15,
    width: 200,
    backgroundColor: "rgba(128, 128, 128, 0.8)",
    textAlign: "center",
  },
  containTotal: {
    width: "100%",
    justifyContent: "center",
  },
  container: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
    position: "relative"
  },
  fondoMangaImg: {
    width: "100%",
  },

  title: {
    fontSize: 44,
    fontWeight: "bold",
    marginRight: 10,
    color: "white",
  },
  searchContainer: {
    backgroundColor: "rgb(255, 255, 255)",
    borderRadius: 40,
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  sectionManga: {
    flex: 1,
    padding: 20,
    width: "100%",
    height: 508,
    backgroundColor: "rgba(20, 20, 20, 1)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: -50,
    alignItems: "center",
    flexDirection: "column",
  },
  exploreMangas: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
  },
  contCartas: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  var: {
    height: 4,
    borderRadius: 3,
    width: "60%",
    marginBottom: 20,
    backgroundColor: "#f0f0f0",
  },
  item: {
    paddingHorizontal: 1,
  },
 
};
