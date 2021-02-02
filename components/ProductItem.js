import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity, Alert} from 'react-native'

export default function ProductItem(props){

    return (
        <TouchableOpacity onPress={() => props.onPress(props.item)}>
            <View style={sScrollItem.container}>
                <Text style={sScrollItem.title}>{props.item.name}</Text>
                <Text style={sScrollItem.subtitle}>{props.item.date}</Text>
            </View>
      </TouchableOpacity>
    )
}

const sScrollItem = StyleSheet.create({
    container: {
      paddingLeft: 40,
      paddingVertical: 20,
      borderBottomColor: 'grey',
      borderBottomWidth: 1
    },
    subtitle : {
      fontSize: 18
    },
    title : {
      fontSize: 26
    }
});