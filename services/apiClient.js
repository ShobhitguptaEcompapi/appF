import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { BASE_URL } from "@env";

// Create an axios instance
const apiClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // Ensure cookies are sent with requests
});

// Automatically add the token to the Cookie header
apiClient.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem("access-token");
  console.log("Interceptor intercepted request", token);
  if (token) {
    config.headers.Cookie = `access-token=${token}`;
  }
  return config;
});

export default apiClient;
