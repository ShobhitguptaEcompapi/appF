import { View, Text, StyleSheet } from "react-native";
import React from "react";
import IncidentReport from "@/components/IncidentReport";

const Report = () => {
    return (
        <View style={styles.safeArea}>
            <IncidentReport />
        </View>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#FFF",
        paddingTop: 10,
    },
});

export default Report;
