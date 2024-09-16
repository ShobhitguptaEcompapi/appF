import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Cross from "../assets/SVG/Cross.svg"
import { connect, useDispatch, useSelector } from "react-redux";
import { logout } from "../services/slices/authSlice"
import { setLogout, resetError } from "../services/slices/authSlice";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from "expo-router";


const logoutView = ({ closeModal, logoutLoading, logoutError, logoutComplete }) => {
    const [deviceToken, setDeviceToken] = useState("");
    const dispatch = useDispatch();
    useEffect(() => {
        getDeviceToken()
    }, [])

    const getDeviceToken = async () => {
        const token = await AsyncStorage.getItem("device-token");
        setDeviceToken(token);
    }
    const pressLogout = async () => {
        if (deviceToken) {
            await dispatch(logout(deviceToken));
            await AsyncStorage.clear();
            console.log("========logout  completed with cleaer async=========")
        } else {
            console.log('No device token found');
        }
    }
    const exitProfile = async () => {
        try {
            await dispatch(setLogout());
            console.log("========logout  completed before move to login=========")
            router.replace("/login");
            console.log("========logout  completed After move to login=========")
        } catch (error) {
            console.error("Logout failed: ", error);
        }
    };
    useEffect(() => {
        return () => {
            dispatch(resetError());
        };
    }, [dispatch]);

    useEffect(() => {
        if (logoutComplete) {
            exitProfile()
        }
    }, [logoutComplete])

    return (
        <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
                <View style={styles.contentView}>
                    {/* cross */}
                    <View style={styles.crossView}>
                        <TouchableOpacity onPress={closeModal}
                        >
                            <View style={styles.crossBlock}>
                                <Cross width={12} height={12} fill={"#205989"} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/* LogoutView */}
                    <View style={styles.logoutView}>
                        <View style={styles.logoutMainView}>
                            <Text style={styles.logoutText}>Logout</Text>
                            <Text style={styles.logoutConfirmText}>
                                Are you sure you want to logout from the Mentor App? Your progress will be saved anyways.
                            </Text>
                        </View>
                        {/* LogoutButton */}
                        <View style={styles.logoutButtonView}>
                            <TouchableOpacity
                                style={styles.logoutButton}
                                onPress={() => pressLogout()}
                            >
                                <Text style={styles.logoutButtonText}>Yes, Logout</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: "85%",
        // height: "28%",
        paddingTop: 16,
        backgroundColor: "#ffffff",
        paddingLeft: 24,
        paddingRight: 24,
        paddingBottom: 32,
        borderRadius: 8,

    },
    contentView: {
        // backgroundColor: "red"
    },
    modalText: {
        fontSize: 18,
        marginBottom: 15,
    },
    crossView: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'flex-end',
        width: "100%",
        // backgroundColor: "blue"
    },
    crossBlock: {
        width: 28,
        height: 28,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

    },
    logoutView: {
        marginTop: 8,
        // marginBottom: 32,
        display: "flex",
        flexDirection: "column",
        gap: 24,
        width: '100%',
        alignItems: 'center',
        // backgroundColor: "pink"
        // padding: 10,
    },
    logoutMainView: {
        width: '100%',
        alignItems: 'center',
    },
    logoutText: {
        fontSize: 24,
        fontWeight: "700",
        color: "#263238",
    },
    logoutConfirmText: {
        fontSize: 14,
        fontWeight: "500",
        color: "#263238",
        textAlign: "center",
        marginTop: 8
    },
    logoutButtonView: {
        display: "flex",
        justifyContent: "center"
    },
    logoutButton: {
        borderRadius: 8,
        padding: 10,
        backgroundColor: "#E6ECF2",
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 45,
        paddingRight: 45
    },
    logoutButtonText: {
        fontSize: 16,
        fontWeight: "600",
        color: "#E22B2B"
    }

})

export default connect(({ userData }) => ({
    logoutError: userData.error,
    logoutLoading: userData.loading,
    logoutComplete: userData.islogout
}))(logoutView);