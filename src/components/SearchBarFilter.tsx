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
    handleFilter: () => void
}

const SearchBarFilter = ({ value, onChangeText, placeholder, handleFilter }: InputProps) => {
    const { theme } = useTheme();
    const { font, textColor, placeholderTextColor, inputTheme } = useDesign();

    const getIconColor = () => {
        if (theme === Theme.Normal) return COLORS.brown_300_50;

        if (theme === Theme.Light) return COLORS.brown_300_50;

        if (theme === Theme.Dark) return COLORS.brown_100;
    };

    return (
        <View
            className={`
              flex-row justify-center items-center w-full h-14 py-4 rounded-full
              ${inputTheme()}
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
                    inputTheme()
                }
                
            `}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor()}
                value={value}
                autoCapitalize="none"
                onChangeText={onChangeText}
            />
            <Pressable onPress={handleFilter}>
                <IFilter color={getIconColor()} />
            </Pressable>
        </View>
    );
};

export default SearchBarFilter;
