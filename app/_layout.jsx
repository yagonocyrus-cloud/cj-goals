import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { GoalsProvider } from "../contexts/GoalsContext"

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <Stack>
        <Stack.Screen name="goals" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </>
  )
}