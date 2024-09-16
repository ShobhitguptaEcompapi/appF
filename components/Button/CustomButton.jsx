import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CustomButton({ text, buttonPress }) {
    return (
        <TouchableOpacity onPress={buttonPress} >
            <View style={styles.container}>
                <View style={styles.textView}>
                    <Text style={styles.textStyle}>{text}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 48,
        backgroundColor: "#1973BE",
        marginLeft: 24,
        marginRight: 24,
        marginBottom: 40,
        borderRadius: 8
    },
    textView: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    textStyle: {
        fontFamily: "Poppins 600",
        color: "#FFFFFF",
        fontSize: 16
    }
})