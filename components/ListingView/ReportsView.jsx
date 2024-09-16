import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from "../Button/CustomButton"
import { Redirect, useRouter } from "expo-router";

export default function ReportsView() {
    const router = useRouter();

    const buttonClick = () => {
        console.log("Push")
        router.push("/ReportQuestion");
    }
    return (
        <>
            <View style={styles.container}>
                {/* mainView */}
                <View style={styles.mainView}>
                    {/* Report count */}
                    <View style={styles.countView}>
                        <Text style={styles.reportName}>Report 01</Text>
                        <Text style={styles.Date}>02/02/2024</Text>
                    </View>
                    {/* reports Details */}
                    <View style={styles.detailsView}>
                        <Text style={styles.detailText}>Victim</Text>
                        <Text style={styles.detailText}>Victim</Text>
                        <Text style={styles.detailText}>Victim</Text>
                        <Text style={styles.detailText}>Victim</Text>
                        <Text style={styles.detailText}>Victimedfbqdhbqwdbiu</Text>
                        <Text style={styles.detailText}>Victim</Text>
                        <Text style={styles.detailText}>Victim</Text>
                        <Text style={styles.detailText}>Victim</Text>
                        <Text style={styles.detailText}>Victim</Text>
                    </View>

                </View>
            </View>
            <View style={styles.spacer} />
            <CustomButton text={"Add New Report"} buttonPress={buttonClick} />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 32,
        marginLeft: 24,
        marginRight: 24,
        marginBottom: 120
    },
    mainView: {
        padding: 16,
        backgroundColor: "#FFFFFF",
        borderRadius: 8
    },
    countView: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBlockColor: "#DDE2DD",
        paddingTop: 8,
        paddingBottom: 8,
    },
    counter: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    reportName: {
        fontFamily: "Poppins 600",
        fontSize: 16,
        color: "#263238"
    },
    Date: {
        fontFamily: "Poppins 500",
        fontSize: 12,
        color: "#7B7C7E"
    },
    detailsView: {
        marginTop: 24,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        // backgroundColor: "red"
    },
    detailsViewText: {
        padding: 4,
        margin: 4,
        borderRadius: 4,
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 14,
        paddingRight: 14,
        backgroundColor: "#EEEEEE"
    },
    detailText: {
        fontFamily: "Poppins 500",
        borderRadius: 4,
        fontSize: 12,
        color: "#4F4F4D",
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 14,
        paddingRight: 14,
        margin: 4,
        backgroundColor: "#EEEEEE"

    },
    spacer: {
        flex: 1,
    },
})