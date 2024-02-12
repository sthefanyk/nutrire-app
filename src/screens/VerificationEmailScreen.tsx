import { View, Text, Pressable } from "react-native";
import React from "react";
import { useDesign } from "../design/useDesign";
import { useTheme } from "../context/ThemeContext";
import { Theme } from "../enums/Theme";
import GAP from "../design/gap";

const VerificationEmailScreen = ({navigation}:any) => {

    const { theme } = useTheme();
    const { font, screenThemeHex, textColor, inputTheme } = useDesign();

    return (
        <View className="flex-1 w-full px-4 items-center" style={[{backgroundColor: screenThemeHex()}, GAP[20]]}>
            <Text
                className={`
                    w-full text-center my-2
                    font-fresca ${font('4xl')} ${textColor()}
                `}
            >
                Verificação de email
            </Text>

            <Text
                className={`
                    w-full text-center
                    font-montserrat-regular ${font('lg')} ${textColor()}
                `}
            >
                Informe o código que foi enviado no email
            </Text>
            <Text
                className={`
                    w-full text-center
                    font-montserrat-medium ${font('lg')} ${textColor()}
                `}
            >
                email@email.com
            </Text>

            <View className="flex-row" style={GAP[16]}>
                <View className={`flex-row ${inputTheme()} p-4 rounded-lg w-14 h-14`}>
                
                </View>
                <View className={`flex-row ${inputTheme()} p-4 rounded-lg w-14 h-14`}>
                
                </View>
                <View className={`flex-row ${inputTheme()} p-4 rounded-lg w-14 h-14`}>
                    
                </View>
                <View className={`flex-row ${inputTheme()} p-4 rounded-lg w-14 h-14`}>
                    
                </View>
            </View>

            <View className="flex-row w-full justify-center">
                <Text
                    className={`
                        ${textColor()} font-montserrat-regular ${font('lg')}
                    `}
                >
                    Não recebi!{` `}
                </Text>
                <Text
                    className={`
                        ${textColor()} font-montserrat-semibold ${font('lg')}
                        ${theme === Theme.Dark ? "text-green_300" : "text-green_400"}
                    `}
                >
                    Reenviar
                </Text>
            </View>

            <Pressable
                onPress={() => navigation.navigate('Login')}
                className="w-full justify-center items-center bg-green_400 p-4 rounded-md">
                <Text
                    className={`
                        ${textColor()} font-montserrat-semibold ${font('lg')}
                    `}
                >
                    Confirmar
                </Text>
            </Pressable>
        </View>
    );
};

export default VerificationEmailScreen;
