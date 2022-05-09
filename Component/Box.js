import React from 'react';
import {StyleSheet, View} from 'react-native';
import styles from'../styles';

const Box = ({children}) => {

    return (
        <View style={styles.root}>
            {children}
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