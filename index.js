import 'expo-router/entry';

import messaging from '@react-native-firebase/messaging';
import { router } from 'expo-router';
import AsyncStorage from "@react-native-async-storage/async-storage";

async function onMessage(message) {
    console.log('message received', message);
    const setNotification = AsyncStorage.setItem("stored-notification", JSON.stringify(message));
}

messaging().setBackgroundMessageHandler(onMessage);


