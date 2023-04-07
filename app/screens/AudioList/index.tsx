import { getPermissionsAsync } from "expo-media-library";
import React, { useContext, useEffect, Component, FC, useState } from "react";
import { Dimensions, ScrollView } from "react-native";
import { AudioListItem, Modal, Screen, Text, View } from "../../components";
import AudioContext from "../../context/AudioProvider";
import { RecyclerListView, LayoutProvider } from "recyclerlistview";
import { Audio } from "expo-av";

import { pause, play, playNext, resume } from "../../misc/audioController";

type AudioFile = {
  id?: string;
  filename?: string;
  duration?: string;
  uri: string;
};

type AudioListProps = {
  children: React.ReactNode;
};

type State = {
  optionModalVisible: boolean;
  playbackObj: {
    [key: string]: any;
  } | null;
  soundObj: {
    [key: string]: any;
  } | null;
  currentAudio: AudioFile | null;
};

interface CurrentItem {
  [key: string]: any;
}

// const AudioList = ({}: AudioListProps) => {
//   const {
//     currentAudio,
//     playbackObj,
//     soundObj,
//     handlePlay,
//     handlePause,
//     handleResume,
//     setCurrentAudio,
//     dataProvider,
//   } = useContext(AudioContext);

//   const [optionModalVisible, setOptionModalVisible] = useState(false);

//   useEffect(() => console.log(dataProvider), [dataProvider]);

//   const layoutProvider = new LayoutProvider(
//     () => "audio",
//     (type, dim) => {
//       switch (type) {
//         case "audio":
//           dim.width = Dimensions.get("window").width;
//           dim.height = 70;
//       }
//     }
//   );

//   const handleAudioPress = async (audio: AudioFile) => {
//     //first Play
//     if (soundObj === null || currentAudio?.id !== audio.id) {
//       try {
//         // await playbackObj?.setStatusAsync({
//         //   shouldPlay: false,
//         // });
//         const playbackObj = new Audio.Sound();
//         const status = await play(playbackObj, audio.uri);

//         handlePlay && handlePlay(audio, playbackObj, status);
//       } catch (error) {}
//     }

//     //pause
//     if (soundObj?.isLoaded && soundObj?.isPlaying) {
//       const status = await pause(playbackObj);
//       handlePause && handlePause(status);
//     }

//     //resume audio
//     if (
//       soundObj?.isLoaded &&
//       !soundObj?.isPlaying &&
//       currentAudio?.id === audio.id
//     ) {
//       const status = await resume(playbackObj);
//       handleResume && handleResume(audio, status);
//     }
//   };

//   const rowRenderer = (type: any, item: AudioFile) => {
//     return (
//       <AudioListItem
//         title={item.filename}
//         duration={item.duration}
//         onAudioPress={() => handleAudioPress(item)}
//         onOptionPress={() => {
//           setCurrentAudio && setCurrentAudio(item);
//           setOptionModalVisible(true);
//         }}
//       />
//     );
//   };

//   return (
//     <>
//       {dataProvider && (
//         <Screen>
//           <RecyclerListView
//             dataProvider={dataProvider && dataProvider}
//             layoutProvider={layoutProvider}
//             rowRenderer={rowRenderer}
//           />
//           <Modal
//             visible={optionModalVisible}
//             onClose={() => setOptionModalVisible(false)}
//             currentItem={currentAudio}
//             onPlayPress={() => console.log("Play")}
//             onAddtoPlaylist={() => console.log("playlist")}
//           />
//         </Screen>
//       )}

//     </>
//   );
// };

export class AudioList extends Component<AudioListProps, State, CurrentItem> {
  static contextType = AudioContext;
  currentItem: CurrentItem = {};

  constructor(props: AudioListProps) {
    super(props);
    this.state = {
      optionModalVisible: false,
      playbackObj: null,
      soundObj: null,
      currentAudio: null,
    };
  }

  layoutProvider = new LayoutProvider(
    () => "audio",
    (type, dim) => {
      switch (type) {
        case "audio":
          dim.width = Dimensions.get("window").width;
          dim.height = 70;
      }
    }
  );

  handleAudioPress = async (audio: AudioFile) => {
    //first Play
    const { currentAudio, playbackObj, soundObj, updateState } = this.context;
    console.log("PlayBack", playbackObj);
    console.log("CurrentAudio", currentAudio);

    if (soundObj === null) {
      try {
        const playback = new Audio.Sound();
        const status = await play(playback, audio.uri);

        return updateState(this.context, {
          currentAudio: audio,
          playbackObj: playback,
          soundObj: status,
          isPlaying: true,
        });
      } catch (error) {
        console.log("Error in Play", error);
      }
    }

    //pause
    if (
      soundObj.isLoaded &&
      soundObj.isPlaying &&
      currentAudio?.id === audio.id
    ) {
      try {
        const status = await pause(playbackObj);
        return updateState(this.context, {
          soundObj: status,
          isPlaying: false,
        });
      } catch (error) {
        console.log("Error in PAUSE", error);
      }
    }

    //resume audio
    if (
      soundObj.isLoaded &&
      !soundObj.isPlaying &&
      currentAudio?.id === audio.id
    ) {
      try {
        const status = await resume(playbackObj);
        return updateState(this.context, {
          currentAudio: audio,
          soundObj: status,
          isPlaying: true,
        });
      } catch (error) {
        console.log("Error in RESUME", error);
      }
    }

    //Play another audio
    if (soundObj.isLoaded && currentAudio.id !== audio.id) {
      const status = await playNext(playbackObj, audio.uri);
      updateState(this.context, {
        currentAudio: audio,
        soundObj: status,
      });
    }
  };

  rowRenderer = (type: any, item: AudioFile) => {
    return (
      <AudioListItem
        title={item.filename}
        duration={item.duration}
        isPlaying={this.context.isPlaying}
        onAudioPress={() => this.handleAudioPress(item)}
        onOptionPress={() => {
          this.currentItem = item;
          this.setState({ ...this.state, optionModalVisible: true });
        }}
      />
    );
  };

  render() {
    return (
      <AudioContext.Consumer>
        {({ dataProvider, isPlaying }) => {
          return (
            <Screen>
              <RecyclerListView
                dataProvider={dataProvider}
                layoutProvider={this.layoutProvider}
                rowRenderer={this.rowRenderer}
                // extendedState={}
              />
              <Modal
                visible={this.state.optionModalVisible}
                onClose={() =>
                  this.setState({
                    ...this.state,
                    optionModalVisible: false,
                  })
                }
                currentItem={this.currentItem}
                onPlayPress={() => console.log("Play")}
                onAddtoPlaylist={() => console.log("playlist")}
              />
            </Screen>
          );
        }}
      </AudioContext.Consumer>
    );
  }
}

export default AudioList;

// type AudioFile = {
//   id?: string;
//   filename?: string;
// };

// const AudioList = () => {
//   // const { data } = useContext(AudioContext);

//   const layoutProvider = new LayoutProvider(
//     () => "audio",
//     (type, dim) => {
//       dim.width = Dimensions.get("window").width;
//       dim.height = 70;
//     }
//   );

//   const rowRenderer = (type: any, item: AudioFile) => {
//     return <Text>{item.filename}</Text>;
//   };

//   return (
//     <Screen>
//       <AudioContext.Consumer>
//         {({ dataProvider }) => {
//           return;
//           <RecyclerListView
//             dataProvider={dataProvider}
//             layoutProvider={layoutProvider}
//             rowRenderer={rowRenderer}
//           />;
//         }}
//       </AudioContext.Consumer>
//     </Screen>
//   );
// };

// export default AudioList;
