import React from "react";
import { View } from "react-native";

type MyViewProps = {
  children: React.ReactNode;
  className: string;
};

const MyView = ({ children, className }: MyViewProps) => {
  return <View className={className}>{children}</View>;
};

export default MyView;
