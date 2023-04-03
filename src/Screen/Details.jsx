import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  ImageBackground,
  ScrollView,
} from "react-native";
import fondo from "../../assets/Frame.png";
import actions from "../Store/Manga/actions";
import { useDispatch, useSelector } from "react-redux";
import { TouchableOpacity } from "react-native";
import { useParams } from "react-router-dom";
const { captureManga, captureChapter } = actions;

export default function Details({ route}) {
  const page = Number(useParams().page);
  const manga = useSelector((store) => store.manga.manga);
  const chapters = useSelector((store) => store.manga.chapter);
  console.log(chapters);
  const [pagina, setPagination] = useState(page);
  const [capitulo, setCapitulo] = useState(true);
  const [localShowChapters, setLocalShowChapters] = useState(false);
  const { _id } = route.params;
  const dispatch = useDispatch();


  const toggleView = () => {
    setLocalShowChapters(!localShowChapters);
  };

  useEffect(() => {
    if (_id) dispatch(captureManga({ manga_id: _id }));
    if (_id) dispatch(captureChapter({ manga_id: _id, page: pagina }));
  }, [_id, pagina, capitulo]);

  if (!manga) return null;

  return (
    <ImageBackground source={fondo} style={styles.container}>
      <View style={styles.containTotal}>
        <ScrollView>
          <View style={styles.fondoMangaImg}>
            <View style={styles.fondoManga}>
              <Text style={styles.title}>Details of</Text>
              <Text style={styles.title}>{manga.title}</Text>
            </View>
          </View>

          <View style={styles.sectionManga}>
            <View style={styles.var}>
              <View style={styles.item} />
            </View>
            <Image
              source={{ uri: manga.cover_photo }}
              style={styles.bannerPhoto}
            />
            <Text style={styles.mangaTitle}>{manga.title}</Text>
            <View style={styles.containerCatego}>
              <Text style={styles.mangaCategory}>
                {manga.category_id && manga.category_id.name}
              </Text>
              <Text style={styles.mangaAuthor}>
                {manga.author_id && manga.author_id.name}
              </Text>
            </View>
            <View>
              <TouchableOpacity
                style={styles.buttonMangas}
                onPress={toggleView}
              >
                <Text style={styles.mangaButton}>
                  {localShowChapters ? "See Manga Description" : "See Chapters"}
                </Text>
              </TouchableOpacity>
              {localShowChapters ? (
                <View style={styles.containerChapters}>
                  {chapters.map((chapter) => {
                    let card = (
                      <View style={styles.containerChapters} key={chapter.id}>
                        <Text style={styles.chapterTitle}>{chapter.title}</Text>

                        <Image
                          source={{ uri: chapter?.pages[0] }}
                          style={styles.bannerPhoto}
                        />
                      </View>
                    );

                    return card;
                  })}
                </View>
              ) : (
                <Text style={styles.mangaDescription}>{manga.description}</Text>
              )}
            </View>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = {
  loadMoreButton: {
    color: "white",
    fontSize: 15,
    height: 22,
    borderRadius: 15,
    width: 110,
    backgroundColor: "rgba(128, 128, 128, 0.8)",
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
    minHeight: "100%",
    justifyContent: "center",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  fondoMangaImg: {
    width: "100%",
    marginTop: 50,
  },
  fondoManga: {
    width: "100%",
    height: 100,
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "center",
    marginBottom: 50,
    gap: 15,
  },

  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginRight: 10,
    color: "white",
  },
  sectionManga: {
    flex: 1,
    padding: 20,
    minHeight: 500,
    width: "100%",
    backgroundColor: "rgba(20, 20, 20, 1)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
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
  },
  bannerPhoto: {
    width: 150,
    height: 200,
    borderRadius: 10,
    resizeMode: "cover"
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
  mangaTitle: {
    color: "white",
    fontSize: 22,
    fontWeight: 500,
  },
  chapterTitle: {
    color: "white",
    fontSize: 22,
    fontWeight: 500,
  },
  mangaButton: {
    color: "black",
    fontSize: 15,
    fontWeight: 500,
  },
  mangaDescription: {
    color: "white",
    fontSize: 15,
  },
  containerCatego: {
    flexDirection: "row",
    gap: 30,
  },
  mangaCategory: {
    color: "orange",
    fontSize: 18,
    fontWeight: 500,
  },
  mangaAuthor: {
    color: "orange",
    fontSize: 18,
    fontWeight: 500,
  },
  buttonMangas: {
    alignItems: "center",
    justifyContent: "center",
    width: 350,
    borderRadius: 14,
    height: 35,
    marginVertical: 10,
    backgroundColor: "#fff",
  },
  containerChapters: {
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
 
};
