import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "../../config";
import { Feed, Home, Message, Profile, Search } from "../../screens";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
  FontAwesome5,
  Feather,
  AntDesign,
  Octicons,
} from "@expo/vector-icons";
import { FC } from "react";
import Account from "../Drawer";
import HomeStack from "../Stack";

type tabData = {
  name: string;
  component: FC;
  icon: any;
  iconActive: any;
};

const tabs: Array<tabData> = [
  {
    name: "home",
    component: Home,
    icon: "home-minus-outline",
    iconActive: "home-minus",
  },
  {
    name: "search",
    component: Search,
    icon: "home-minus-outline",
    iconActive: "home-minus",
  },
  {
    name: "feed",
    component: Feed,
    icon: "home-minus-outline",
    iconActive: "home-minus",
  },
  {
    name: "message",
    component: Message,
    icon: "home-minus-outline",
    iconActive: "home-minus",
  },
  {
    name: "account",
    component: Account,
    icon: "account-outline",
    iconActive: "account",
  },
];

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.darkGray,
        tabBarInactiveTintColor: colors.darkGray,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.white,
          height: 60,
          borderTopWidth: 0,
        },
      }}
      backBehavior="history"
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, focused, size }) => {
            return (
              <MaterialCommunityIcons
                color={color}
                name={focused ? "home" : "home-outline"}
                size={30}
              />
            );
          },
        }}
        name="home"
        component={HomeStack}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ color, focused, size }) => {
            return (
              <Ionicons
                color={color}
                name={focused ? "search" : "search-outline"}
                size={30}
              />
            );
          },
        }}
        name="search"
        component={Search}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ color, focused, size }) => {
            return (
              <View
                style={{
                  width: 70,
                  height: 70,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: colors.purple,
                  borderRadius: 35,
                  padding: 8,
                  borderWidth: 6,
                  borderColor: colors.white,
                  position: "absolute",
                  marginBottom: 29,
                  top: -15,
                }}
              >
                <MaterialCommunityIcons
                  color={colors.white}
                  name={focused ? "camera" : "camera-outline"}
                  size={30}
                />
              </View>
            );
          },
        }}
        name="feed"
        component={Feed}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, focused, size }) => {
            return (
              <Ionicons
                color={color}
                name={focused ? "chatbox-ellipses" : "chatbox-ellipses-outline"}
                size={30}
              />
            );
          },
        }}
        name="chat"
        component={Message}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ color, focused }) => {
            return (
              <MaterialCommunityIcons
                color={color}
                name={focused ? "account" : "account-outline"}
                size={30}
              />
            );
          },
        }}
        name="account"
        component={Account}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
