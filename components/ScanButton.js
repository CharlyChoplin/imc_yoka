import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'

export default function ScanButton(props){

    return (
        <View style={sButton.container}>
            <TouchableOpacity onPress={props.onPress}>
                <View style={sButton.button}>
                    <Text style={sButton.text}>{props.text}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}


const sButton = StyleSheet.create({
    container: {
      paddingHorizontal: 40,
      paddingVertical: 20
    },
    button: {
      backgroundColor: 'grey',
      paddingHorizontal: 40,
      paddingVertical: 20
    },
    text : {
      textAlign: 'center',
      fontSize: 24,
      textTransform: 'uppercase'
    }
  })