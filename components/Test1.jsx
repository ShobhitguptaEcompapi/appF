import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import React, { useState } from "react";
import { router } from "expo-router";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const AuthInput = ({
  label,
  mode,
  underlineColor,
  activeUnderlineColor,
  showIconImage,
  bottomMessage,
  allowForgetPassword,
  inputColor,
  marginTop,
  underlineThickness,
  showErrorHighlight,
  bottomIcon,
  bottomIconBackgroundColor,
  bottomIconColor,
  bottomTextColor,
  showInputField,
  onChangeText,
}) => {
  const [showPassword, setShowPassword] = useState(showInputField ?? false);
  return (
    <View>
      <TextInput
        autoFocus={false}
        label={<Text style={styles.labelText}>{label}</Text>}
        secureTextEntry={!showPassword}
        mode={mode ? mode : "flat"}
        underlineColor={underlineColor}
        underlineStyle={{ height: underlineThickness }}
        activeUnderlineColor={activeUnderlineColor}
        textColor={inputColor}
        right={
          showIconImage ? (
            <TextInput.Icon
              forceTextInputFocus={false}
              icon={() =>
                showPassword ? (
                  <Image
                    style={{ width: 24, height: 24 }}
                    source={require("../assets/images/eye.png")}
                  />
                ) : (
                  <Image
                    style={{ width: 24, height: 24 }}
                    source={require("../assets/images/eye-slash.png")}
                  />
                )
              }
              color="#263238"
              onPress={() => {
                setShowPassword(!showPassword);
              }}
            />
          ) : null
        }
        style={{ marginTop: marginTop ?? 0, ...styles.textInputs }}
        error={showErrorHighlight}
        onChangeText={onChangeText}
      />
      <View style={styles.forgetPasswordSection}>
        {bottomMessage ? (
          <View style={styles.bottomTextSection}>
            {bottomIcon ? (
              <View
                style={{
                  backgroundColor: bottomIconBackgroundColor,
                  ...styles.bottomTextIcon,
                }}
              >
                <FontAwesome6
                  name={bottomIcon}
                  size={10}
                  color={bottomIconColor}
                />
              </View>
            ) : null}

            <Text style={{ color: bottomTextColor, ...styles.bottomText }}>
              {bottomMessage}
            </Text>
          </View>
        ) : (
          <View style={{ flex: 1 }} />
        )}
        {allowForgetPassword && (
          <TouchableOpacity
            onPress={() => {
              router.push("/resetPassword");
            }}
          >
            <Text style={styles.forgetPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  labelText: {
    color: "#999A9A",
    fontFamily: "Poppins 500",
    fontSize: 16,
  },
  textInputs: {
    backgroundColor: "#fff",
    paddingHorizontal: 0,
    fontSize: 14,
    fontFamily: "Poppins 500",
    color: "#263238",
  },
  forgetPasswordSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  forgetPasswordText: {
    color: "#1973BE",
    fontFamily: "Roboto 500",
    fontSize: 12,
    textDecorationLine: "underline",
    padding: 0,
  },
  bottomTextSection: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  bottomTextIcon: {
    borderRadius: 50,
    height: 16,
    width: 16,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 2,
  },
  bottomText: {
    fontFamily: "Poppins 500",
    fontSize: 12,
    padding: 0,
  },
});

export default AuthInput;