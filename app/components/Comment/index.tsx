import { FC } from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { colors } from "../../config";

type commentProps = {
  props: {
    img: ImageSourcePropType;
    name: string;
    date: string;
    text: string;
  };
};

const Comment: FC<commentProps> = ({ props }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        paddingVertical: 15,
        borderBottomColor: colors.lightGray,
        borderBottomWidth: 0.5,
      }}
    >
      <Image
        source={props.img}
        style={{
          width: 45,
          height: 45,
          borderRadius: 45 / 2,
        }}
      />
      <View
        style={{
          marginLeft: 15,
          columnGap: 10,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            // marginTop: 5,
          }}
        >
          {props.name}
        </Text>
        <Text
          style={{
            color: colors.gray,
            fontSize: 14,
            marginTop: 5,
          }}
        >
          {props.date}
        </Text>
        <Text
          style={{
            marginTop: 5,
            maxWidth: 350,
          }}
        >
          {props.text}
        </Text>
      </View>
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({});
