import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { BottomTab } from "./app/navigation";
import { NativeWindStyleSheet } from "nativewind";
import { AudioProvider } from "./app/context/AudioProvider";
import * as React from "react";
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { Screen } from "./app/components";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    darkGrey: "#2d2e37",
    lightGrey: "#c4c4c4",
    accentBlue: "#3c3abe",
    accentPurple: "#b14aed",
    white: "#fcfcff",
  },
};

export default function App() {
  NativeWindStyleSheet.setOutput({
    default: "native",
  });

  return (
    <PaperProvider theme={theme}>
      <AudioProvider>
        <NavigationContainer>
          <BottomTab />
        </NavigationContainer>
      </AudioProvider>
    </PaperProvider>
  );
}
