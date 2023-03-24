import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { BottomTab } from "./app/navigation";
import { Home } from "./app/screens";
import { NativeWindStyleSheet } from "nativewind";

export default function App() {
  NativeWindStyleSheet.setOutput({
    default: "native",
  });

  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
}
