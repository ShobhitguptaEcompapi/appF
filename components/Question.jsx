import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default Question = ({ question, optionalText }) => {
  const optionalTextMargin = optionalText ? styles.mb : {};
  const mainTextMargin = !optionalText ? styles.mb : {};
  return (
    <View>
      <Text style={[styles.text, mainTextMargin]}>{question}</Text>
      {optionalText && (
        <Text style={[styles.text, optionalTextMargin]}>{optionalText}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "500",
  },
  mb: {
    marginBottom: 24,
  },
});
