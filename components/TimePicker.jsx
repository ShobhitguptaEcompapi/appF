import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import Clock from "../assets/images/clock.svg";

export default function TimePicker({time, setTime}) {

  const showTimePicker = () => {
    DateTimePickerAndroid.open({
      value: time,
      onChange: (event, selectedTime) => {
        if (selectedTime) {
          const now = new Date();
          const currentTime = new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate(),
            now.getHours(),
            now.getMinutes()
          );

          const selectedDateTime = new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate(),
            selectedTime.getHours(),
            selectedTime.getMinutes()
          );

          if (selectedDateTime <= currentTime) {
            setTime(selectedTime);
          } else {
            alert(
              "Invalid Time Selected time cannot be greater than the current time."
            );
          }
        }
      },
      mode: "time",
      is24Hour: false,
      display: "spinner",
    });
  };

  const handleConfirm = () => {
    console.log(time);
  };

  return (
    <View style={styles.container}>
      <Clock width={"24px"} height={"24px"} stroke={"#263238"} />
      <TouchableOpacity style={styles.input} onPress={showTimePicker}>
        <Text style={styles.inputText}>
          {time.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          })}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    height: 48,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderLeftWidth: 1,
    borderLeftColor: "#DDE2DD",
    padding: 10,
  },
  inputText: {
    fontSize: 14,
  },
  pickerContainer: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  androidPickerButton: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  androidPickerButtonText: {
    color: "white",
    fontSize: 18,
  },
});
