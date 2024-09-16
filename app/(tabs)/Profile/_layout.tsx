import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from "expo-router"

const AffirmationLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{
                headerShown: false, headerTitle: "Profile",
                headerStyle: {
                    backgroundColor: "transparent",
                },
            }} />
        </Stack>
    )
}

export default AffirmationLayout