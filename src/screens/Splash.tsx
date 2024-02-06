import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { AVPlaybackStatus, ResizeMode, Video } from "expo-av";
import { hideAsync } from "expo-splash-screen";

type Props = {
  onComplete: (status: boolean) => void;
}

const Splash = ({ onComplete } : Props) => {

  const  [lastStatus, setStatus] = useState<AVPlaybackStatus>({} as AVPlaybackStatus);

  const onPlaybackStatusUpdate = (status: AVPlaybackStatus) => {

    if (status.isLoaded) {
      if(lastStatus.isLoaded !== status.isLoaded){
        hideAsync();
      }

      if (status.didJustFinish) {
        onComplete(true);
      }
    }

    setStatus(() => status);
  };
  return (
    <Video
      style={StyleSheet.absoluteFill}
      resizeMode={ResizeMode.COVER}
      source={require("../../assets/intro.mp4")}
      isLooping={false}
      onPlaybackStatusUpdate={onPlaybackStatusUpdate}
      shouldPlay={true}
    />
  );
};

export default Splash;
