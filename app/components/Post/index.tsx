import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";
import React, { FC } from "react";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons,
  Feather,
} from "@expo/vector-icons";
import colors from "../../config/colors";

type postProps = {
  post: {
    id: string | number;
    name: string;
    location: string;
    profileImg: ImageSourcePropType;
    postImg: ImageSourcePropType;
  };
};

const Post: FC<postProps> = ({ post }) => {
  return (
    <View style={{}}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              width: 45,
              height: 45,
              borderRadius: 45 / 2,
            }}
            source={post.profileImg}
          />
          <View
            style={{
              marginLeft: 10,
            }}
          >
            <Text style={{ fontWeight: "bold" }}>Nguyen Shane</Text>
            <Text>Poland</Text>
          </View>
        </View>
        <MaterialCommunityIcons
          name="dots-horizontal-circle-outline"
          size={30}
          color={colors.darkGray}
          marginRight={10}
        />
      </View>
      <View
        style={{
          borderRadius: 20,
          height: 280,
          marginTop: 5,
          overflow: "hidden",
          width: "100%",
        }}
      >
        <Image
          style={{ width: "100%", height: "100%" }}
          source={post.postImg}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: 20,
          }}
        >
          <View style={styles.postAction}>
            <Ionicons name="ios-heart" size={28} color={colors.heart} />
            <Text style={styles.postReactionText}>7.8k</Text>
          </View>
          <View style={styles.postAction}>
            <Ionicons name="chatbubble-outline" size={25} />
            <Text style={styles.postReactionText}>7.8k</Text>
          </View>
          <View style={styles.postAction}>
            <MaterialCommunityIcons name="share-variant-outline" size={25} />
            <Text style={styles.postReactionText}>7.8k</Text>
          </View>
        </View>
        <MaterialCommunityIcons
          name="bookmark-plus-outline"
          size={30}
          marginRight={20}
        />
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  postAction: {
    marginRight: 25,
    flexDirection: "row",
    alignItems: "center",
  },
  postReactionText: {
    marginLeft: 8,
  },
});
