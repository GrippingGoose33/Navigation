import React from 'react';
import {view, Text} from 'react-native';

function DetailScreen(props) {
    return (
        <View style = {{flex:1, justifyContent:'center', alignItems:'center', backgroundColor: "green"}}>
            <Text>Details Screen</Text>
        </View>
    );
}

export default DetailScreen;