import React from 'react';
import {StyleSheet, Button, View, Text} from 'react-native';

function DetailScreen({route, navigation}) {

    const {id, description} = route.params;

    return (
        <View style = {{flex:1, justifyContent:'center', alignItems:'center', backgroundColor: "green"}}>
            <Text>Details Screen</Text>

            <Text>Screen: {id}</Text>
            <Text>Description: {description}</Text>

            <View style = {styles.containerButton}>
                <Button 
                    title="Atras"
                    onPress={() => navigation.goBack()}
                />
                <Button 
                    title="Home"
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#263238',
        
        margin: 20,
        padding: 5,

        width: 300,
        height: 100,    
    }
})

export default DetailScreen;