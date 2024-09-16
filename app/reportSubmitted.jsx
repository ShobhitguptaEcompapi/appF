import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default reportSubmitted = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Report Successfuly submitted</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    padding: 16,
  },
});
