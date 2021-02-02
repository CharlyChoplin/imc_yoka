import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

export default function AppHeader(props){

    return (
        <View style={sHeader.container}>
            <Text style={sHeader.text}>{props.title}</Text>
        </View>
    )
}


const sHeader = StyleSheet.create({
    text : {
      fontSize: 24, 
      textAlign: 'center',
      fontWeight: 'bold'
    },
    container: {
      backgroundColor: 'lightgrey',
      paddingTop: 45,
      paddingBottom: 10,
      borderBottomColor: 'grey',
      borderBottomWidth: 1
    }
  })