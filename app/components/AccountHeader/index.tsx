import { Pressable, StyleSheet, Text, View } from "react-native";

import { MaterialCommunityIcons, Ionicons, Octicons } from "@expo/vector-icons";
import { colors } from "../../config";
import { useNavigation } from "@react-navigation/native";
import { FC, PropsWithChildren } from "react";

// type accountHeaderProps = {
//   navigation: object;
// };

const AccountHeader = ({ dark }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        marginTop: 70,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 22,
        width: "100%",
      }}
    >
      <Octicons
        name="gear"
        color={dark ? colors.black : colors.white}
        size={26}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: dark ? colors.black : colors.white,
            fontSize: 18,
          }}
        >
          Pricillia Designer
        </Text>
        <Ionicons
          name="ios-chevron-down-circle-outline"
          color={dark ? colors.black : colors.white}
          size={25}
          marginLeft={10}
        />
      </View>
      <Pressable
        onPress={() => navigation.openDrawer()}
        android_ripple={{ color: "#ffffff2f", radius: 20 }}
      >
        <Ionicons
          color={dark ? colors.black : colors.white}
          name="md-menu-outline"
          size={40}
        />
      </Pressable>
    </View>
  );
};

export default AccountHeader;

const styles = StyleSheet.create({});
