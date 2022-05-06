import React from 'react';
import {StyleSheet, Button, View, Text} from 'react-native';

function DetailScreen({navigation}) {

    return (
        <View style = {{flex:1, justifyContent:'center', alignItems:'center', backgroundColor: '#3d5afe'}}>
            <Text>Details Screen</Text>

            <Text>Screen: {id}</Text>
            <Text>Description: {description}</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#8187ff',
        
        margin: 20,
        padding: 5,

        width: 300,
        height: 100,    
    }
})

export default DetailScreen;