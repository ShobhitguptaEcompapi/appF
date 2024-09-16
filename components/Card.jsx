import React, { Children } from "react";
import { View, Text, StyleSheet } from "react-native";

const Card = ({ height, children }) => {
  const styles = StyleSheet.create({
    card: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      borderRadius: 8,
      borderWidth: 1,
      borderColor: "#ddd",
      paddingVertical: 24,
      paddingHorizontal: 16,
      marginTop: 8,
      backgroundColor: "#FFFFFF",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
  });
  return <View style={styles.card}>{children}</View>;
};

export default Card;
