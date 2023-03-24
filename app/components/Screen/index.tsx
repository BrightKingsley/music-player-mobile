import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import React, { PropsWithChildren, FC, ReactNode } from "react";
import { colors } from "../../config";

let customStyles: {} = {};
type screenProps = {
  children: ReactNode;
  translucent?: boolean | null;
};

const Screen: FC<screenProps> = ({ children, translucent }) => {
  return (
    <SafeAreaView style={styles.screen}>
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
