import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

function Box({id, description}) {

    const navigation = useNavigation();
    return (
        <View style={styles.root}>
            <Text>Tarea#{task.id}</Text>
                    <Button
                        color="#455q64"
                        title="Detalles"
                        onPress={() => navigation.navigate('Details',{
                        id: id,
                        description: description
                        })}
                    />
        </View>
    );
}

const styles = StyleSheet.create({

    root: {
        width: 100,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgray",
        borderWidth: 1,
        borderRadius: 0,
        margin: 10,
    }
})

export default Box;