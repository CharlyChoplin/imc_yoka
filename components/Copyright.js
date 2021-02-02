import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

/* Pas oublier d'ajouter (props) en paramètre */
export default function Copyright(props){
    
    /* Props accessibles via props.maProp */
    console.log(props.tic)
    console.log(props.ping)
    console.log(props.promotion)
    console.log(props.tableauEnProps)


    return (
        <View style={sCopy.container}>
            <Text style={sCopy.text}>Copyright 2021 - {props.promotion}</Text>
        </View>
    )
}

const sCopy = StyleSheet.create({
    container: {
        paddingBottom: 20
    },
    text : {
        textAlign: 'center'
}
})