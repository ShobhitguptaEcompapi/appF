import { Stack } from "expo-router";


export default function components() {
  return (
    <Stack>
      <Stack.Screen name="test" options={{ headerShown: false }} />
    </Stack>
  );
}
