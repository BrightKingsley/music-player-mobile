import React from "react";
import { Text } from "react-native";

type MyTextProps = {
  children: React.ReactNode;
  className: string;
};

const MyText = ({ children, className }: MyTextProps) => {
  return <Text className={className}>{children}</Text>;
};

export default MyText;
