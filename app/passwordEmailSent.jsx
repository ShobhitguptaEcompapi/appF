import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
    Image,
  } from "react-native";
  import React from "react";
  import { SafeAreaView } from "react-native-safe-area-context";
  import { Appbar } from "react-native-paper";
  import { router } from "expo-router";

const PasswordEmailSent = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#ffffff", flex: 1 }}>
      <View style={styles.container}>
        <Appbar.Header
          statusBarHeight={0}
          style={{ backgroundColor: "#ffffff", height: 45 }}
        />
        <StatusBar barStyle="dark-content" />
        <View style={styles.successImageWrapper}>
          <Image
            source={require("../assets/images/successImage.png")}
            style={styles.successImageBackground}
          />
        </View>
        <View style={styles.detailSection}>
          <Text style={styles.passwordSentMainText}>Check your email</Text>
          <Text style={styles.passwordSentSecondaryText}>
            We have sent a password recover{"\n"}instructions to your email.
          </Text>
          <TouchableOpacity
            onPress={() => {
              router.push("/login");
            }}
            style={styles.backToLoginButton}
          >
            <Text style={styles.backToLoginText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexGrow: 1 }} />
        <Text style={styles.bottomText}>Did not receive the email? Check your spam filter,{"\n"}or <Text style={{color: "#1973BE"}} >try another email address</Text></Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F7FB",
  },
  successImageWrapper: {
    marginTop: 60,
    alignItems: "center",
    //   backgroundColor: "#000",
    width: "100%",
    height: 180,
  },
  successImageBackground: {
    flex: 1,
    resizeMode: "contain",
    width: "30%",
  },
  detailSection: {
    backgroundColor: "#ffffff",
    marginTop: -48,
    marginLeft: "5%",
    marginRight: "5%",
    padding: 32,
    borderRadius: 15,
    alignItems: "center",
  },
  passwordSentMainText: {
    fontSize: 22,
    lineHeight: 36,
    fontFamily: "Poppins 600",
  },
  passwordSentSecondaryText: {
    marginTop: 8,
    fontSize: 12,
    fontFamily: "Poppins 500",
    textAlign: "center",
    color: "#263238s",
  },
  backToLoginButton: {
    marginTop: 24,
    width: "50%",
    height: 44,
    backgroundColor: "#1973BE",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  backToLoginText: {
    fontSize: 16,
    fontFamily: "Poppins 600",
    color: "#ffffff",
  },
  bottomText: {
    fontSize: 13,
    fontFamily: "Poppins 500",
    color: "#263238",
    textAlign: "center",
    marginBottom : 50
  }
});

export default PasswordEmailSent;
