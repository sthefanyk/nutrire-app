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
}

const InputText = ({ value, onChangeText, placeholder, text }: InputProps) => {
    const { theme } = useTheme();
    const { font, textColor, placeholderTextColor } = useDesign();

    const getInputTheme = () => {
        if (theme === Theme.Normal) return "bg-light";

        if (theme === Theme.Light) return "bg-green_100_50";

        if (theme === Theme.Dark) return "bg-dark_search";
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

            <TextInput
                className={`
                    w-full h-12 px-5 py-2 rounded-lg font-montserrat-regular
                    ${
                        " " +
                        font("base") +
                        " " +
                        textColor() +
                        " " +
                        getInputTheme()
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

