import React, { ComponentProps } from "react";
import { Text } from "react-native";

type MyTextProps = ComponentProps<typeof Text> & {
  children: React.ReactNode;
  className?: string;
};

const MyText = ({ children, className, ...props }: MyTextProps) => {
  return (
    <Text className={className} {...props}>
      {children}
    </Text>
  );
};

export default MyText;
