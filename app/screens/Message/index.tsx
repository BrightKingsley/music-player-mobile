import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Screen } from "../../components";

const Message = () => {
  return (
    <Screen>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          Message
        </Text>
      </View>
    </Screen>
  );
};

export default Message;

const styles = StyleSheet.create({});
