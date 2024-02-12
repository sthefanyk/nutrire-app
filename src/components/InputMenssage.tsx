import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { useTheme } from "../context/ThemeContext";
import { useDesign } from "../design/useDesign";
import { Theme } from "../enums/Theme";
import ISend from "../assets/icons/ISend";
import { COLORS } from "../design/Colors";

interface InputProps {
    value: string;
    onChangeText: (text: string) => void;
    placeholder: string;
    handleSubmit: () => void
}

const InputMenssage = ({ value, onChangeText, placeholder, handleSubmit }: InputProps) => {
    const { theme } = useTheme();
    const { font, textColor, placeholderTextColor, textColorHex, inputTheme } = useDesign();

    return (
        <View className={`flex-row w-full items-center ${inputTheme()} rounded-lg`}>
            <TextInput
                className={`
                    flex-1 h-14 px-5 py-4 font-montserrat-regular
                    ${
                        " " +
                        font("base") +
                        " " +
                        textColor()
                    }
                `}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor()}
                value={value}
                autoCapitalize="none"
                onChangeText={onChangeText}
                onSubmitEditing={handleSubmit}
            />
            <Pressable
                onPress={handleSubmit}
            >
                <ISend color={value !== "" ? COLORS.green_400 : textColorHex()}/>
            </Pressable>
        </View>
    );
};

export default InputMenssage;

