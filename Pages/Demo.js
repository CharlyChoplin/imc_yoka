import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput,  Button, Image } from 'react-native';
import AppHeader from '../components/AppHeader';
import { StatusBar } from 'expo-status-bar';

export default function Demo(){

    const [age, setAge] = useState(0);

    const [keyword, setKeyword] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    function ajouterAge(){
        let _age = age; 
        _age += 1; 
        setAge(_age);
    }

    function reduireAge(){
        let _age = age; 
        _age -= 1; 
        setAge(_age);
    }

    function chargerImage(){
        let _url = `https://loremflickr.com/320/240/${keyword}`
        setImageUrl(_url);
    }

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
    
            <AppHeader title="Démo state" />

            <Text style={styles.text}>Bonjour, j'ai actuellement {age} ans</Text>

            <Button onPress={ajouterAge} title="Prendre une année"/>
            <Button onPress={reduireAge} title="Retirer une année"/>


            <Text>Votre mot clé:</Text>

            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setKeyword(text)}
                value={keyword}
            />

            <Text>{imageUrl}</Text>
        
            <Button onPress={chargerImage} title="Charger l'image"/>

            {/* Rendu conditionnel avec une variable de state */}
            {
                imageUrl != '' ? 
                    <Image
                    style={{width: 320, height: 240}}
                    source={{
                        uri: imageUrl,
                    }}
                /> : <Text>Merci de renseigner un mot clé</Text>
            }

            {/* Rendu conditionnel avec une variable de state */}
            {/*
                imageUrl != '' && 
                    <Image
                    style={{width: 320, height: 240}}
                    source={{
                        uri: imageUrl,
                    }}
                />*/
            }
           
        </View>
    )
}


const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        marginTop: 5
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
    }
  });
  