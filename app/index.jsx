import {
  Text,
  View,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Redirect, useRouter } from "expo-router";
import React, { useState, useEffect } from "react";
import LoginPage from "./login"
import Login from "./login";

export default function Index() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
 
  // Wait for the component to mount
  useEffect(() => {
    setIsMounted(true);
  }, []);
 
  // Navigate to the tabs only after mounting is complete
  useEffect(() => {
    if (isMounted) {
      router.push("/search");
    }
  }, [isMounted]);
 
  return null;
}

// export default function Index() {
//   return (
//     <LoginPage />
//   );
//   // const router = useRouter();
//   // const [isMounted, setIsMounted] = useState(false);

//   // // Wait for the component to mount
//   // useEffect(() => {
//   //   setIsMounted(true);
//   // }, []);

//   // // Navigate to the tabs only after mounting is complete
//   // useEffect(() => {
//   //   if (isMounted) {
//   //     router.push("/Reports");
//   //   }
//   // }, [isMounted]);

//   // return null;
// }

