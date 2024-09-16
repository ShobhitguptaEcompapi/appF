import React from "react";
import { Tabs } from "expo-router";
import Colors from "@/constants/Colors";
import HomeSVG from "../../assets/images/home.svg";
import CallSVG from "../../assets/images/call.svg";
import ReportSVG from "../../assets/images/report.svg";
import Profile from "../../assets/images/profile-circleProfile.svg"

export default function AppTabs() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary, // Active tab color
        tabBarInactiveTintColor: "#FFFFFF", // Inactive tab color
        tabBarIconStyle: { size: 24 }, // Adjust icon size if needed
        headerStyle: {
          backgroundColor: "#FFFFFF", // Set your header background color
        },
        headerTintColor: "#263238", // Set your header text color
        headerTitleStyle: {
          fontWeight: "600", // Set header title text style
          fontSize: 24,
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <HomeSVG width={size} height={size} fill={color} />
          ),
          headerTitle: 'Home',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Reports"
        options={{
          tabBarLabel: "Report",
          tabBarIcon: ({ color, size }) => (
            <ReportSVG width={size} height={size} fill={color} />
          ),
          headerShown: false
        }}
      />
      <Tabs.Screen
        name="Helpline"
        options={{
          tabBarLabel: "Helpline",
          tabBarIcon: ({ color, size }) => (
            <CallSVG width={size} height={size} fill={color} />
          ),
          headerTitle: "Helplines",
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Profile width={size} height={size} fill={color} />
          ),

        }}
      />
    </Tabs>
  );
}
