import { View, Text, StyleSheet, SafeAreaView, ImageBackground } from 'react-native';
import React from 'react';
import { StatusBar } from "expo-status-bar";
import MegaPhone from "@/assets/SVG/MegaPhone.svg"
import BulletCircle from "@/assets/SVG/BulletCircle.svg"
import SafeView from './SafeView';
import CustomButton from "@/components/Button/CustomButton"
import { Redirect, useRouter } from "expo-router";


export default function LandingScreen() {
    const router = useRouter();

    const buttonClick = () => {
        console.log("Push")
        router.push("/(tabs)/Reports/History");
    }
    return (
        <View style={styles.container}>
            {/* image */}
            <View style={styles.imageView}>
                <MegaPhone width={183} height={129} />
            </View>
            {/* Report Guidance view */}
            <View style={styles.bullyGuidanceView}>
                {/* Text*/}
                <Text style={styles.reportText} numberOfLines={1}>
                    Report Bullying incident
                </Text>
                {/* /List view */}
                <View style={styles.listView}>
                    <View style={[styles.listItem, styles.firstItem]}>
                        <BulletCircle width={12} height={12} />
                        <Text style={styles.itemText}>Fill the questionnaire</Text>
                    </View>
                    <View style={styles.listItem}>
                        <BulletCircle width={12} height={12} />
                        <Text style={styles.itemText}>Submit once the questionnaire is filled</Text>
                    </View>
                    <View style={[styles.listItem, styles.lastItem]}>
                        <BulletCircle width={12} height={12} />
                        <Text style={styles.itemText}>Report is then reviewed</Text>
                    </View>
                </View>

            </View>
            {/* SafeView */}
            <SafeView />
            <View style={styles.spacer} />
            {/* Button */}
            <CustomButton text={"Start Reporting"} buttonPress={buttonClick} />
            <StatusBar style="dark" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: "6%",
    },
    text: {
        fontSize: 18,
        color: '#000',
    },
    imageView: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 88,
        marginLeft: 24,
        marginRight: 24
    },
    image: {

    },
    bullyGuidanceView: {
        display: "flex",
        marginLeft: 24,
        marginRight: 24,
        padding: 32,
        backgroundColor: "#FFFFFF",
        borderRadius: 8
    },
    reportText: {
        fontWeight: "700",
        fontSize: 24,
        color: "#263238"
    },
    listView: {
        marginTop: 16
    },
    itemText: {
        textAlign: "center",
        marginLeft: 8,
        fontWeight: "500",
        fontSize: 14,
        color: "#263238"
    },
    listItem: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 6,
        marginBottom: 6
    },
    firstItem: {
        marginTop: 0
    },
    lastItem: {
        marginBottom: 0
    },
    spacer: {
        flex: 1,
    },

});
