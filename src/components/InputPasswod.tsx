import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { useTheme } from "../context/ThemeContext";
import GAP from "../design/gap";
import { useDesign } from "../design/useDesign";
import { Theme } from "../enums/Theme";
import IViewPasswordOff from "../assets/icons/IViewPasswordOff";
import IViewPasswordOn from "../assets/icons/IViewPasswordOn";
import { COLORS } from "../design/Colors";

interface InputProps {
    value: string;
    onChangeText: (text: string) => void;
    placeholder: string;
    text: string;
}

const InputPassword = ({
    value,
    onChangeText,
    placeholder,
    text,
}: InputProps) => {
    const { theme } = useTheme();
    const { font, textColor, placeholderTextColor, inputTheme } = useDesign();
    const [viewPassword, setViewPassword] = useState(true);

    const getIconColor = () => {
        if (theme === Theme.Normal) return COLORS.brown_300_50;

        if (theme === Theme.Light) return COLORS.brown_300_50;

        if (theme === Theme.Dark) return COLORS.brown_100;
    };

    return (
        <View className="w-full items-center" style={GAP[4]}>
            <Text
                className={`
                    font-montserrat-semibold w-full
                    ${font("base") + " " + textColor()}
                `}
            >
                {text}
            </Text>

            <View
                className={`
              flex-row justify-center items-center w-full h-12 pl-5 py-2 rounded-lg
              ${inputTheme()}
            `}
                style={GAP[8]}
            >
                <TextInput
                    className={`
                flex-1 font-montserrat-semibold placeholder:font-montserrat-regular
                ${
                    " " +
                    font("base") +
                    " " +
                    textColor() +
                    " " +
                    inputTheme()
                }
                
            `}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor()}
                    value={value}
                    autoCapitalize="none"
                    secureTextEntry={viewPassword}
                    onChangeText={onChangeText}
                />
                {viewPassword ? (
                    <Pressable
                        onPress={() => setViewPassword((state) => !state)}
                    >
                        <IViewPasswordOff color={getIconColor()}/>
                    </Pressable>
                ) : (
                    <Pressable
                        onPress={() => setViewPassword((state) => !state)}
                    >
                        <IViewPasswordOn color={getIconColor()}/>
                    </Pressable>
                )}
            </View>
        </View>
    );
};

export default InputPassword;
