import AsyncStorage from "@react-native-async-storage/async-storage";

const storeAccessToken = async (token) => {
  try {
    await AsyncStorage.setItem("access-token", token);
    console.log("Token stored successfully!");
  } catch (error) {
    console.error("Error storing access token:", error);
  }
};

module.exports = { storeAccessToken };
