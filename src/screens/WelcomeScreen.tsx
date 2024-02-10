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
import { useAuth } from "../context/auth";
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
import Form from "../assets/groups/Form";
import JaoWelcome from "../assets/Jao/JaoWelcome";
import JaoWelcomeDark from "../assets/Jao/JaoWelcomeDark";

const WelcomeScreen = ({ navigation }: any) => {
    const [form, setForm] = useState<LoginType>({} as LoginType);

    const { login, loading } = useAuth();
    const { theme } = useTheme();
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


    return (
        <View
            className={`
                flex-1 w-full px-8 items-center
                ${screenTheme()}
            `}
            style={{backgroundColor: screenThemeHex()}}
        >
            <View className="w-full py-4" style={GAP[16]}>
                <Text
                    className={`
                        font-fresca w-full place-items-start text-center
                        ${font("4xl") + " " + getTextTheme()}
                    `}
                >
                    Bem-vindo ao Nutrire!
                </Text>
                <Text
                    className={`
                        font-montserrat-regular w-full place-items-start mb-8
                        ${font("lg") + " " + getTextTheme()} text-center
                    `}
                >
                    Alimentos orgânicos e sustentáveis próximos a você.
                </Text>
            </View>

            <View className="flex-1 bg-green_100">
                {
                    theme === Theme.Dark ? (
                        <JaoWelcomeDark className="absolute bottom-0 -left-10"/>
                    ) : (
                        <JaoWelcome className="absolute bottom-0 -left-10"/>
                    )
                }
            </View>

            <View className="w-full pb-10" style={GAP[16]}>
                {loading ? (
                    <ActivityIndicator size="large" color={COLORS.green_400} />
                    ) : (
                        <Pressable
                        onPress={() => navigation.navigate("Login")}
                        className={`bg-green_400 py-4 w-full items-center rounded-lg`}
                        >
                        <Text
                            className={`
                            font-montserrat-semibold text-brown_100 
                            ${font("lg")}
                            `}
                            >
                            Entrar
                        </Text>
                    </Pressable>
                )}

                {loading ? (
                    <ActivityIndicator size="large" color={COLORS.green_400} />
                    ) : (
                        <Pressable
                        onPress={() => navigation.navigate("Register")}
                        className={`bg-green_300 py-4 w-full items-center rounded-lg`}
                        >
                        <Text
                            className={`
                                font-montserrat-semibold text-brown_200 
                                    ${font("lg")}
                                `}
                                >
                            Cadastre-se
                        </Text>
                    </Pressable>
                )}
            </View>

            {
                theme === Theme.Dark ? (
                    <Form className="absolute bottom-0 right-0 -z-10"/>
                ) : (
                    <Form color={COLORS.green_100} className="absolute bottom-0 right-0 -z-10"/>
                )
            }

        </View>
    );
};

export default WelcomeScreen;
