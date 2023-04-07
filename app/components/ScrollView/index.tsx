import React from "react";
import { ScrollView, View } from "react-native";
import { styled } from "nativewind";
import { Path } from "react-native-svg";

type MyViewProps = {
  children: React.ReactNode;
  className: string;
};

const MyScrollView = ({ children, className }: MyViewProps) => {
  return <ScrollView className={className}>{children}</ScrollView>;
};

export default MyScrollView;
