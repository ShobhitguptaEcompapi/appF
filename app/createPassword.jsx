import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
  Animated
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { Appbar } from "react-native-paper";
import { router } from "expo-router";
import AuthInput from "@/components/AuthInput";

const CreatePassword = () => {
const [newPassword, setNewPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [isValid, setIsValid] = useState(true);
const [matchText, setMatchText] = useState("");
const [passwordMatch, setPasswordMatch] = useState(false);
const [isKeyboardVisible, setKeyboardVisible] = useState(false);
const timerRef = useRef(null);
const animatedMarginTop = useRef(new Animated.Value(-48)).current; // Start with the default value

useEffect(() => {
  const keyboardDidShowListener = Keyboard.addListener(
    "keyboardDidShow",
    () => {
      setKeyboardVisible(true);

      Animated.timing(animatedMarginTop, {
        toValue: -200,
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
        toValue: -48,
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

const handlePasswordChange = (text) => {
  setNewPassword(text);
  if (text.length > 0 && text.length < 8) {
    setIsValid(false);
  } else {
    setIsValid(true);
  }
};

const handleConfirmPasswordChange = (text) => {
  setConfirmPassword(text);
  if (timerRef.current) clearTimeout(timerRef.current); // Clear the previous timer
  // Set a new timer
  timerRef.current = setTimeout(() => {
    if (text.length > 0) {
      if (newPassword !== text) {
        setMatchText("Password not Matched")
        setPasswordMatch(false);
      } else {
        setMatchText("Password matched")
        setPasswordMatch(true);
      }
    } else {
      setMatchText("")
    }
  }, 500); // 1 second delay

};


  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.container}>
        <Appbar.Header style={{ backgroundColor: "#F6F7FB" }}>
          <Appbar.BackAction
            onPress={() => {
              router.back();
            }}
            size={24}
            color= '#263238'
          />
          <Appbar.Content
            title="Back"
            titleStyle={{ fontSize: 16, fontFamily: "Poppins 500", color: '#263238' }}
            onPress={() => router.back()}
          />
        </Appbar.Header>
        <View style={styles.createImageWrapper}>
          <Image
            source={require("../assets/images/createPasswordImg.png")}
            style={styles.createImageBackground}
          />
        </View>
        <Animated.View
          style={{
            marginTop: animatedMarginTop,
            ...styles.detailSection,
          }}
        >
          <Text style={styles.createMainText}>Create new password</Text>
          <Text style={styles.createSecondaryText}>
            Your new password must be different from{"\n"}previous used
            passwords
          </Text>
          <View style={styles.inputViews}>
            <AuthInput
              label="New Password"
              underlineColor="#1973BE"
              underlineThickness={1}
              activeUnderlineColor="#1973BE"
              inputColor="#263238"
              showIconImage={true}
              mode="flat"
              bottomMessage={isValid ? "" : "Must be atleast 8 characters"}
              showErrorHighlight={false}
              allowForgetPassword={false}
              marginTop={0}
              bottomTextColor={'#B3B3B3'}
              onChangeText={handlePasswordChange}
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
              showErrorHighlight={!matchText || passwordMatch ? false : true}
              allowForgetPassword={false}
              bottomTextColor={passwordMatch ?"#6A9217" : "#E22B2B"}
              bottomIcon={passwordMatch ? 'check' : 'xmark'}
              bottomIconBackgroundColor={passwordMatch ? "#E9FFB9" : "#E22B2B80"}
              bottomIconColor={passwordMatch ? "#6A9217" : "#E22B2B"}
              marginTop={0}
              onChangeText={handleConfirmPasswordChange}
            />
            <TouchableOpacity onPress={() => {}} style={styles.resetButton}>
              <Text style={styles.resetText}>Reset Password</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F7FB",
  },
  createImageWrapper: {
    marginTop: 20,
    alignItems: "center",
    // backgroundColor: "#000",
    width: "100%",
    height: 180,
  },
  createImageBackground: {
    flex: 1,
    resizeMode: "contain",
    width: "30%",
    // backgroundColor: "green",
  },
  detailSection: {
    height: "100%",
    backgroundColor: "#ffffff",
    // marginTop: -48,
    marginLeft: "4%",
    marginRight: "4%",
    borderRadius: 15,
    alignItems: "center",
  },
  createMainText: {
    fontSize: 24,
    lineHeight: 36,
    fontFamily: "Poppins 700",
    marginTop: "7%",
  },
  createSecondaryText: {
    marginTop: 4,
    fontSize: 14,
    fontFamily: "Poppins 500",
    textAlign: "center",
    color: "#263238s",
  },
  inputViews: {
    marginTop: 10,
    width: "85%",
    // backgroundColor : "blue"
  },
  resetButton: {
    marginTop: 15,
    height: 44,
    backgroundColor: "#1973BE",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginBottom : 15
  },
  resetText: {
    fontSize: 16,
    fontFamily: "Poppins 600",
    color: "#ffffff",
  },
});

export default CreatePassword;
