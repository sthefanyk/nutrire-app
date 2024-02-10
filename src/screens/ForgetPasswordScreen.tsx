import { View, Text, Pressable } from "react-native";
import React from "react";
import { useDesign } from "../design/useDesign";
import { useTheme } from "../context/ThemeContext";
import { Theme } from "../enums/Theme";
import IEmail from "../assets/icons/IEmail";
import IPhone from "../assets/icons/IPhone";
import GAP from "../design/gap";

const ForgetPasswordScreen = ({navigation}: any) => {

    const { theme } = useTheme();
    const { font, screenThemeHex, textColor } = useDesign();


    const getInputTheme = () => {
        if (theme === Theme.Normal) return "bg-light";

        if (theme === Theme.Light) return "bg-green_100_50";

        if (theme === Theme.Dark) return "bg-dark_search";
    };

    return (
        <View className="flex-1 w-full px-4 items-center" style={[{backgroundColor: screenThemeHex()}, GAP[20]]}>
            <Text
                className={`
                    w-full text-center my-2
                    font-fresca ${font('4xl')} ${textColor()}
                `}
            >
                Esqueceu sua senha
            </Text>

            <Text
                className={`
                    w-full
                    font-montserrat-regular ${font('lg')} ${textColor()}
                `}
            >
                Selecione qual contato deseja usar para redefinir sua senha
            </Text>

            <View className={`flex-row ${getInputTheme()} p-4 rounded-lg w-full`}>
                <IEmail />
                <View className="ml-4">
                    <Text
                        className={`
                            w-full ${textColor()}
                            font-montserrat-semibold ${font('lg')} 
                        `}
                    >
                        Email
                    </Text>
                    <Text
                        className={`
                            w-full ${textColor()}
                            font-montserrat-medium ${font('lg')} 
                        `}
                    >
                        Enviar para o meu email
                    </Text>
                </View>
            </View>

            <View className={`flex-row ${getInputTheme()} p-4 rounded-lg w-full`}>
                <IPhone />
                <View className="ml-4">
                    <Text
                        className={`
                            w-full ${textColor()}
                            font-montserrat-semibold ${font('lg')} 
                        `}
                    >
                        Telefone
                    </Text>
                    <Text
                        className={`
                            w-full ${textColor()}
                            font-montserrat-medium ${font('lg')} 
                        `}
                    >
                        Enviar para o meu telefone
                    </Text>
                </View>
            </View>

            <Pressable 
                onPress={() => navigation.navigate('VerificationEmail')}
                className="w-full justify-center items-center bg-green_400 p-4 rounded-md">
                <Text
                    className={`
                        ${textColor()} font-montserrat-semibold ${font('lg')}
                    `}
                >
                    Continuar
                </Text>
            </Pressable>
        </View>
    );
};

export default ForgetPasswordScreen;
