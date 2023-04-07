import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Screen } from "../../components";

const Playlist = () => {
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
          Playlist
        </Text>
      </View>
    </Screen>
  );
};

export default Playlist;

const styles = StyleSheet.create({});
