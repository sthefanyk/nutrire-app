import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider, useAuth } from "./src/context/AuthContext";

import { useFonts } from "expo-font";
import Splash from "./src/screens/Splash";
import React, { useState } from "react";
import { preventAutoHideAsync } from "expo-splash-screen";
import { LogBox, StyleSheet } from "react-native";
import { ThemeProvider, useTheme } from "./src/context/ThemeContext";
import Navigator from "./src/navigators/Navigator";
import { EnterStack } from "./src/stacks/EnterStack";
import { Theme } from "./src/enums/Theme";
import { StatusBar } from "expo-status-bar";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ProductProvider } from "./src/context/ProductContext";
import { UserProvider } from "./src/context/UserContext";

LogBox.ignoreLogs(["new NativeEventEmitter"]);
LogBox.ignoreAllLogs();

preventAutoHideAsync();

function Root() {
    const { userData } = useAuth();
    const { theme } = useTheme();

    return (
        <NavigationContainer>
            {theme === Theme.Dark ? (
                <StatusBar backgroundColor="transparent" style="light" />
            ) : (
                <StatusBar backgroundColor="transparent" />
            )}
            {userData.name ? <Navigator /> : <EnterStack />}
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
        <GestureHandlerRootView style={{ flex: 1 }}>
            <BottomSheetModalProvider>
                <AuthProvider>
                    <ThemeProvider>
                        <ProductProvider>
                            <UserProvider>
                                <Root />
                            </UserProvider>
                        </ProductProvider>
                    </ThemeProvider>
                </AuthProvider>
            </BottomSheetModalProvider>
        </GestureHandlerRootView>
    ) : (
        <Splash onComplete={setSplashComplete} />
    );
}
