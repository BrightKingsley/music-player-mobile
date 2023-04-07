//Play audio
// if (this.state.soundObj === null || this.state.currentAudio?.id !== audio.id) {
//   await this.state.playbackObj?.setStatusAsync({
//     shouldPlay: false,
//   });
//   const playbackObj = new Audio.Sound();
//   const status = await playbackObj.loadAsync(
//     { uri: audio.uri },
//     { shouldPlay: true }
//   );
//   return this.setState({
//     ...this.state,
//     currentAudio: audio,
//     playbackObj: playbackObj,
//     soundObj: status,
//   });
// }

export const play = async (playbackObj, uri) => {
  try {
    return await playbackObj.loadAsync({ uri }, { shouldPlay: true });
  } catch (error) {
    console.log("error in Play helper method PLAY", error);
  }
};

//Pause audio

export const pause = async (playbackObj) => {
  try {
    return await playbackObj.setStatusAsync({
      shouldPlay: false,
    });
  } catch (error) {
    console.log("error in Pause helper method PAUSE", error);
  }
};

//Resume audio

export const resume = async (playbackObj) => {
  try {
    return await playbackObj.playAsync();
  } catch (error) {
    console.log("error in Pause helper method PAUSE", error);
  }
};
//Next audio
export const playNext = async (playbackObj, uri) => {
  try {
    await playbackObj.stopAsync();
    await playbackObj.unloadAsync();
    return await play(playbackObj, uri);
  } catch (error) {
    console.log("error in Next helper method NEXT", error);
  }
};
