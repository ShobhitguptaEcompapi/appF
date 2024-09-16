import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Modal, ActivityIndicator } from 'react-native'
import Fist from "../../../assets/images/VectorFist.svg"
import Arrow from "../../../assets/images/Back_Icons_UIA.svg"
import Notebook from "../../../assets/images/receipt-edit.svg"
import Reading_Book from "../../../assets/images/Notebook.svg"
import React, { useState, useEffect } from 'react'
import Logout from '@/app/logout'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProfileThunk, getItems, profileLpoading, getItemsError } from './profileSlice'
// import { selectProfileData, selectProfileLoading, selectProfileError } from './profileSlice';


export default function Profile() {
    const dispatch = useDispatch();
    const [isLoggingOut, setIsLoggingOut] = useState(false);

    const profileData = useSelector(getItems);
    const loading = useSelector(profileLpoading);
    const error = useSelector(getItemsError);

    useEffect(() => {
        console.log("====dispatch triggered====");
        dispatch(fetchProfileThunk());
    }, [dispatch]);

    useEffect(() => {
        if (profileData && Object.keys(profileData).length > 0) {
            console.log("===profileData===", profileData);
        }
    }, [profileData]);

    const logOut = () => {
        setIsLoggingOut(true);

    };
    const closeModal = () => {
        setIsLoggingOut(false)
    }
    const getGradeWithSuffix = (grade) => {
        if (!grade) return "N/A";
        const lastDigit = grade % 10;
        const lastTwoDigits = grade % 100;

        if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
            return grade + "th";
        }
        switch (lastDigit) {
            case 1: return grade + "st";
            case 2: return grade + "nd";
            case 3: return grade + "rd";
            default: return grade + "th";
        }
    };
    const getInitials = (name) => {
        if (!name) return "";
        const firstInitial = name[0] || '';
        const secondInitial = name[1] || '';
        return `${firstInitial}${secondInitial}`.toUpperCase();
    };

    return (
        <ScrollView style={styles.mainView}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
        >
            {loading ? (
                <View >
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            ) : (
                <>
                    {/* Profile Section */}
                    <View style={styles.profileView}>
                        {/* icon */}
                        <View style={styles.icon}>
                            <Text style={styles.iconText}>{getInitials(profileData && profileData[0] ? profileData[0].displayName : "N/A")}</Text>
                        </View>
                        {/* Name section */}
                        <View style={styles.nameSection}>
                            <Text style={styles.name}>
                                {profileData && profileData[0] ? profileData[0].displayName : "N/A"}
                            </Text>
                            {/* <Text style={styles.email}>Amber2342@yopmail.com</Text> */}
                        </View>
                    </View>
                    {/* Personal details section */}
                    <View style={styles.personalDetails}>
                        <View style={styles.details}>
                            <Text style={styles.personalText2}>Id- <Text style={styles.personalText1}>
                                {profileData && profileData[0] ? profileData[0].displayId : "N/A"}
                            </Text></Text>
                            <View style={styles.partition}></View>
                            <Text style={styles.personalText1}>
                                {profileData && profileData[0] ? getGradeWithSuffix(profileData[0].grade) : "N/A"}
                                <Text style={styles.personalText2} >Grade</Text></Text>
                            <View style={styles.partition}></View>
                            <Text style={styles.personalText1}>
                                {profileData && profileData[0] ? profileData[0].section : "N/A"}
                                <Text style={styles.personalText2}>Section</Text></Text>
                        </View>
                        <View style={styles.school}>
                            <Text style={styles.personalText2}>
                                {profileData && profileData[0] ? profileData[0].schoolName : "N/A"}
                            </Text>
                        </View>
                    </View>
                    {/* Profile Section */}
                    <View style={styles.profileSection}>
                        <Text style={styles.profileText}>Profile Status</Text>
                        {/* Grid view */}
                        <View style={styles.gridView}>
                            <View style={styles.gridFirstRow}>
                                <View style={styles.gridFirstItem}>
                                    <View style={styles.gridFirstItemHeader}>
                                        <View style={styles.gridFirstItemHeaderLogo}>
                                            <Fist width={24} height={24} />
                                            {/* <Arrow width={24} height={24} /> */}
                                        </View>
                                        <Arrow width={24} height={24} />
                                    </View>

                                    <View style={styles.gridFirstItemContainer}>
                                        <View style={styles.number}>
                                            <Text style={styles.numberText}>
                                                {profileData && profileData[0] ? profileData[0].reportsCount : "N/A"}
                                            </Text>
                                        </View>
                                        <View style={styles.type}>
                                            <Text style={styles.typeText}>
                                                Incidents
                                            </Text>
                                            <Text style={styles.typeText}>reported</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.gridFirstItem}>
                                    <View style={styles.gridFirstItemHeader}>
                                        <View style={styles.gridFirstItemHeaderLogo}>
                                            <Notebook width={24} height={24} />
                                            {/* <Arrow width={24} height={24} /> */}
                                        </View>
                                        <Arrow width={24} height={24} />
                                    </View>

                                    <View style={styles.gridFirstItemContainer}>
                                        <View style={styles.number}>
                                            <Text style={styles.numberText}>
                                                {profileData && profileData[0] ? profileData[0].surveyResponseCount : "N/A"}
                                            </Text>
                                        </View>
                                        <View style={styles.type}>
                                            <Text style={styles.typeText}>ARP Surveys</Text>
                                            <Text style={styles.typeText}>completed</Text>
                                        </View>
                                    </View>
                                </View>

                            </View>

                            <View style={styles.gridSecondRow}>
                                <View style={styles.gridFirstItemHeader}>
                                    <View style={styles.gridFirstItemHeaderLogo}>
                                        <Reading_Book width={24} height={24} />
                                        {/* <Arrow width={24} height={24} /> */}
                                    </View>
                                    <Arrow width={24} height={24} />
                                </View>
                                <View style={styles.gridFirstItemContainer}>
                                    <View style={styles.number}>
                                        <Text style={styles.numberText}>
                                            {profileData && profileData[0] ? profileData[0].assignLessonsCount : "N/A"}
                                        </Text>
                                    </View>
                                    <View style={styles.type}>
                                        <Text style={styles.typeText}>Lessons completed</Text>
                                        {/* <Text style={styles.typeText}>reported</Text> */}
                                    </View>
                                </View>
                            </View>

                        </View>
                    </View>
                    {/* Logout Button */}
                    <TouchableOpacity style={styles.logoutView} onPress={() => logOut()}>
                        <Text style={styles.LogoutText}>Logout</Text>
                    </TouchableOpacity>
                    {/* Modal */}
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={isLoggingOut}
                        onRequestClose={() => setModalVisible(false)}
                    >
                        <Logout closeModal={closeModal} />
                    </Modal>
                </>
            )}


        </ScrollView >
    )
}

