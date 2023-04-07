import { Pressable } from "react-native";
import React, { ComponentProps } from "react";

type MyPressableProps = ComponentProps<typeof Pressable> & {
  children?: React.ReactNode;
  className?: string;
};

const MyPressable = ({ children, className, ...props }: MyPressableProps) => {
  return (
    <Pressable
      android_ripple={{
        color: "#00000050",
      }}
      className={className}
      {...props}
    >
      {children}
    </Pressable>
  );
};

export default MyPressable;
