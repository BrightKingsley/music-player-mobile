import React, { ComponentProps } from "react";
import { View } from "react-native";

type MyViewProps = ComponentProps<typeof View> & {
  children?: React.ReactNode;
  className?: string;
};

const MyView = ({ children, className, ...props }: MyViewProps) => {
  return (
    <View className={className} {...props}>
      {children}
    </View>
  );
};

export default MyView;
