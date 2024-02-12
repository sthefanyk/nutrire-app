import {
    ActivityIndicator,
    Button,
    Image,
    ScrollView,
    Text,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { useDesign } from "../design/useDesign";
import { Theme } from "../enums/Theme";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "../design/Colors";
import SearchBar from "../components/SearchBar";
import JaoNoChatsDark from "../assets/Jao/JaoNoChatsDark";
import JaoNoChats from "../assets/Jao/JaoNoChats";

const NoChatScreen = () => {
    const { logout, loading, userData } = useAuth();
    const { theme, updateTheme } = useTheme();
    const { screenTheme, textColor, font } = useDesign();

    const [search, setSearch] = useState("");

    const changeTheme = () => {
        const t = theme;

        if (t === Theme.Normal) {
            updateTheme(Theme.Light);
            return;
        }

        if (t === Theme.Light) {
            updateTheme(Theme.Dark);
            return;
        }

        updateTheme(Theme.Normal);
    };

    return (
        <TouchableWithoutFeedback onPress={() => changeTheme()}>
            <View
                className={`flex-1 w-full px-4 items-center ${screenTheme()}`}
            >
                {theme === Theme.Dark ? (
                    <StatusBar backgroundColor="transparent" style="light" />
                ) : (
                    <StatusBar backgroundColor="transparent" />
                )}

                <View className="flex-1 items-center justify-center">
                    <Text className={`text-orange font-fresca ${font('4xl')}`}>Ops...</Text>
                    <Text className={`${textColor()} font-montserrat-regular ${font('base')} mb-10`}>
                        Você não tem nenhum chat no momento.
                    </Text>
                    {theme === Theme.Dark ? <JaoNoChatsDark /> : <JaoNoChats />}

                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default NoChatScreen;
