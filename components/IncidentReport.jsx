import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import Step from "@/components/Step";
import CustomButton from "@/components/CustomButton";
import BackArrow from "@/assets/images/backarrow.svg";
import { reportIncident } from "@/services/slices/incidentSlice";
import { useSelector, useDispatch } from "react-redux";

export default IncidentReport = () => {
  const [step, setStep] = useState(0);
  const reportData = useSelector((state) => state.incidentData);
  const dispatch = useDispatch();
  const handleStepChange = () => {
    setStep(1);
  };

  const handleSubmit = () => {
    dispatch(reportIncident(reportData));
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity
          onPress={() => {
            setStep(0);
          }}
          style={styles.backArrow}
        >
          <BackArrow />
        </TouchableOpacity>
        <Text style={styles.stepText}>{`Step ${step + 1} / 2`}</Text>
        <Step step={step} />
        <Text style={styles.text}>
          Fields marked with <Text style={styles.asterisk}>*</Text> are
          compulsory
        </Text>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <CustomButton
          height={48}
          borderRadius={8}
          color={"#FFFFFF"}
          text={step === 0 ? "Next" : "Submit"}
          backgroundColor={"#1973BE"}
          setStep={setStep}
          action={step === 0 ? handleStepChange : handleSubmit}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    paddingHorizontal: 24,
    paddingBottom: 12,
  },
  text: {
    paddingLeft: 16,
    paddingTop: 16,
    fontWeight: "500",
    color: "#7B7C7E",
    fontStyle: "italic",
    fontSize: 12,
    lineHeight: 16,
  },
  buttonContainer: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 10,
  },
  asterisk: {
    color: "#E22B2B",
    fontWeight: "bold",
  },
  stepText: {
    color: "#263238",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "400",
    fontStyle: "italic",
    marginBottom: 10,
  },
  backArrow: {
    marginBottom: 6,
  },
});
