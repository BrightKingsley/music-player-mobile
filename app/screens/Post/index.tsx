import {
  FlatList,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { AccountHeader, Comment, Post, Screen } from "../../components";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../config/colors";

const post = {
  name: "Meg",
  profileImg: require("../../assets/avatar1.png"),
  location: "Togo",
  postImg: require("../../assets/post2.jpg"),
  id: "2",
};

type comment = {
  id: string;
  img: ImageSourcePropType;
  name: string;
  date: string;
  text: string;
};

const comments: Array<comment> = [
  {
    id: "1",
    img: require("../../assets/avatar6.jpg"),
    name: "Miles Ester",
    date: "2 hours",
    text: "Texures, lighting, filters, colors, choices, even the black $ white scenes- they are all perfect",
  },
  {
    id: "2",
    img: require("../../assets/avatar5.jpg"),
    name: "Christen Bale",
    date: "2 hours",
    text: "Texures, lighting, filters, colors, choices, even the black $ white scenes- they are all perfect",
  },
  {
    id: "3",
    img: require("../../assets/avatar4.png"),
    name: "Cooper Christen",
    date: "2 hours",
    text: "Texures, lighting, filters, colors, choices, even the black $ white scenes- they are all perfect",
  },
  {
    id: "4",
    img: require("../../assets/avatar.png"),
    name: "Tom Holand",
    date: "2 hours",
    text: "Texures, lighting, filters, colors, choices, even the black $ white scenes- they are all perfect",
  },
];

const PostScreen = () => {
  return (
    <Screen translucent={true}>
      <View style={styles.container}>
        <View
          style={{
            marginHorizontal: 25,
            paddingVertical: 10,
            borderBottomColor: colors.lightGray,
            borderBottomWidth: 1,
          }}
        >
          <AccountHeader dark={true} />
        </View>
        <View
          style={{
            paddingHorizontal: 25,
            paddingTop: 30,
          }}
        >
          <Post post={post} />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 100,
            backgroundColor: colors.background,
            paddingVertical: 15,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons name="ios-chevron-up-outline" size={20} />
            <Text
              style={{
                marginLeft: 10,
              }}
            >
              Previous
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons name="ios-chevron-up-circle-outline" size={20} />
            <Text
              style={{
                marginLeft: 10,
              }}
            >
              Oldest
            </Text>
          </View>
        </View>
        <FlatList
          style={{
            backgroundColor: colors.background,
            paddingHorizontal: 25,
          }}
          data={comments}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => <Comment props={item} />}
        />
      </View>
    </Screen>
  );
};

export default PostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
