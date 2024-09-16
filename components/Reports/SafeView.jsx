import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Secure from "@/assets/SVG/Secure.svg"


export default function SafeView() {
    return (
        <View style={styles.container}>

            <View style={styles.mainView}>
                {/* safeText */}
                <View style={styles.firstText}>
                    <Text style={styles.firstText1}>yes, your identity is</Text>
                    <View style={styles.bottomText}>
                        <Text style={styles.firstText2}>safe</Text>
                        <Text style={styles.firstText1}>with us!!</Text>
                    </View>
                </View>
                {/* lock svg view */}
                <View style={styles.lockView}>
                    <Secure width={102} height={48} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        marginTop: 16,
        marginLeft: 24,
        marginRight: 24,
        borderRadius: 8,
        backgroundColor: "#F7EBC1"

    },
    bottomText: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    firstText1: {
        fontFamily: "Poppins 600",
        fontSize: 16,
        color: "#263238"
    },
    firstText2: {
        fontFamily: "Ribeye 400",
        fontSize: 28,
        color: "#1973BE"
    },
    mainView: {
        display: "flex",
        justifyContent: 'space-between',
        flexDirection: "row",
        marginTop: 24,
        marginLeft: 32,
        marginBottom: 30,
        marginRight: 32,
        // backgroundColor: "red"
    },
    lockView: {
        display: "flex"
    }
})