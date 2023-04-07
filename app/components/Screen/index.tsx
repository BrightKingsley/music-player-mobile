import { SafeAreaView, StyleSheet, StatusBar, Platform } from "react-native";
import React, { PropsWithChildren, FC, ReactNode } from "react";
import { colors } from "../../config";

let customStyles: {} = {};
type screenProps = {
  children: ReactNode;
  translucent?: boolean | null;
  style?: {};
};

const Screen = ({ children, translucent, style }: screenProps) => {
  return (
    <SafeAreaView
      style={{
        ...style,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
      className="bg-pink flex-1
      "
    >
      <StatusBar
        translucent={translucent ? translucent : true}
        backgroundColor="transparent"
        barStyle="dark-content"
        showHideTransition="slide"
      />
      {children}
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
