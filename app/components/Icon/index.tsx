import { StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  FontAwesome,
  MaterialIcons,
  Ionicons,
  Octicons,
  Feather,
} from "@expo/vector-icons";

type iconProps = {
  name: any;
  border: boolean;
  backgroundColor: string;
  color: string;
  type: string;
  size: number;
};

const Icon: FC<iconProps> = ({
  name,
  border,
  backgroundColor,
  color,
  type,
  size,
}) => {
  return (
    <View
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      {type === "materialCom" && <MaterialCommunityIcons name={name} />}

      {type === "material" && <MaterialIcons name={name} />}

      {type === "fa" && <FontAwesome name={name} />}

      {type === "fa5" && <FontAwesome5 name={name} />}

      {type === "io" && <Ionicons name={name} />}

      {type === "oct" && <Octicons name={name} />}

      {type === "feather" && <Feather name={name} />}
    </View>
  );
};

export default Icon;

const styles = StyleSheet.create({});
