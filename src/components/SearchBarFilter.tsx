import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { useTheme } from "../context/ThemeContext";
import GAP from "../design/gap";
import { useDesign } from "../design/useDesign";
import { Theme } from "../enums/Theme";
import { COLORS } from "../design/Colors";
import ISearch from "../assets/icons/ISearch";
import IFilter from "../assets/icons/IFilter";

interface InputProps {
    value: string;
    onChangeText: (text: string) => void;
    placeholder: string;
    text: string;
}

const SearchBarFilter = ({ value, onChangeText, placeholder }: InputProps) => {
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
        <View
            className={`
              flex-row justify-center items-center w-full h-14 py-4 rounded-full
              ${getInputTheme()}
            `}
            style={GAP[8]}
        >
            <ISearch color={getIconColor()} />
            <TextInput
                className={`
                flex-1 font-montserrat-semibold placeholder:font-montserrat-regular
                ${
                    " " +
                    font("sm") +
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
            <Pressable onPress={() => {}}>
                <IFilter color={getIconColor()} />
            </Pressable>
        </View>
    );
};

export default SearchBarFilter;
