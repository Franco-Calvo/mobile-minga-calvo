import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSelector } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Home from "../Screen/Home";
import ContFormRegister from "../Screen/ContFormRegister";
import Mangas from "../Screen/Mangas";
import Perfil from "../Screen/Perfil";
import LogOut from "../Screen/LogOut";
import Details from "../Screen/Details";
import { FontAwesome } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

function BottomTabsNavigation() {
  let state = useSelector((store) => store.bottomTabsReducer.state);
  let [token, setToken] = useState("");

  const details = useSelector((store) => store.mangaClick.state);
  console.log(details)

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
    }, [state])
  );

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#000000",
          borderTopColor: "transparent",
          height: 55,
          paddingBottom: 5,
          paddingTop: 5,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          marginBottom: 5,
        },
        tabBarActiveTintColor: "#4169E1",
        tabBarInactiveTintColor: "#9B9B9B",
        tabBarTabStyle: {
          paddingTop: 0,
          paddingBottom: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />
      {token ? (
        <>
          <Tab.Screen
            name="Mangas"
            component={Mangas}
            options={{
              headerShown: false,
              tabBarLabel: "Mangas",
              tabBarIcon: ({ color }) => (
                <FontAwesome name="book" size={24} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            options={{
              headerShown: false,
              tabBarLabel: "Profile",
              tabBarIcon: ({ color }) => (
                <FontAwesome name="user" size={24} color={color} />
              ),
            }}
          >
            {() => (
              <>
                <Perfil />
                <LogOut />
              </>
            )}
          </Tab.Screen>
        </>
      ) : (
        <Tab.Screen
          name="register"
          component={ContFormRegister}
          options={{
            headerShown: false,
            tabBarLabel: "Register",
            tabBarIcon: ({ color }) => (
              <FontAwesome name="user-circle-o" size={24} color={color} />
            ),
          }}
        />
      )}
      {details ? (
        <Tab.Screen
          name="Details"
          component={Details}
          options={{
            headerShown: false,
            tabBarLabel: "Details",
            tabBarIcon: ({ color }) => (
              <FontAwesome name="info" size={24} color={color} />
            ),
          }}
        />
      ) : (
        <></>
      )}
    </Tab.Navigator>
  );
}

export default BottomTabsNavigation;
