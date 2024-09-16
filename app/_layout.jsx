import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import { store } from "../services/store/store";
import Toast from "react-native-toast-message";
import messaging from '@react-native-firebase/messaging';
import { Alert, Linking } from "react-native";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from 'expo-notifications';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    "Poppins 100": require("../assets/fonts/Poppins-Thin.ttf"),
    "Poppins 200": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins 300": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins 400": require("../assets/fonts/Poppins-Regular.ttf"),
    "PoppinsItalic 400": require("../assets/fonts/Poppins-Italic.ttf"),
    "Poppins 500": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins 600": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins 700": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins 800": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins 900": require("../assets/fonts/Poppins-Black.ttf"),
    "Roboto 500": require("../assets/fonts/Roboto-Medium.ttf"),
    "Ribeye 400": require("../assets/fonts/Ribeye-Regular.ttf"),

  });

  const getandSetDeviceToken = async () => {
    const token = await messaging().getToken();
    const setToken = AsyncStorage.setItem("device-token", token);
    console.log("Check",token)
  }

  const handleQuitStateNotification = async () => {
    const getNotification = await AsyncStorage.getItem("stored-notification");
    if (getNotification) {
      Alert.alert("Finally Quit State Notification Received", getNotification);
    }
    const emptyNotification = await AsyncStorage.setItem("stored-notification", "");
  }

  useEffect(() => {
    getandSetDeviceToken()
    // Request user permission for notifications related to firebase
    handleQuitStateNotification();

    //For Foreground message receiving
    const subscribe = messaging().onMessage(async (remoteMessage) => {
      Alert.alert("Foreground Notification Handler", JSON.stringify(remoteMessage));
    });

    //For Background message receiving
    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
    });

    //For message receiving on app from background state
    const subscribefromBackground = messaging().onNotificationOpenedApp(async (remoteMessage) => {
      Alert.alert("Notification Message Received from Background State", JSON.stringify(remoteMessage));
    })

    // Clean up the foreground notification listener
    return () => {
      subscribe();
      subscribefromBackground();
    };
  }, []);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
      console.log("Layout fully loaded");
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PaperProvider>
        <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="login"
            options={{ headerShown: false, animation: "ios" }}
          />
          <Stack.Screen
            name="resetPassword"
            options={{ headerShown: false, animation: "ios" }}
          />
          <Stack.Screen
            name="createPassword"
            options={{ headerShown: false, animation: "ios" }}
          />
          <Stack.Screen
            name="registerParent"
            options={{ headerShown: false, animation: "ios" }}
          />
          <Stack.Screen
            name="registerSuccess"
            options={{ headerShown: false, animation: "ios" }}
          />
          <Stack.Screen
            name="passwordEmailSent"
            options={{ headerShown: false, animation: "ios" }}
          />
          <Stack.Screen
            name="reportSubmitted"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="videoListing"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="lockedLessonList"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="viewAllLessons"
            options={{ headerShown: false }}
          />
          <Stack.Screen

            name="ReportQuestion"
            options={{ headerShown: false }}
          />
          <Stack.Screen
          name="search"
          options={{ headerShown: false }}
          />
          <Stack.Screen
          name="Test1"
          options={{ headerShown: false }}
          />
        </Stack>
        <Toast />
      </PaperProvider>
      <StatusBar style="dark" />
    </Provider>
  );
}
