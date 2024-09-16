import { View, StyleSheet, Text } from "react-native";
import { useState } from "react";
import CheckBox from "expo-checkbox";
import { setContactMethod, setBehavior, setIncidentType } from "@/services/slices/incidentSlice";
import { useDispatch, useSelector } from "react-redux";

export default CheckBoxContainer = ({ options, cardName }) => {
  return (
    <View style={styles.mainContainer}>
      {options.map((element, index) => {
        return (
          <SingleCheckbox
            container={styles.container}
            label={styles.label}
            text={element}
            key={index}
            cardName={cardName}
          />
        );
      })}
    </View>
  );
};

const getActionFromCardName = (cardName)=>{
    switch (cardName) {
        case "CONTACTMETHOD":
            return setContactMethod;
            break;
        case "BEHAVIOR":
            return setBehavior;
            break;
        case "BULLYTYPE":
            return setIncidentType;
            break;    
        default:
            break;
    }
}

const SingleCheckbox = ({ container, label, text, cardName }) => {
  dispatch = useDispatch();  
  const [isChecked , setIsChecked] = useState(false);
  const contactState = useSelector((state)=>state.incidentData.contactMethod);
  const behaviorState = useSelector((state)=>state.incidentData.behavior);
  const incidentTypeState = useSelector((state)=>state.incidentData.incidentType);
  let currentState;
  switch (cardName) {
    case "CONTACTMETHOD":
        currentState = contactState;
        break;
    case "BEHAVIOR":
        currentState = behaviorState;
        break;
    case "BULLYTYPE":
        currentState = incidentTypeState;
        break;    
    default:
        break;
  }
  const handleCheckboxChange = (isChecked, text, cardName)=>{
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    const action = getActionFromCardName(cardName);
    let updatedState;
    if(!newCheckedState){
        updatedState = currentState.filter((element)=>element!==text);
    }else{
        updatedState = [text, ...currentState];
    }
    console.log(updatedState);
    dispatch(action(updatedState));
  }
  return (
    <View style={container}>
      <CheckBox
        value={currentState.includes(text)}
        onValueChange={() => handleCheckboxChange(currentState.includes(text), text, cardName)}
        color={currentState.includes(text) ? "#004178" : undefined}
      />
      <Text style={label}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 16,
  },
  label: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 20,
  },
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 24,
  },
});
