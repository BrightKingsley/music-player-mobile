import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Post, Profile } from "../../screens";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="posts" component={Home} />
      <Stack.Screen name="post" component={Post} />
    </Stack.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({});
