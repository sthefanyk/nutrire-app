import React from "react";
import { Text, TextInput, View } from "react-native";
import { useTheme } from "../context/ThemeContext";
import GAP from "../design/gap";
import { useDesign } from "../design/useDesign";
import { Theme } from "../enums/Theme";

interface InputProps {
    value: string;
    onChangeText: (text: string) => void;
    placeholder: string;
    text: string;
    className?: string
}

const InputText = ({ value, onChangeText, placeholder, text, className }: InputProps) => {
    const { theme } = useTheme();
    const { font, textColor, placeholderTextColor, inputTheme } = useDesign();

    return (
        <View className={`w-full items-center ${className}`} style={GAP[4]}>
            <Text
                className={`
                    font-montserrat-semibold w-full
                    ${font("base") + " " + textColor()}
                `}
            >
                {text}
            </Text>

            <TextInput
                className={`
                    w-full h-12 px-5 py-2 rounded-lg font-montserrat-regular
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
                onChangeText={onChangeText}
            />
        </View>
    );
};

export default InputText;

