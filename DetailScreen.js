import React from 'react';
import {StyleSheet, Button, View, Text} from 'react-native';

function DetailScreen({navigation}) {
    return (
        <View style = {{flex:1, justifyContent:'center', alignItems:'center', backgroundColor: "green"}}>
            <Text>Details Screen</Text>
            <View>
             <Button 
                title="Atras"
                onPress={() => navigation.goBack()}
             />
             <Button 
                title="Home"
                onPress={() => navigation.navigate('Home')}
             />
             <Button 
                title="ir a Detalle"
                onPress={() => navigation.push('Details')}
              />
            </View>
        </View>
    );
}

export default DetailScreen;