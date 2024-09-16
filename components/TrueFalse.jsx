import { RadioButton } from "react-native-paper";
import { View, StyleSheet, Text } from "react-native";
import { useState } from "react";
import { setAnyOneInjured, setAnyPropertyDamaged, setReportedToPolice } from "@/services/slices/incidentSlice";
import { useDispatch, useSelector } from "react-redux";

export default TrueFalse = ({cardName}) => {

  const dispatch = useDispatch();
  let currentState;
  let action;
  switch (cardName) {
    case "INJURED":
      action = setAnyOneInjured;
      currentState = useSelector((state)=>state.incidentData.anyOneInjured);
      break;
    case "PROPERTYDAMAGED":
      action = setAnyPropertyDamaged;
      currentState = useSelector((state)=>state.incidentData.anyPropertyDamaged);
      break;
    case "REPORTEDTOPOLICE":
      action = setReportedToPolice;
      currentState = useSelector((state)=>state.incidentData.reportedToPolice);
      break;
    default:
      break;
  }

  const checked = currentState ? "Yes" : "No";
  const handleChecked = (value, action)=>{
    dispatch(action(value==="Yes"? true:false));
  }

  return (
    <View style={styles.container}>
      <View style={styles.radioContainer}>
        <RadioButton
          value="Yes"
          status={checked === "Yes" ? "checked" : "unchecked"}
          onPress={() => handleChecked("Yes", action)}
          color="#004178"
        />
        <Text>{"Yes"}</Text>
      </View>
      <View style={styles.radioContainer}>
        <RadioButton
          value="No"
          status={checked === "No" ? "checked" : "unchecked"}
          onPress={() => handleChecked("No", action)}
          color="#004178"
        />
        <Text>{"No"}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  radioContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 8,
  },
});
