import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import LandingPage from "@/components/Reports/LandingScreen"

const Report = () => {
    return (
        <SafeAreaView style={styles.container}>
            <LandingPage />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#f8f8f8',
    },
});

export default Report;
