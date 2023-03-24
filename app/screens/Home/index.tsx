import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { FC } from "react";
import { Post, Screen } from "../../components";
import { colors } from "../../config";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";

type trend = {
  name: string;
  image: ImageSourcePropType;
  id: string;
};

type post = {
  name: string;
  location: string;
  profileImg: ImageSourcePropType;
  postImg: ImageSourcePropType;
  id: string;
};

const data: Array<trend> = [
  { name: "Jane", image: require("../../assets/avatar.png"), id: "1" },
  { name: "Meg", image: require("../../assets/avatar1.png"), id: "2" },
  { name: "John", image: require("../../assets/avatar2.png"), id: "3" },
  { name: "Lizzy", image: require("../../assets/avatar3.png"), id: "4" },
  { name: "Max", image: require("../../assets/avatar4.png"), id: "5" },
  { name: "Sam", image: require("../../assets/avatar5.jpg"), id: "6" },
];

const posts: Array<post> = [
  {
    name: "Jane",
    profileImg: require("../../assets/avatar.png"),
    location: "Nigeria",
    postImg: require("../../assets/post1.jpg"),
    id: "1",
  },
  {
    name: "Meg",
    profileImg: require("../../assets/avatar1.png"),
    location: "Togo",
    postImg: require("../../assets/post2.jpg"),
    id: "2",
  },
  {
    name: "John",
    profileImg: require("../../assets/avatar2.png"),
    location: "Hawaii",
    postImg: require("../../assets/post3.jpg"),
    id: "3",
  },
  {
    name: "Lizzy",
    profileImg: require("../../assets/avatar3.png"),
    location: "Cyprus",
    postImg: require("../../assets/post5.jpg"),
    id: "4",
  },
  {
    name: "Max",
    profileImg: require("../../assets/avatar4.png"),
    location: "Dubai",
    postImg: require("../../assets/post4.jpg"),
    id: "5",
  },
  {
    name: "Sam",
    profileImg: require("../../assets/avatar5.jpg"),
    location: "South Korea",
    postImg: require("../../assets/post6.jpg"),
    id: "6",
  },
];

const getHeader = () => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerLeft}>
          C<Text style={styles.o1}>o</Text>llecti
          <Text style={styles.o2}>o</Text>n
        </Text>
        <View style={styles.headerRight}>
          <MaterialCommunityIcons
            name="circle"
            color={colors.red}
            position="absolute"
            top={-5}
          />
          <FontAwesome5
            name="paper-plane"
            size={30}
            color={colors.darkGray}
            transform={[{ rotate: "10deg" }]}
          />
        </View>
      </View>
      <View style={styles.trending}>
        <Text style={{ fontWeight: "800", fontSize: 20 }}>Trending</Text>
        <FlatList
          style={{
            marginTop: 20,
          }}
          data={data}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => {
            console.log(item.image);
            return (
              <View
                style={{
                  alignItems: "center",
                  marginRight: 15,
                }}
              >
                <View
                  style={{
                    borderColor: colors.pink,
                    borderRadius: 45,
                    borderWidth: 3,
                    padding: 3,
                    width: 50,
                    height: 50,
                    overflow: "hidden",
                  }}
                >
                  <Image
                    style={{
                      borderRadius: (80 - 4) / 2,
                      width: "100%",
                      height: "100%",
                    }}
                    source={item.image}
                  />
                </View>
                <Text
                  style={{
                    marginTop: 5,
                    fontWeight: "500",
                    fontSize: 18,
                  }}
                >
                  {item.name}
                </Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

type T = {
  navigation: object;
};

const Home: FC<T> = ({ navigation }) => {
  console.log(navigation);
  return (
    <Screen translucent={false}>
      <View style={styles.container}>
        <FlatList
          style={{ paddingTop: 20, paddingHorizontal: 20 }}
          data={posts}
          showsVerticalScrollIndicator={false}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => {
            return (
              <Pressable
                style={{ marginBottom: 35 }}
                onPress={() => navigation.navigate("post")}
              >
                <Post post={item} />
              </Pressable>
            );
          }}
          ListHeaderComponent={getHeader}
        />
      </View>
    </Screen>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 24,
    paddingTop: 30,
  },
  header: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
  },
  headerLeft: {
    color: colors.darkGray,
    fontSize: 42,
    fontWeight: "900",
  },
  headerRight: {
    position: "relative",
  },
  o1: {
    color: colors.purple,
  },
  o2: {
    color: colors.yellow,
  },
  trending: {
    marginTop: 20,
    paddingBottom: 20,
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 1,
  },
  trendingText: {},
});
