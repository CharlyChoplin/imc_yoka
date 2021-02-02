import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import AppHeader from "../components/AppHeader";
import { StatusBar } from "expo-status-bar";
import { Picker } from "@react-native-picker/picker";

export default function IMC() {
  const [sexe, setSexe] = useState("homme");
  const [taille, setTaille] = useState(0);
  const [poids, setPoids] = useState(0);

  function calculIMC() {
    if (taille.length >= 2 && poids.length >= 2 && taille > 0 && poids > 0) {
      let _tmp = poids / (taille / 100) ** 2;
      let _tmpValue = "";

      if (_tmp > 40) {
        _tmpValue = "Obésité morbide ou massive";
      } else if (_tmp > 35) {
        _tmpValue = "Obésité sévère";
      } else if (_tmp > 30) {
        _tmpValue = "Obésité modérée";
      } else if (_tmp > 25) {
        _tmpValue = "Surpoids";
      } else if (_tmp > 18.5) {
        _tmpValue = "Corpulence normale";
      } else {
        _tmpValue = "Insuffisance pondérale";
      }

      Alert.alert(
        "Votre sexe : " +
          sexe +
          "; votre IMC est : " +
          _tmp.toFixed(1) +
          "; il correspond à : " +
          _tmpValue
      );
    } else {
      Alert.alert(
        "La taille doit contenir 2 chiffres minimum, le poids doit contenir 2 chiffres minimum et être positif"
      );
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <AppHeader title="IMC CALCULATOR" />

      {/* SEXE */}
      <Text style={sText.text}>Votre Sexe :</Text>
      <View style={sPicker.pickerView}>
        <Picker
          selectedValue={sexe}
          onValueChange={(itemValue, itemIndex) => setSexe(itemValue)}
        >
          <Picker.Item label="Homme" value="homme" />
          <Picker.Item label="Femme" value="femme" />
        </Picker>
      </View>

      {/* TAILLE */}
      <Text style={sText.text}>Votre Taille (en cm) : </Text>
      <TextInput
        keyboardType="number-pad"
        style={sTextInput.textInput}
        onChangeText={(text) => setTaille(text)}
        value={taille}
        maxLength={3}
      />

      {/* POIDS */}
      <Text style={sText.text}>Votre Poids (en kilos): </Text>
      <TextInput
        keyboardType="number-pad"
        style={sTextInput.textInput}
        onChangeText={(text) => setPoids(text)}
        value={poids}
        maxLength={3}
      />

      <TouchableOpacity style={[sButton.buttonDisabled]} onPress={calculIMC}>
        <Text
          style={{
            fontSize: 20,
            color: "white",
            flex: 1,
            alignSelf: "center",
            paddingTop: 5,
          }}
        >
          Calculer
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
const sPicker = StyleSheet.create({
  pickerView: {
    borderColor: "gray",
    borderWidth: 1,
    marginVertical: 10,
    marginHorizontal: 20,
  },
});
const sText = StyleSheet.create({
  text: {
    marginVertical: 10,
    fontSize: 16,
    color: "grey",
    marginHorizontal: 20,
  },
});
const sTextInput = StyleSheet.create({
  textInput: {
    marginHorizontal: 20,
    padding: 10,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
  },
});
const sButton = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    justifyContent: "flex-end",
    backgroundColor: "orange",
  },
  button: {
    backgroundColor: "grey",
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  text: {
    textAlign: "center",
    fontSize: 24,
    textTransform: "uppercase",
  },
  buttonDisabled: {
    borderWidth: 1,
    borderRadius: 20,
    height: 40,
    backgroundColor: "grey",
    borderColor: "grey",
    left: 16,
    right: 16,
    position: "absolute",
    bottom: 16,
    zIndex: 10,
  },
});
