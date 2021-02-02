import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import AppHeader from "./components/AppHeader";
import Copyright from "./components/Copyright";
import ProductItem from "./components/ProductItem";
import ScanButton from "./components/ScanButton";
import Demo from "./Pages/Demo";
import IMC from "./Pages/IMC";

const ITEMS = [
  {
    id: "1",
    name: "Chocapic",
    date: "21/01/2021",
  },
  {
    id: "2",
    name: "CocoPops",
    date: "22/01/2021",
  },
  {
    id: "3",
    name: "Golden Grams",
    date: "23/01/2021",
  },
];
export default function App() {
  function onPressLearnMore() {
    Alert.alert("Bonjour");
  }

  /*
  La variable item est envoyée depuis ProductItem.js
  */
  function onItemPress(item) {
    //console.log(item);
    //alert('Je clique sur ' + item.name);
    alert(`Je clique sur ${item.name}`);
  }

  const renderItem = ({ item }) => {
    return <ProductItem item={item} onPress={onItemPress} />;
  };

  return <IMC />;

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <AppHeader title="Accueil" />

      <ScanButton text="Bouton" onPress={onPressLearnMore} />

      <FlatList
        data={ITEMS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <Copyright
        /* Ne pas oublier les accolades pour du JS comme un tableau */
        ping={"pong"}
        tableauEnProps={[1, 2, 4, 5]}
        tic={"tac"}
        promotion={"RIL CAEN"}
      />
    </View>
  );
}

const sScroll = StyleSheet.create({
  container: {},
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
