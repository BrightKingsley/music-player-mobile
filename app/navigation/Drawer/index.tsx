import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Blog, Home, Profile } from "../../screens";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../config/colors";

const DrawerNav = createDrawerNavigator();

// export const CustomDrawer: FC = (props) => {
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props} />
//     </DrawerContentScrollView>
//   );
// };

const Account = () => {
  return (
    <DrawerNav.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: colors.purple,
        drawerInactiveBackgroundColor: colors.lightGray,
        drawerInactiveTintColor: colors.darkGray,
        drawerActiveTintColor: colors.white,

        drawerLabelStyle: {},
        drawerStyle: {
          borderTopRightRadius: 10,
          width: "75%",
        },
      }}
    >
      <DrawerNav.Screen
        options={{
          drawerIcon: ({ color, focused }) => (
            <Ionicons
              color={color}
              name={focused ? "person" : "person-outline"}
              size={30}
            />
          ),
        }}
        name="profile"
        component={Profile}
      />
      <DrawerNav.Screen
        name="blog"
        component={Blog}
        options={{
          drawerIcon: ({ color, focused }) => (
            <Ionicons
              color={color}
              name={focused ? "md-book" : "md-book-outline"}
              size={30}
            />
          ),
        }}
      />
    </DrawerNav.Navigator>
  );
};

export default Account;

const styles = StyleSheet.create({});
