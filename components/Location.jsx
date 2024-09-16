import { TouchableOpacity, Text, StyleSheet, View, Image } from "react-native";
import Addschool from "../assets/images/School.svg";
import Beforeschool from "../assets/images/Beforeschool.svg";
import AddSchoolSelected from "../assets/images/addschoolselected.svg";
import BeforeSchoolSelected from "../assets/images/beforeschoolselected.svg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLocation } from "@/services/slices/incidentSlice";

const getObjectFromName = (objectName, isSelected) => {
  switch (objectName) {
    case "At School":
      if (!isSelected) return <Addschool width={"24px"} height={"24px"} />;
      else return <AddSchoolSelected width={"24px"} height={"24px"} />;
    case "Before/After School":
      if (!isSelected) return <Beforeschool width={"24px"} height={"24px"} />;
      else return <BeforeSchoolSelected width={"24px"} height={"24px"} />;
    default:
      break;
  }
};

export default Location = () => {
  const currentEntity = useSelector((state)=>state.incidentData.location);
  return (
    <View style={styles.container}>
      <SingleLocation
        entityName={"At School"}
        currentEntity={currentEntity}
      />
      <SingleLocation
        entityName={"Before/After School"}
        currentEntity={currentEntity}
      />
    </View>
  );
};

const SingleLocation = ({
  entityName,
  currentEntity,
}) => {
  const dispatch = useDispatch();
  const isSelected = currentEntity === entityName ? true : false;
  let itemStyle;
  let textStyle;
  if(isSelected){
    itemStyle = [styles.item, styles.itemSelected];
    textStyle = styles.selectedText;
  }else{
    itemStyle = styles.item;
    textStyle = styles.text;
  }
  return (
    <TouchableOpacity
      style={itemStyle}
      onPress={() => {
        dispatch(setLocation(entityName));
      }}
    >
      {getObjectFromName(entityName, isSelected)}
      <Text style={textStyle}>{entityName}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    marginBottom: 19,
  },
  item: {
    flexGrow: 1,
    flex: 1,
    height: 88,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#DDE2DD",
    display: "flex",
    flexDirection: "column",
    gap: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  itemSelected: {
    backgroundColor: "#004178",
  },
  selectedText: {
    color: "#FFFFFF",
  },
  text: {
    color: "#263238",
  },
});
