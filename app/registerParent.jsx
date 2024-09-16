import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import AuthInput from "@/components/AuthInput";
import React, { useState, useEffect, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar } from "react-native-paper";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  registerParent,
  resetError,
  resetRegisterParent,
} from "../services/slices/authSlice";
import Toast from "react-native-toast-message";

const RegisterParent = (props) => {
  const dispatch = useDispatch();

  const [uniqueId, setUniqueId] = useState("");
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [matchText, setMatchText] = useState("");
  const timerRef = useRef(null);

  const validateForm = () => {
    let errors = {};

    // Validate email field
    if (!email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid.";
    }

    // Validate uniqueId field
    if (!uniqueId) {
      errors.studentId = "Unique Id is required.";
    }

    // Validate password field
    if (newPassword.length > 0 && newPassword.length < 8) {
      errors.password = "Must be atleast 8 characters";
    }

    if (confirmPassword.length > 0) {
      if (newPassword !== confirmPassword) {
        setMatchText("Password not Matched");
        errors.passwordMatch = "Password not Matched";
      } else {
        setMatchText("Password matched");
      }
    } else {
      setMatchText("");
    }

    // Set the errors and update form validity
    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const handleConfirmPasswordChange = (text) => {
    if (timerRef.current) clearTimeout(timerRef.current); // Clear the previous timer
    // Set a new timer
    timerRef.current = setTimeout(() => {
      setConfirmPassword(text);
    }, 500); // 1 second delay
  };

  const handleOnSubmit = () => {
    if (isFormValid) {
      dispatch(registerParent({ email, uniqueId, confirmPassword }));
    } else {
      Toast.show({
        type: "info",
        text1: "Enter fields might be empty or incorrect",
        position: "bottom",
        text1Style: {
          fontSize: 12,
          fontFamily: "Poppins 500",
          fontWeight: 500,
        },
      });
    }
  };

  useEffect(() => {
    validateForm();
  }, [email, newPassword, uniqueId, confirmPassword]);

  useEffect(() => {
    // Reset the error when the component unmounts
    return () => {
      dispatch(resetError());
      dispatch(resetRegisterParent());
    };
  }, [dispatch]);

  // console.log(
  //   "Check =",
  //   props?.registerError,
  //   props?.registerLoading,
  //   props?.registerParent
  // );

  return (
    <SafeAreaView style={{backgroundColor : "#ffffff", flex: 1}}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <Appbar.Header
          statusBarHeight={0}
          style={{ backgroundColor: "#ffffff", height : 45 }}
        />
        <StatusBar barStyle="dark-content" />
        <View style={styles.container}>
          <View style={styles.detailSection}>
            <Text style={styles.registerMainText}>Register as a Parent</Text>
            <Text style={styles.registerSecondaryText}>
              Enter the details below and register as a parent to access the
              Bully proof Mentor app
            </Text>
            <View style={styles.inputViews}>
              <AuthInput
                label="Enter your email address"
                underlineColor="#DBDFE0"
                underlineThickness={1}
                activeUnderlineColor="#1973BE"
                inputColor="#263238"
                showIconImage={false}
                mode="flat"
                bottomMessage={null}
                allowForgetPassword={false}
                marginTop={0}
                showInputField={true}
                onChangeText={(text) => setEmail(text)}
              />
              <AuthInput
                label="Enter Student unique ID"
                underlineColor="#DBDFE0"
                underlineThickness={1}
                activeUnderlineColor="#1973BE"
                inputColor="#263238"
                showIconImage={false}
                mode="flat"
                bottomMessage={
                  props?.registerError === "Invalid unique ID"
                    ? props?.registerError
                    : ""
                }
                showErrorHighlight={
                  props?.registerError === "Invalid unique ID" ? true : false
                }
                bottomTextColor={"#E22B2B"}
                allowForgetPassword={false}
                marginTop={10}
                showInputField={true}
                onChangeText={(text) => setUniqueId(text)}
              />
              <AuthInput
                label="New Password"
                underlineColor="#1973BE"
                underlineThickness={1}
                activeUnderlineColor="#1973BE"
                inputColor="#263238"
                showIconImage={true}
                mode="flat"
                bottomMessage={
                  errors?.password && errors?.password.length !== 0
                    ? "Must be atleast 8 characters"
                    : ""
                }
                bottomTextFontFamily={"PoppinsItalic 400"}
                showErrorHighlight={false}
                allowForgetPassword={false}
                marginTop={10}
                bottomTextColor={"#B3B3B3"}
                onChangeText={(text) => setNewPassword(text)}
              />
              <AuthInput
                label="Confirm Password"
                underlineColor="#1973BE"
                underlineThickness={1}
                activeUnderlineColor="#1973BE"
                inputColor="#263238"
                showIconImage={true}
                mode="flat"
                bottomMessage={matchText}
                showErrorHighlight={
                  errors?.passwordMatch && errors?.passwordMatch.length
                    ? true
                    : false
                }
                allowForgetPassword={false}
                bottomTextColor={
                  errors?.passwordMatch && errors?.passwordMatch.length !== 0
                    ? "#E22B2B"
                    : "#6A9217"
                }
                bottomIcon={
                  errors?.passwordMatch && errors?.passwordMatch.length !== 0
                    ? "xmark"
                    : "check"
                }
                bottomIconBackgroundColor={
                  errors?.passwordMatch && errors?.passwordMatch.length
                    ? "#E22B2B80"
                    : "#E9FFB9"
                }
                bottomIconColor={
                  errors?.passwordMatch && errors?.passwordMatch.length
                    ? "#E22B2B"
                    : "#6A9217"
                }
                marginTop={10}
                onChangeText={handleConfirmPasswordChange}
              />
              <View
                style={{
                  marginTop:
                    props?.registerError !== "Invalid unique ID" &&
                    props?.registerError
                      ? 5
                      : 20,
                }}
              ></View>
              {props?.registerError !== "Invalid unique ID" &&
              props?.registerError ? (
                <Text style={styles.registerErrorText}>
                  {props?.registerError}
                </Text>
              ) : null}
              <TouchableOpacity
                onPress={handleOnSubmit}
                style={styles.registerButton}
              >
                {props?.registerLoading ? (
                  <ActivityIndicator size="small" color="#FFFFFF" />
                ) : (
                  <Text style={styles.registerText}>Register</Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
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
  detailSection: {
    height: "100%",
    backgroundColor: "#ffffff",
    marginTop: 25,
    marginLeft: "5%",
    marginRight: "5%",
    borderRadius: 15,
    alignItems: "center",
  },
  logoImage: {
    marginTop: "3%",
    width: "28%",
    resizeMode: "contain",
  },
  registerMainText: {
    fontSize: 24,
    fontFamily: "Poppins 600",
    marginTop: 30,
  },
  registerSecondaryText: {
    marginTop: 4,
    fontSize: 12,
    fontFamily: "Poppins 500",
    textAlign: "center",
  },
  inputViews: {
    marginTop: 12,
    width: "85%",
  },
  registerErrorText: {
    marginTop: 10,
    color: "#E22B2B",
    fontFamily: "Poppins 500",
    fontSize: 12,
  },
  registerButton: {
    marginTop: 5,
    height: 44,
    backgroundColor: "#1973BE",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 15,
  },
  registerText: {
    fontSize: 16,
    fontFamily: "Poppins 600",
    color: "#ffffff",
  },
});

export default connect(({ userData }) => ({
  registerParent: userData.registerParent,
  registerError: userData.error,
  registerLoading: userData.loading,
}))(RegisterParent);
