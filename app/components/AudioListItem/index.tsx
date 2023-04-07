import View from "../View";
import Text from "../Text";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import Pressable from "../Pressable";
import { IconButton, MD3Colors, useTheme } from "react-native-paper";
import { useEffect } from "react";

type ItemProps = {
  title: string | undefined;
  duration: string | undefined;
  onOptionPress: Function;
  onAudioPress: Function;
  isPlaying: boolean;
};

const convertTime = (minutes: string) => {
  if (minutes) {
    const hrs = +minutes / 60;
    const minute = hrs.toString().split(".")[0];
    const percent = parseInt(hrs.toString().split(".")[1].slice(0, 2));
    const sec = Math.ceil((60 * percent) / 100);

    if (parseInt(minute) < 10 && sec < 10) {
      return `0${minute}:0${sec}`;
    }
    if (parseInt(minute) < 10) {
      return `0${minute}:${sec}`;
    }
    if (sec < 10) {
      return `${minute}:0${sec}`;
    }
    return `${minute}:${sec}`;
  }
};

const getThumbnailText = (filename: string) => filename[0];

const renderPlayPauseIcon = (isPlaying: boolean) => {
  if (isPlaying) return <MaterialCommunityIcons name="pause" size={24} />;
  return <MaterialCommunityIcons name="play" size={24} />;
};

const AudioListItem = ({
  title,
  duration,
  onOptionPress,
  onAudioPress,
  isPlaying,
}: ItemProps) => {
  const theme = useTheme();

  const { width } = Dimensions.get("window");
  return (
    <>
      <View
        style={{ width: width - 20 }}
        className="h-20 mx-auto py-2 rounded-3xl overflow-hidden items-center flex-row justify-between space-x-1"
      >
        <Pressable
          onPress={() => onAudioPress()}
          android_ripple={{
            color: "#ffffff30",
          }}
          className="flex-row items-center px-1 h-full justify-start w-full"
        >
          <View className="overflow-hidden flex-1 rounded-l-3xl  || flex-row items-center px-1 h-full justify-start w-full">
            <View className="items-center justify-center h-14 w-14 rounded-2xl bg-light-grey">
              <Text className="text-3xl font-bold text-dark-grey">
                {/* {title && getThumbnailText(title)} */}
                {renderPlayPauseIcon(isPlaying)}
              </Text>
            </View>
            <View className="ml-2">
              <Text numberOfLines={1} className="text-white font-bold">
                {title}
              </Text>
              <Text className="text-light-grey text-xs ">
                {duration && convertTime(duration)}
              </Text>
            </View>
          </View>

          <View className="h-full justify-center">
            <IconButton
              icon="dots-vertical"
              iconColor={theme.colors.white}
              size={20}
              onPress={() => onOptionPress()}
            />
          </View>
        </Pressable>
      </View>
    </>
  );
};

export default AudioListItem;
