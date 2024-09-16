import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Image,
} from "react-native";

import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import Calendar from "../assets/images/calendar.svg";

export default function DatePicker({date, setDate}) {

  const showDatePicker = () => {
    DateTimePickerAndroid.open({
      value: date,
      onChange: (event, selectedDate) => {
        if (selectedDate) {
          console.log(selectedDate);  
          setDate(selectedDate);
        }
      },
      mode: "date",
      display: "calender",
      maximumDate: new Date(),
    });
  };

  return (
    <View style={styles.container}>
      <Calendar width={"24px"} height={"24px"} stroke={"#263238"} />
      <TouchableOpacity style={styles.input} onPress={showDatePicker}>
        <Text style={styles.inputText}>
          {date.toLocaleDateString([], {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1.3,
    justifyContent: "center",
    alignItems: "center",
    height: 48,
    borderWidth: 1,
    borderColor: "#DDE2DD",
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingHorizontal: 13,
    paddingVertical: 14,
    gap: 8,
  },
  input: {
    padding: 10,
    height: 48,
    borderLeftWidth: 1,
    borderLeftColor: "#DDE2DD",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  inputText: {
    fontSize: 14,
  },
});
