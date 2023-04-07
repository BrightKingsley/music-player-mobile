import { ImageBackground, StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "../../config";
import { AudioList, Playlist } from "../../screens";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { FC } from "react";
import Player from "../../screens/Player/index";
import { Disc, Headset, Library } from "../../assets/icons/TabIcons";
import { useTheme } from "react-native-paper";
import { BlurView } from "expo-blur";

type tabData = {
  name: string;

  icon: any;
  iconActive: any;
};

const tabs: Array<tabData> = [
  {
    name: "home",
    // component: AudioList,
    icon: "home-minus-outline",
    iconActive: "home-minus",
  },
  {
    name: "search",
    // component: Player,
    icon: "home-minus-outline",
    iconActive: "home-minus",
  },
  {
    name: "feed",
    // component: Playlist,
    icon: "home-minus-outline",
    iconActive: "home-minus",
  },
];

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const theme = useTheme();

  return (
    <>
      <BlurView style={styles.blur} intensity={100} tint="light" />
      {/* <View style={styles.tabNavigatorContainer}> */}
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "rgba(225,225,225,0.3)",
            position: "absolute",
            height: 60,
            bottom: 10,
            left: 20,
            right: 20,
            borderTopWidth: 0,
            borderRadius: 15,
          },
        }}
        backBehavior="history"
        // screenOptions={{
        //   activeTintColor: "white",
        //   inactiveTintColor: "grey",
        //   style: {
        //     backgroundColor: "transparent",
        //     borderTopWidth: 0,
        //   },
        //   labelStyle: {
        //     fontSize: 14,
        //   },
        // }}
      >
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, focused, size }) => (
              <Headset fill={focused ? "fill-white" : "fill-light-grey"} />
            ),
          }}
          name="AudioList"
          component={AudioList}
        />

        <Tab.Screen
          options={{
            tabBarIcon: ({ color, focused, size }) => (
              <Disc fill={focused ? "fill-white" : "fill-light-grey"} />
            ),
          }}
          name="Player"
          component={Player}
        />

        <Tab.Screen
          options={{
            tabBarIcon: ({ color, focused, size }) => (
              <Library fill={focused ? "fill-white" : "fill-light-grey"} />
            ),
          }}
          name="PlayList"
          component={Playlist}
        />
      </Tab.Navigator>
      {/* </View> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 300,
    backgroundColor: "red",
    paddingVertical: 50,
  },
  blur: {
    ...StyleSheet.absoluteFillObject,
  },
  tabNavigatorContainer: {
    backgroundColor: "green",
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    // height: 100,
  },
});

export default BottomTab;
