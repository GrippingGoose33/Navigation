import React from 'react';
import {Button, View, Text} from 'react-native';

function DetailScreen({navigation}) {
    return (
        <View style = {{flex:1, justifyContent:'center', alignItems:'center', backgroundColor: "green"}}>
            <Text>Details Screen</Text>
            <Button 
            title="ir a Detalle"
            onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}

export default DetailScreen;