import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ReportsView from "@/components/ListingView/ReportsView"

export default function ReportsHistory() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Your Reports</Text>
            <ReportsView />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: "6%",
        // backgroundColor: "red",
    },
    text: {
        marginTop: 16,
        marginLeft: 24,
        fontFamily: "Poppins 600",
        fontSize: 24,
        color: "#263238",
    },
});
