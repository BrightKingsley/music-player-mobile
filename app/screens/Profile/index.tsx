import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { FC } from "react";
import { AccountHeader, Screen } from "../../components";
import {
  Ionicons,
  MaterialCommunityIcons,
  Octicons,
  FontAwesome5,
} from "@expo/vector-icons";
import { colors } from "../../config";
import { ScrollView } from "react-native-gesture-handler";
import { Drawer } from "../../navigation";
import { Motion } from "@legendapp/motion";

const Profile = ({ navigation }) => {
  return (
    <Screen translucent={true}>
      {/* <Drawer /> */}
      <ScrollView style={styles.container}>
        <ImageBackground
          source={require("../../assets/post3.jpg")}
          style={styles.imgBackground}
        >
          <AccountHeader navigation={navigation} />
          <View
            style={{
              width: 120,
              height: 120,
              borderRadius: 120 / 2,
              borderWidth: 3,
              borderColor: colors.pink,
              padding: 2,
              position: "absolute",
              bottom: -70,
              zIndex: 2,
              // right: "50%",
            }}
          >
            <Image
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 120 / 2,
              }}
              source={require("../../assets/avatar6.jpg")}
            />
          </View>
        </ImageBackground>
        <Motion.View
          initial={{ y: -50 }}
          animate={{ x: 0, y: 0 }}
          whileHover={{ scale: 1.2 }}
          // whileTap={{ y: 20 }}
          // transition={{ type: "spring" }}
          
          style={{
            borderBottomColor: colors.lightGray,
            borderBottomWidth: 1,
            paddingBottom: 20,
            marginHorizontal: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 50,
              marginTop: 20,
            }}
          >
            <View style={styles.followsWrapper}>
              <Text style={styles.followsNum}>24.3k</Text>
              <Text>followers</Text>
            </View>
            <View style={styles.followsWrapper}>
              <Text style={styles.followsNum}>431</Text>
              <Text>following</Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 30,
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Text
                style={[
                  styles.username,
                  { borderRightColor: colors.gray, borderRightWidth: 1 },
                ]}
              >
                Priscllia
              </Text>
              <Text style={styles.username}>Designer</Text>
            </View>
            <View
              style={{
                marginTop: 10,
                maxWidth: 300,
              }}
            >
              <Text style={{ textAlign: "center" }}>
                I believe that to be distinctive, inspiring, and innovative{" "}
                <Text style={{ color: colors.blue }}>Behance</Text>
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 40,
              paddingTop: 30,
            }}
          >
            <View
              style={[
                styles.actionIconWrapper,
                { backgroundColor: colors.blue },
              ]}
            >
              <Ionicons
                style={[styles.actionIcon, { color: colors.white }]}
                name="md-person-outline"
                size={20}
              />
            </View>
            <View style={styles.actionIconWrapper}>
              <Ionicons
                style={styles.actionIcon}
                name="ios-chatbox-outline"
                size={20}
              />
            </View>
            <View style={styles.actionIconWrapper}>
              <Ionicons
                style={styles.actionIcon}
                name="shield-checkmark-outline"
                size={20}
              />
            </View>
            <View style={styles.actionIconWrapper}>
              <Ionicons
                style={styles.actionIcon}
                name="mail-outline"
                size={20}
              />
            </View>
          </View>
        </Motion.View>
        <View
          style={{
            paddingHorizontal: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginHorizontal: 10,
              marginTop: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "900",
                }}
              >
                Feed
              </Text>
              <Text
                style={{
                  color: colors.lightGray,
                  fontSize: 20,
                  fontWeight: "500",
                  marginLeft: 40,
                }}
              >
                Info
              </Text>
            </View>
            <MaterialCommunityIcons
              name="view-grid-plus-outline"
              size={30}
              color={colors.black}
            />
          </View>
        </View>
        <ScrollView
          style={{
            marginTop: 10,
            paddingHorizontal: 20,
          }}
        >
          <View style={styles.feed}>
            <View style={styles.feedImgWrapper}>
              <Image
                style={styles.feedImg}
                source={require("../../assets/post1.jpg")}
              />
            </View>
            <View style={styles.feedImgWrapper}>
              <Image
                style={styles.feedImg}
                source={require("../../assets/post2.jpg")}
              />
            </View>
            <View style={styles.feedImgWrapper}>
              <Image
                style={styles.feedImg}
                source={require("../../assets/post3.jpg")}
              />
            </View>
            <View style={styles.feedImgWrapper}>
              <Image
                style={styles.feedImg}
                source={require("../../assets/post4.jpg")}
              />
            </View>
            <View style={styles.feedImgWrapper}>
              <Image
                style={styles.feedImg}
                source={require("../../assets/post5.jpg")}
              />
            </View>
            <View style={styles.feedImgWrapper}>
              <Image
                style={styles.feedImg}
                source={require("../../assets/post6.jpg")}
              />
            </View>
            <View style={styles.feedImgWrapper}>
              <Image
                style={styles.feedImg}
                source={require("../../assets/post7.jpg")}
              />
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    </Screen>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  imgBackground: {
    height: 280,
    alignItems: "center",
  },
  actionIconWrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    backgroundColor: colors.lightGray,
    borderRadius: 60 / 2,
    color: colors.white,
    padding: 5,
  },
  actionIcon: {
    color: colors.black,
  },
  followsWrapper: {
    alignItems: "center",
  },
  followsNum: {
    fontWeight: "bold",
  },
  username: {
    fontWeight: "bold",
    paddingHorizontal: 20,
    fontSize: 22,
  },
  feed: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "stretch",
    flexShrink: 0,
    //borderRadius: 20,
    overflow: "hidden",
    rowGap: 6,
    columnGap: 6,
  },
  feedImgWrapper: {
    flexShrink: 0,
    flexGrow: 1,
    //flex: 1,
    borderRadius: 10,
    width: 120,
    height: 120,
    overflow: "hidden",
  },
  feedImg: {
    width: "100%",
    height: "100%",
  },
});
