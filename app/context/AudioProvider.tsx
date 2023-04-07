import {
  getAssetsAsync,
  getPermissionsAsync,
  requestPermissionsAsync,
} from "expo-media-library";
import React, { Component, createContext } from "react";
import { Alert } from "react-native";
import { DataProvider } from "recyclerlistview";
import { Text, View } from "../components";

type AudioProviderProps = {
  children: React.ReactNode;
};

type AudioFile = {
  id?: string;
  filename?: string;
  duration?: string;
  uri: string;
};

interface AudioCtx {
  audioFiles: {}[];
  dataProvider: {};
  permissionError: boolean;
  playbackObj?: {
    [key: string]: any;
  } | null;
  soundObj?: {
    [key: string]: {};
  } | null;
  currentAudio?: AudioFile | null;
  setCurrentAudio?: Function;
  updateState?: Function;
  isPlaying: boolean;
}

interface State extends AudioCtx {
  audioFiles: {}[];
  dataProvider: DataProvider;
}

const AudioContext = createContext<AudioCtx>({
  audioFiles: [],
  dataProvider: DataProvider,
  permissionError: false,
  playbackObj: {},
  soundObj: {},
  currentAudio: null,
  setCurrentAudio: () => {},
  updateState: () => {},
  isPlaying: false,
});

export class AudioProvider extends Component<AudioProviderProps, State> {
  constructor(props: AudioProviderProps) {
    super(props);
    this.state = {
      audioFiles: [],
      permissionError: false,
      dataProvider: new DataProvider((r1, r2) => r1 !== r2),
      playbackObj: null,
      soundObj: null,
      currentAudio: null,
      isPlaying: false,
    };
  }

  permissionAlert = () => {
    Alert.alert("Permission Required", "This app need to read audio files", [
      {
        text: "I am ready",
        onPress: () => this.getPermission(),
      },
      {
        text: "cancel",
        onPress: () => this.permissionAlert(),
      },
    ]);
  };

  getAudioFiles = async () => {
    const { dataProvider, audioFiles } = this.state;
    let media = await getAssetsAsync({
      mediaType: "audio",
    });
    media = await getAssetsAsync({
      mediaType: "audio",
      first: media.totalCount,
    });

    this.setState({
      ...this.state,
      dataProvider: dataProvider.cloneWithRows([
        ...audioFiles,
        ...media.assets,
      ]),
      audioFiles: [...audioFiles, ...media.assets],
    });
  };

  getPermission = async () => {
    const permission = await getPermissionsAsync();
    if (permission.granted) {
      this.getAudioFiles();
    }

    if (!permission.canAskAgain && !permission.granted) {
      this.setState({ ...this.state, permissionError: true });
    }

    if (!permission.granted && permission.canAskAgain) {
      const { status, canAskAgain } = await requestPermissionsAsync();
      if (status === "denied" && canAskAgain) {
      }

      if (status === "granted") {
        this.getAudioFiles();
      }

      if (status === "denied" && !canAskAgain) {
        this.setState({ ...this.state, permissionError: true });
      }
    }
  };

  updateState = (prevState: State, newState = {}) => {
    this.setState({ ...prevState, ...newState });
  };

  setCurrentAudio(audio: AudioFile) {
    return this.setState({
      ...this.state,
      currentAudio: audio,
    });
  }

  componentDidMount(): void {
    this.getPermission();
  }

  render() {
    const {
      audioFiles,
      dataProvider,
      permissionError,
      currentAudio,
      playbackObj,
      soundObj,
      isPlaying,
    } = this.state;
    if (permissionError)
      return (
        <View className="flex-1 justify-center items-center">
          <Text className="text-xl text-center text-red-500">
            It looks like you haven't accepted permissions
          </Text>
        </View>
      );
    return (
      <AudioContext.Provider
        value={{
          audioFiles,
          dataProvider,
          permissionError,
          currentAudio,
          playbackObj,
          soundObj,
          isPlaying,
          updateState: this.updateState,
          setCurrentAudio: this.setCurrentAudio,
        }}
      >
        {this.props.children}
      </AudioContext.Provider>
    );
  }
}

export default AudioContext;
