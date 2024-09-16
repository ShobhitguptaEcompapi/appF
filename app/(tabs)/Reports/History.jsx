import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ReportsHistory from "@/components/Reports/ReportsHistory"

export default function History() {
    return (
        <View style={styles.container}>
            <ReportsHistory />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
})