const styles = StyleSheet.create({
    mainView: {
        // backgroundColor: "red",
        flex: 1,
        marginTop: 16,
        marginLeft: 24,
        marginRight: 24
    },
    profileView: {
        display: "flex",
        flexDirection: "row"
    },
    icon: {
        width: 60,
        height: 60,
        backgroundColor: "#1973BE",
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconText: {
        fontWeight: "600",
        fontSize: 32,
        color: "#F6F7FB",
    },
    nameSection: {
        display: "flex",
        flexDirection: "column",
        marginLeft: 16,
        marginTop: 8,
        marginBottom: 8,
        // backgroundColor: "red"
    },
    name: {
        fontWeight: "600",
        fontSize: 16,
        color: "#263238"
    },
    email: {
        fontWeight: "500",
        fontSize: 12,
        color: "#999A9A",
        textDecorationLine: "underline",

    },
    personalDetails: {
        marginTop: 24
    },
    details: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        // width: "100%",
        backgroundColor: "#FFFFFF",
        height: 44,
        borderRadius: 8,
        marginBottom: 8
    },
    school: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        paddingLeft: 8,
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        height: 44,
        borderRadius: 8,
    },
    partition: {
        width: 1,
        height: 27,
        backgroundColor: "#E7E8EB",
        // marginTop: 8.5,
        // marginBottom: 8.5
    },
    profileSection: {
        marginTop: 32,
        // height: 50,

    },
    profileText: {
        fontWeight: "600",
        fontSize: 16,
        color: "#263238"
    },
    gridView: {
        marginTop: 16,
        // backgroundColor: "blue"
    },
    gridFirstRow: {
        flexWrap: "wrap",
        gap: 16,
        flexDirection: "row",
        // marginBottom: 10, // Gap between rows
        // backgroundColor: 'red',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        // height: 100,

    },
    gridFirstItem: {
        flex: 1,
        height: 198,
        backgroundColor: "#ffffff",
        borderRadius: 8,
        padding: 16
    },
    gridFirstItemHeader: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between", // Distribute items across the available space
        alignItems: "center",
        // backgroundColor: "red"

    },
    gridFirstItemHeaderLogo: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 46,
        height: 46,
        borderRadius: 46 / 2,
        backgroundColor: "#FFC94B"
    },
    gridFirstItemContainer: {
        marginTop: 8,
        height: 112,
        // backgroundColor: "red"
    },
    number: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        // alignContent: "center",
        // alignItems: "center",

        height: 72,
        // backgroundColor: "red"
    },
    numberText: {
        fontWeight: "600",
        fontSize: 48,
        color: "#263238",

    },
    type: {
        display: "flex",
        flexDirection: "column"
    },
    typeText: {
        fontWeight: "500",
        fontSize: 14,
        color: "#263238"
    },
    gridSecondRow: {
        backgroundColor: "#ffffff",
        marginTop: 16,
        borderRadius: 8,
        padding: 16,
        // height: 100
    },
    gridSecondtItemHeader: {
        display: "flex",
        flexDirection: "row",
        height: 20,
        backgroundColor: "red"
    },
    logoutView: {
        marginTop: 10,
        marginBottom: 12,
        width: 95,
        borderRadius: 8,
        // display: "flex",
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 24,
        paddingRight: 24,
        backgroundColor: "#E6ECF2"
    },
    LogoutText: {
        fontWeight: "500",
        fontSize: 14,
        color: "#E22B2B"
    },
    personalText1: {
        fontWeight: "700",
        fontSize: 14,
        color: "#263238"
    },
    personalText2: {
        fontWeight: "500",
        fontSize: 14,
        color: "#263238"
    },
})