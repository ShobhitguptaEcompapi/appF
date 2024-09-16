import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default CustomButton = ({
  height,
  borderRadius,
  backgroundColor,
  color,
  text,
  setStep,
  action,
}) => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.incidentData.loading);
  const styles = StyleSheet.create({
    button: {
      height: height,
      backgroundColor: backgroundColor,
      borderRadius: borderRadius,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      fontWeight: "600",
      fontSize: 16,
      lineHeight: 30,
      color: color,
    },
  });

  return (
    <View>
      <TouchableOpacity onPress={action} style={styles.button}>
        {isLoading ? (
          <ActivityIndicator size="small" color="#FFFFFF" />
        ) : (
          <Text style={styles.text}>{text}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};
