import { NavigationContainer } from "@react-navigation/native";
import { Loged } from "./src/stacks/loged";
import { Unloged } from "./src/stacks/unloged";
import { AuthProvider, useAuth } from "./src/context/auth";

import { useFonts } from "expo-font";
import Splash from "./src/screens/Splash";
import { useState } from "react";
import { preventAutoHideAsync } from "expo-splash-screen";

import { LogBox } from "react-native";

LogBox.ignoreLogs(["new NativeEventEmitter"]);
LogBox.ignoreAllLogs();

preventAutoHideAsync();

function Root() {
  const { userData } = useAuth();

  return (
    <NavigationContainer>
      {userData.name ? <Loged /> : <Unloged />}
    </NavigationContainer>
  );
}

export default function App() {
  const [splashComplete, setSplashComplete] = useState(false);

  const [fontsLoaded] = useFonts({
    "Fresca-Regular": require("./assets/fonts/Fresca-Regular.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Light": require("./assets/fonts/Montserrat-Light.ttf"),
  });

  if (!fontsLoaded) {
    return undefined;
  }

  return splashComplete ? (
    <AuthProvider>
        <Root />
    </AuthProvider>
  ) : (
    <Splash onComplete={setSplashComplete} />
  );
}