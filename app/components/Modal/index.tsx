import { StyleSheet, Modal } from "react-native";
import React from "react";
import View from "../View";
import Text from "../Text";
import { Motion } from "@legendapp/motion";
import { BlurView } from "expo-blur";
import Pressable from "../Pressable";

type ModalProps = {
  visible: boolean;
  onClose: Function;
  currentItem: any;
  onPlayPress: Function;
  onAddtoPlaylist: Function;
};

const MyModal = ({
  visible,
  onClose,
  currentItem,
  onPlayPress,
  onAddtoPlaylist,
}: ModalProps) => {
  const filename = currentItem?.filename;

  return (
    <Modal
      animationType="slide"
      transparent
      statusBarTranslucent
      visible={visible}
    >
      <View className="absolute bottom-0 left-0 right-0 z-50 bg-light-grey rounded-t-2xl ">
        <Text className="text-md pb-0 font-bold text-dark-grey p-5">
          {filename}
        </Text>
        <View className="p-5">
          <Pressable onPress={() => onPlayPress()}>
            <Text numberOfLines={2} className="text-dark-grey font-bold">
              Play
            </Text>
          </Pressable>
          <Pressable onPress={() => onAddtoPlaylist()}>
            <Text className="text-dark-grey font-bold">Add to playlist</Text>
          </Pressable>
        </View>
      </View>
      {visible && (
        <Pressable
          className="absolute inset-0 bg-gray-700/40"
          android_ripple={{
            color: "gray",
          }}
          onPress={() => onClose()}
        />
      )}
    </Modal>
  );
};

export default MyModal;
