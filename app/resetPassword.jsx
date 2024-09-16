import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
  Animated,
  ActivityIndicator,
  StatusBar,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { Appbar } from "react-native-paper";
import { router } from "expo-router";
import AuthInput from "@/components/AuthInput";
import {
  forgetPassword,
  resetError,
  resetForgetPassResponse,
} from "../services/slices/authSlice";
import { connect, useDispatch, useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";

const ResetPassword = (props) => {
  const dispatch = useDispatch();

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const scrollViewRef = useRef(null);
  const [email, setEmail] = useState("");
  const animatedMarginTop = useRef(new Animated.Value(-60)).current; // Start with the default value

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);

        Animated.timing(animatedMarginTop, {
          toValue: -220,
          duration: 300, // duration of the transition
          useNativeDriver: false,
        }).start();
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);

        Animated.timing(animatedMarginTop, {
          toValue: -60,
          duration: 300, // duration of the transition
          useNativeDriver: false,
        }).start();
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  useEffect(() => {
    // Reset the error when the component unmounts
    return () => {
      dispatch(resetError());
      dispatch(resetForgetPassResponse());
    };
  }, [dispatch]);

  // console.log(
  //   "Check Error =",
  //   props?.forgetPassError,
  //   " : Response =",
  //   props?.forgetResponse
  // );

  // console.log("Condition =", (props?.forgetResponse?.length == 0))

  return (
    <SafeAreaView style={{ backgroundColor: "#ffffff", flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <Appbar.Header
          statusBarHeight={0}
          style={{ backgroundColor: "#ffffff", height: 45 }}
        />
        <StatusBar barStyle="dark-content" />
        <View style={styles.container}>
          {/* <Appbar.Header statusBarHeight={0} style={{ backgroundColor: "#F6F7FB", height : 50 }}>
          <Appbar.BackAction
            onPress={() => {
              router.back();
            }}
            size={24}
            color="#263238"
          />
          <Appbar.Content
            title="Back"
            titleStyle={{
              fontSize: 16,
              fontFamily: "Poppins 500",
              color: "#263238",
            }}
            onPress={() => router.back()}
          />
        </Appbar.Header> */}
          <View style={styles.resetImageWrapper}>
            <Image
              source={require("../assets/images/resetPasswordImg.png")}
              style={styles.resetImageBackground}
            />
          </View>
          <Animated.View
            style={{
              marginTop: animatedMarginTop,
              ...styles.detailSection,
            }}
          >
            <Text style={styles.resetMainText}>Reset Password</Text>
            <Text style={styles.resetSecondaryText}>
              Enter the email associated with your account and we{"\n"} will
              send an email with instructions to reset your{"\n"} password.
            </Text>
            <View style={styles.inputViews}>
              <AuthInput
                label="Enter email addresss"
                underlineColor={
                  props?.forgetResponse?.length != 0 ? "#6A9217" : "#DBDFE0"
                }
                underlineThickness={1}
                activeUnderlineColor={
                  props?.forgetResponse?.length != 0 ? "#6A9217" : "#1973BE"
                }
                inputColor="#263238"
                showIconImage={false}
                mode="flat"
                bottomMessage={null}
                showErrorHighlight={props?.forgetPassError ? true : false}
                allowForgetPassword={false}
                marginTop={0}
                showInputField={true}
                onChangeText={(text) => setEmail(text.toLowerCase())}
              />
              <TouchableOpacity
                onPress={() => {
                  // router.push("/createPassword");
                  dispatch(forgetPassword(email));
                  dispatch(resetError());
                  dispatch(resetForgetPassResponse());
                }}
                style={styles.sendButton}
              >
                {props?.forgetPassLoading ? (
                  <ActivityIndicator size="small" color="#FFFFFF" />
                ) : (
                  <Text style={styles.sendText}>Send instructions</Text>
                )}
              </TouchableOpacity>
              <Text style={styles.bottomText}>
                NOTE: Only Parents can Reset Password. Students can only reset
                password by contacting their ARP teacher.
              </Text>
              {props?.forgetPassError && (
                <Text style={styles.errorText}>
                  Could not find an account linked with this email id.{"\n"}
                  Please check any typing mistake or retry.
                </Text>
              )}
              {props?.forgetResponse?.length != 0 && (
                <Text style={styles.successText}>
                  Verificaion Email is sent to your Entered email.
                </Text>
              )}
            </View>
          </Animated.View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F7FB",
  },
  resetImageWrapper: {
    marginTop: 20,
    alignItems: "center",
    backgroundColor: "#F6F7FB",
    width: "100%",
    height: 200,
  },
  resetImageBackground: {
    flex: 1,
    resizeMode: "contain",
    width: "35%",
    // backgroundColor: "green",
  },
  detailSection: {
    height: "100%",
    backgroundColor: "#ffffff",
    marginLeft: "4%",
    marginRight: "4%",
    borderRadius: 15,
    alignItems: "center",
  },
  resetMainText: {
    fontSize: 24,
    fontFamily: "Poppins 700",
    marginTop: "7%",
  },
  resetSecondaryText: {
    marginTop: 4,
    fontSize: 12,
    fontFamily: "Poppins 500",
    textAlign: "center",
    color: "#263238s",
  },
  inputViews: {
    marginTop: 12,
    width: "85%",
    // backgroundColor : "blue"
  },
  sendButton: {
    marginTop: 15,
    height: 44,
    backgroundColor: "#1973BE",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 15,
  },
  sendText: {
    fontSize: 16,
    fontFamily: "Poppins 600",
    color: "#ffffff",
  },
  errorText: {
    marginTop: 4,
    color: "#E22B2B",
    fontFamily: "Poppins 500",
    fontSize: 12,
  },
  successText: {
    color: "#6A9217",
    fontFamily: "Poppins 500",
    fontSize: 12,
  },
  bottomText: {
    fontSize: 12,
    fontFamily: "PoppinsItalic 400",
    color: "#999A9A",
  },
});

export default connect(({ userData }) => ({
  forgetResponse: userData.forgetPassword,
  forgetPassError: userData.error,
  forgetPassLoading: userData.loading,
}))(ResetPassword);
