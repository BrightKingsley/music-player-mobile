import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Screen } from "../../components";

const Search = () => {
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
          Search
        </Text>
      </View>
    </Screen>
  );
};

export default Search;

const styles = StyleSheet.create({});
