import {
  Text,
  View,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Animated,
  ActivityIndicator,
  TextInput as Input,
} from "react-native";
import { TextInput } from "react-native-paper";
import { useState, useRef, useEffect } from "react";
import AuthInput from "@/components/AuthInput";
import { router } from "expo-router";
import { connect, useDispatch, useSelector } from "react-redux";
import { loginUser, resetError, setLogin } from "../services/slices/authSlice";
import Toast from "react-native-toast-message";
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from "@react-native-async-storage/async-storage";
// import messaging from '@react-native-firebase/messaging';

const LoginPage = (props) => {
  const dispatch = useDispatch();

  const [userInput, setUserInput] = useState({
    userId: "",
    password: "",
  });
  const [deviceToken, setDeviceToken] = useState("");
  // const [errorMessage, setErrorMessage] = useState(props?.loginError);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const scrollViewRef = useRef(null);
  const animatedMarginTop = useRef(new Animated.Value(-180)).current; // Start with the default value

  useEffect(() => {
    getDeviceToken();
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);

        Animated.timing(animatedMarginTop, {
          toValue: -350,
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
          toValue: -180,
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

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleInputChange = (key, text) => {
    setUserInput((prevState) => ({
      ...prevState,
      [key]: text,
    }));
  };

  useEffect(() => {
    return () => {
      dispatch(resetError());
    };
  }, [dispatch]);

  console.log(
    "=========Check ========",
    // props?.loginError,
    props?.loginLoading,
    props?.userData,
    props?.isLogout
  );
  useEffect(() => {
    if (!props?.loginLoading && !props.isLogout && Object.keys(props?.userData || {}).length > 0) {
      console.log("MOve to Helpline", props?.isLogout)
      router.replace("/(tabs)/Helpline");
    }
  }, [props?.isLogout, props?.loginLoading, props?.userData])

  const getDeviceToken = async () => {
    try {
      let token = await AsyncStorage.getItem("device-token");

      if (token) {
        console.log("Token found in storage:", token);
        setDeviceToken(token);
      } else {
        token = await messaging().getToken();
        await AsyncStorage.setItem("device-token", token);
        console.log("New token fetched and stored:", token);
        setDeviceToken(token);
      }
    } catch (error) {
      console.error("Error getting device token:", error);
    }
  };


  return (
    <ScrollView
      ref={scrollViewRef}
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.container}>
        <View style={styles.ImageWrapper}>
          <Image
            source={require("../assets/images/loginImage.png")}
            style={styles.ImageBackground}
          />
        </View>

        <Animated.View
          style={{
            marginTop: animatedMarginTop,
            ...styles.detailSection,
          }}
        >
          <Image
            source={require("../assets/images/mentorAppLogo.png")}
            style={styles.logoImage}
          />
          <Text style={styles.welcomeText}>Welcome to Mentor App</Text>
          <Text style={styles.loginText}>
            Enter your unique ID and password to login
          </Text>
          <View style={styles.inputViews}>
            <AuthInput
              label="Enter unique ID"
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
              onChangeText={(text) => handleInputChange("userId", text)}
            />
            <AuthInput
              label="Enter Password"
              underlineColor="#DBDFE0"
              underlineThickness={1}
              activeUnderlineColor="#1973BE"
              inputColor="#263238"
              showIconImage={true}
              mode="flat"
              bottomMessage={
                props?.loginError == "Unexpected error"
                  ? "Something went wrong. Please contact the admin"
                  : props?.loginError
                    ? "Credentials entered are incorrect"
                    : ""
              }
              showErrorHighlight={props?.loginError ? true : false}
              allowForgetPassword={true}
              bottomTextColor={"#E22B2B"}
              marginTop={10}
              onChangeText={(text) => handleInputChange("password", text)}
            />
            <TouchableOpacity
              onPress={() => {
                // router.push("/resetPassword");
                if (
                  userInput?.userId.length !== 0 &&
                  userInput?.password.length !== 0
                ) {
                  dispatch(loginUser({ userInput, deviceToken }));
                  dispatch(setLogin())
                } else {
                  Toast.show({
                    type: "info",
                    text1: "Enter all the fields to continue.",
                    position: "bottom",
                    text1Style: {
                      fontSize: 12,
                      fontFamily: "Poppins 500",
                      fontWeight: 500,
                    },
                  });
                }
              }}
              style={{
                opacity:
                  userInput?.userId.length == 0 &&
                    userInput?.password.length == 0
                    ? 0.5
                    : 1,
                ...styles.signInButton,
              }}
            >
              {props?.loginLoading ? (
                <ActivityIndicator size="small" color="#FFFFFF" />
              ) : (
                <Text style={styles.signInText}>Sign In</Text>
              )}
            </TouchableOpacity>
          </View>
          <Text style={styles.parentRegisterText}>
            Are you a Parent?{" "}
            <Text
              style={{ color: "#1973BE", textDecorationLine: "underline" }}
              onPress={() => {
                router.push("/registerParent");
              }}
            >
              Register Now
            </Text>
          </Text>
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
  ImageWrapper: {
    marginTop: "10%",
    alignItems: "center",
    // backgroundColor: "#000",
    width: "100%",
    height: 350,
  },
  ImageBackground: {
    flex: 1,
    resizeMode: "contain",
    width: "90%",
    // backgroundColor: "#0000ff",
  },
  detailSection: {
    height: "100%",
    backgroundColor: "#ffffff",
    marginLeft: "4%",
    marginRight: "4%",
    borderRadius: 15,
    alignItems: "center",
  },
  logoImage: {
    marginTop: 28,
    marginBottom: 10,
    width: "28%",
    height: 35,
    resizeMode: "contain",
  },
  welcomeText: {
    fontSize: 24,
    fontFamily: "Poppins 600",
  },
  loginText: {
    marginTop: 4,
    fontSize: 12,
    fontFamily: "Poppins 500",
  },
  inputViews: {
    marginTop: 12,
    marginBottom: 20,
    width: "85%",
  },
  signInButton: {
    marginTop: 15,
    height: 44,
    backgroundColor: "#1973BE",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    // marginBottom : 15
  },
  signInText: {
    fontSize: 16,
    fontFamily: "Poppins 600",
    color: "#ffffff",
  },
  parentRegisterText: {
    color: "#999A9A",
    fontSize: 12,
    fontFamily: "Poppins 500",
  },
});

export default connect(({ userData }) => ({
  userData: userData.loggedUser,
  loginError: userData.error,
  loginLoading: userData.loading,
  isLogout: userData.islogout
}))(LoginPage);
