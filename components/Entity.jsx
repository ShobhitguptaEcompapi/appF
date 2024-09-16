import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import Victim from "../assets/images/Victim.svg";
import Bystander from "../assets/images/Bystander.svg";
import Teacher from "../assets/images/Teacher.svg";
import Parent from "../assets/images/Parent.svg";
import VictimSelected from "../assets/images/victimselected.svg";
import Bystanderselected from "../assets/images/bystanderselected.svg";
import Teacherselected from "../assets/images/teacherselected.svg";
import ParentSelected from "../assets/images/parentselected.svg";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setEntity } from "@/services/slices/incidentSlice";

const getObjectFromName = (objectName, isSelected) => {
  switch (objectName) {
    case "Victim":
      return !isSelected ? (
        <Victim width={"24px"} height={"24px"} />
      ) : (
        <VictimSelected width={"24px"} height={"24px"} />
      );
    case "Teacher":
      return !isSelected ? (
        <Teacher width={"24px"} height={"24px"} />
      ) : (
        <Teacherselected width={"24px"} height={"24px"} />
      );
    case "Parent":
      return !isSelected ? (
        <Parent width={"24px"} height={"24px"} />
      ) : (
        <ParentSelected width={"24px"} height={"24px"} />
      );
    case "Bystander":
      return !isSelected ? (
        <Bystander width={"24px"} height={"24px"} />
      ) : (
        <Bystanderselected width={"24px"} height={"24px"} />
      );
    default:
      break;
  }
};

export default Entity = () => {
  const [step, setStep] = useState(0);
  const entityName = useSelector((state)=>state.incidentData.entity);
  return (
    <View>
      <View style={styles.container}>
        <SingleEntity
          entityName={"Victim"}
          itemStyle={[styles.item]}
          currentEntity={entityName}
        />
        <SingleEntity
          entityName={"Bystander"}
          itemStyle={styles.item}
          currentEntity={entityName}
        />
      </View>
      <View style={styles.container}>
        <SingleEntity
          entityName={"Parent"}
          itemStyle={styles.item}
          currentEntity={entityName}
        />
        <SingleEntity
          entityName={"Teacher"}
          itemStyle={styles.item}
          currentEntity={entityName}
        />
      </View>
      <View style={styles.container}>
        <SingleEntity
          entityName={"Other"}
          itemStyle={styles.item}
          currentEntity={entityName}
        />
      </View>
    </View>
  );
};

const SingleEntity = ({
  entityName,
  itemStyle,
  currentEntity,
}) => {
  const dispatch = useDispatch();
  itemStyle =
    currentEntity === entityName ? [itemStyle, styles.itemSelected] : itemStyle;
  let imgSelected = false;
  let textStyle;
  if (currentEntity === entityName) {
    itemStyle = [itemStyle, styles.itemSelected];
    textStyle = styles.selectedText;
    imgSelected = true;
  } else {
    textStyle = styles.text;
  }
  return (
    <TouchableOpacity
      style={itemStyle}
      onPress={() => {
        dispatch(setEntity(entityName));
      }}
    >
      {entityName !== "Other" && getObjectFromName(entityName, imgSelected)}
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
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#DDE2DD",
    display: "flex",
    flexDirection: "row",
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
