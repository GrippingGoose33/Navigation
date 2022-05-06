import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",   
    },

    containerBox: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'ghostwhite',
        ...Platform.select({
            ios: { paddingTop: 20},
            android: {paddingTop: StatusBar.currentHeight}
        })
    },

    text: {
        marginBottom: 10,
    }
})