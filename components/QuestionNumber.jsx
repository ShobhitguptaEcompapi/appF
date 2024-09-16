import React from "react";
import { View, Text, StyleSheet } from "react-native";

const QuestionNumber = ({ number }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`0${number}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 36, // Hug (36px)
    height: 24, // Hug (24px)
    marginRight: 10, // Simulating gap with margin
    marginBottom: 9,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundColor: "#F8E29B", // Assuming a light background for visibility // Set opacity to 0
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    opacity: 1, // Ensure text remains visible despite container opacity
  },
});

export default QuestionNumber;
