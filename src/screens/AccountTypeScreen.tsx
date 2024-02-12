import {
    ActivityIndicator,
    Pressable,
    Text,
    View,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
import React, { useState } from "react";
import { COLORS } from "../design/Colors";
import { LoginType } from "../types/LoginType";
import { useAuth } from "../context/AuthContext";
import JaoWaving from "../assets/svgs/mascot/small/JaoWaving";

import { KeyboardAvoidingView, Platform } from "react-native";
import GAP from "../design/gap";
import IGoogle from "../assets/icons/IGoogle";
import HorizontalGroup from "../assets/groups/HorizontalGroup";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "../context/ThemeContext";
import { Theme } from "../enums/Theme";
import InputText from "../components/InputText";
import InputPassword from "../components/InputPasswod";
import { useDesign } from "../design/useDesign";
import JaoLogin from "../assets/Jao/JaoLogin";
import JaoLoginDark from "../assets/Jao/JaoLoginDark";

const AccountTypeScreen = ({ navigation }: any) => {
    const [form, setForm] = useState<LoginType>({} as LoginType);

    const { login, loading } = useAuth();
    const { theme, updateTheme } = useTheme();
    const { screenTheme, font, screenThemeHex } = useDesign();

    const getTextTheme = () => {
        if (theme === Theme.Normal) {
            return "text-brown_200";
        }

        if (theme === Theme.Light) {
            return "text-brown_300";
        }

        if (theme === Theme.Dark) {
            return "text-brown_100";
        }
    };

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
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                enabled={false}
                // keyboardVerticalOffset={0}
                className={`
            flex-1 w-full px-4 items-center
            ${screenTheme()}
          `}
                style={[GAP[16], {backgroundColor: screenThemeHex()}]}
            >
                {theme === Theme.Dark ? (
                    <StatusBar backgroundColor="transparent" style="light" />
                ) : (
                    <StatusBar backgroundColor="transparent" />
                )}

                <View className="w-full py-4" style={GAP[4]}>
                    <Text
                        className={`
                font-fresca w-full place-items-start
                ${font("3xl") + " " + getTextTheme()}
              `}
                    >
                        Bem-vindo ao Nutrire!
                    </Text>
                    <Text
                        className={`
                font-montserrat-medium w-full place-items-start mb-8
                ${font("sm") + " " + getTextTheme()}
              `}
                    >
                        Para começar, nos diga, você é cliente ou vendedor?
                    </Text>
                </View>

                {loading ? (
                    <ActivityIndicator size="large" color={COLORS.green_400} />
                ) : (
                    <Pressable
                        onPress={() => navigation.navigate("Register")}
                        className={`bg-green_400 py-4 w-full items-center rounded-xl`}
                    >
                        <Text
                            className={`
                            font-montserrat-semibold text-brown_100 
                            ${font("base")}
                        `}
                        >
                            Cliente
                        </Text>
                    </Pressable>
                )}

                {loading ? (
                    <ActivityIndicator size="large" color={COLORS.green_400} />
                ) : (
                    <Pressable
                        onPress={() => navigation.navigate("Register")}
                        className={`bg-green_400 py-4 w-full items-center rounded-xl`}
                    >
                        <Text
                            className={`
                            font-montserrat-semibold text-brown_100 
                            ${font("base")}
                        `}
                        >
                            Vendedor
                        </Text>
                    </Pressable>
                )}

                {Platform.OS === "ios" ? null : (
                    <View className="flex-1"></View>
                )}

                {Platform.OS === "ios" ? (
                    <KeyboardAvoidingView
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                        enabled={false}
                        className="flex-1 justify-end"
                    >
                        {theme === Theme.Dark ? (
                            <HorizontalGroup
                                bg={COLORS.green_500}
                                veg={COLORS.green_400}
                            />
                        ) : (
                            <HorizontalGroup />
                        )}
                    </KeyboardAvoidingView>
                ) : theme === Theme.Dark ? (
                    <HorizontalGroup
                        bg={COLORS.green_500}
                        veg={COLORS.green_400}
                    />
                ) : (
                    <HorizontalGroup />
                )}
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
};

export default AccountTypeScreen;
