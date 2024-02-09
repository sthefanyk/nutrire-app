import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { useTheme } from "../context/ThemeContext";
import GAP from "../design/gap";
import { useDesign } from "../design/useDesign";
import { Theme } from "../enums/Theme";
import IViewPasswordOff from "../assets/icons/IViewPasswordOff";
import IViewPasswordOn from "../assets/icons/IViewPasswordOn";
import { COLORS } from "../design/Colors";
import ISearch from "../assets/icons/ISearch";

interface InputProps {
    value: string;
    onChangeText: (text: string) => void;
    placeholder: string;
    text: string;
}

const SearchBar = ({
    value,
    onChangeText,
    placeholder
}: InputProps) => {
    const { theme } = useTheme();
    const { font, textColor, placeholderTextColor } = useDesign();

    const getInputTheme = () => {
        if (theme === Theme.Normal) return "bg-light";

        if (theme === Theme.Light) return "bg-green_100_50";

        if (theme === Theme.Dark) return "bg-dark_search";
    };

    const getIconColor = () => {
        if (theme === Theme.Normal) return COLORS.brown_300_50;

        if (theme === Theme.Light) return COLORS.brown_300_50;

        if (theme === Theme.Dark) return COLORS.brown_100;
    };

    return (
        <View className="w-full items-center" style={GAP[4]}>
            <View
                className={`
              flex-row justify-center items-center w-full h-14 pl-5 py-4 rounded-full
              ${getInputTheme()}
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
                    getInputTheme()
                }
                
            `}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor()}
                    value={value}
                    autoCapitalize="none"
                    onChangeText={onChangeText}
                />
                <Pressable
                    onPress={() => {}}
                >
                    <ISearch color={getIconColor()}/>
                </Pressable>
            </View>
        </View>
    );
};

export default SearchBar;
