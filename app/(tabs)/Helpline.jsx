import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Linking, Platform, FlatList } from 'react-native'
import React, { useState, useCallback, useMemo } from 'react'
import { StatusBar } from 'expo-status-bar';
// import { SafeAreaView } from 'react-native-safe-area-context';
import { OnlineResourcesdata, HelpLinedata } from '../../constants/data/EmegencyDetails';
import ExpandableText from "@/components/ExpandableText"

export default function Helplines() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const data = selectedIndex === 0 ? HelpLinedata : OnlineResourcesdata;
    const headerText = selectedIndex === 0 ? "List of Helpline Numbers" : "List of Online Resources";

    const goToSite = (item) => {
        if (item && item.siteUrl) {
            // console.log("Navigating to site:", item.siteUrl);
            Linking.openURL(item.siteUrl).catch((err) =>
                console.error("Failed to open URL:", err)
            );
        } else {
            // console.log("Invalid item or site domain not available.");
        }
    }
    const dialCall = (number) => {
        let phoneNumber = '';

        if (Platform.OS === 'android') {
            phoneNumber = `tel:${number}`;
        } else {
            phoneNumber = `telprompt:${number}`;
        }

        Linking.openURL(phoneNumber).catch((err) =>
            console.error('Failed to open phone dialer:', err)
        );
    };

    const renderListItem = ({ item, index }) => {
        // console.log(item)
        return (
            <View key={item.id} style={{ backgroundColor: index % 2 === 0 ? '#F6F7FB' : '#FFFFFF', borderTopColor: "#DBDFE0", borderTopWidth: 1, }}>
                <View style={styles.listView}>
                    <Text style={styles.emergenctText}>{item.text || "Not Available"}</Text>
                    {item.Number && (
                        <View style={styles.numberContainer}>
                            <Text style={styles.numberText}>Number -</Text>
                            <Text style={styles.number}>{item.Number}</Text>
                        </View>
                    )}
                    {item.type && <ExpandableText text={item.type} numberOfLines={1.5} type={"type"} />}
                    {item.Detail && <ExpandableText text={item.Detail} numberOfLines={1.5} type={"Detail"} />}
                    {item.siteDomain ? (
                        <TouchableOpacity
                            // style={styles.button}
                            onPress={() => goToSite(item)}
                        >
                            <Text style={styles.domain}>{item.siteDomain}</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => dialCall(item.Number)}
                        >
                            <Text style={styles.buttonText}>Call</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        )
    }

    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity
                    style={[styles.flexItem, selectedIndex === 0 && styles.selected]}
                    onPress={() => setSelectedIndex(0)}
                >
                    <Text style={[styles.text, selectedIndex === 0 && styles.selectedText]}>Helplines</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.flexItem, selectedIndex === 1 && styles.selected]}
                    onPress={() => setSelectedIndex(1)}
                >
                    <Text style={[styles.text, selectedIndex === 1 && styles.selectedText]}>Online Resources</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.mainView}>
                {/* <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}> */}
                <FlatList
                    style={styles.contactView}
                    data={data}
                    renderItem={renderListItem}
                    keyExtractor={(item) => item.id.toString()} // Assuming each item has a unique 'id'
                    ListHeaderComponent={
                        <View style={styles.heading}>
                            <Text style={styles.headingText}>{headerText}</Text>
                        </View>
                    }
                    showsVerticalScrollIndicator={false}
                    ListFooterComponent={
                        <View style={{ height: 24, backgroundColor: "#F6F7FB" }} /> // Adjust the height based on your need
                    }
                    initialNumToRender={5}
                    windowSize={2}
                />
                {/* </ScrollView> */}
            </View>

            <StatusBar style="dark" />
        </>
    );
};
const styles = StyleSheet.create({
    container: {
        display: "flex",
        // flexGrow: 1,
        height: 44,
        backgroundColor: 'white',
        flexDirection: "row",
    },
    flexItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 2,
        borderTopColor: '#DBDFE0',
        borderLeftColor: '#DBDFE0',
        borderRightColor: '#DBDFE0',
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
    },
    text: {
        fontSize: 16,
        color: '#7B7C7E', // Default text color
        fontWeight: "400"
    },
    selected: {
        borderBottomWidth: 4, // Highlight bottom border
        borderBottomColor: '#1973BE', // Highlight color
    },
    selectedText: {
        color: '#1973BE', // Highlight text color  
        fontSize: 16,
        fontWeight: "600"
    },
    mainView: {
        flex: 1,
        // backgroundColor: "red"
    },
    contactView: {
        display: "flex",
        flexDirection: "column",
        margin: 24,
        marginBottom: 0,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: "#FFFFFF",
        shadowColor: "#000000", // Shadow color
        shadowOffset: { width: 0, height: 4 }, // Shadow offset
        shadowOpacity: 4, // Opacity of the shadow
        shadowRadius: 15, // Blur radius (half of the 30px spread from the box-shadow)
    },
    scrollViewContent: {
        flexGrow: 1,
        // backgroundColor: "red"
    },
    listView: {
        marginLeft: 24,
        marginTop: 16,
        marginRight: 24,
        marginBottom: 16,
        // backgroundColor: "red"
    },
    heading: {
        // backgroundColor: "red",
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 32,
        paddingBottom: 28,
        // backgroundColor: "blue"
    },
    headingText: {
        fontWeight: '600',
        fontSize: 20,
        color: "#263238"
    },
    numberContainer: {
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
    },
    emergenctText: {
        fontWeight: "600",
        color: "#263238",
        fontSize: 14,
        marginBottom: 4
    },
    number: {
        fontWeight: "600",
        color: "#263238",
        fontSize: 14,
        marginBottom: 10,
    },
    numberText: {
        fontWeight: "600",
        color: "#999A9A",
        fontSize: 14,
        marginBottom: 10,
    },
    button: {
        width: 79,
        height: 32,
        borderRadius: 8,
        paddingTop: 6,
        paddingLeft: 24,
        paddingRight: 24,
        paddingBottom: 6,
        backgroundColor: "#1973BE",
    },
    buttonText: {
        color: "#FFFFFF"
    },
    domain: {
        color: '#1973BE', // Blue color for link
        textDecorationLine: 'underline', // Underline the text
        fontSize: 14,
        fontWeight: "400"
    }
})
