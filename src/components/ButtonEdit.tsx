import { View, Text, Pressable } from "react-native";
import React from "react";
import IArrowNext from "../assets/icons/IArrowNext";
import { useDesign } from "../design/useDesign";
import { Theme } from "../enums/Theme";
import { useTheme } from "../context/ThemeContext";

const ButtonEdit = (props: any) => {

    const {font, textColor, textColorHex} = useDesign();
    const {theme} = useTheme();

    const getButtonColor = () => {
        if(theme === Theme.Normal) return "bg-light"
        if(theme === Theme.Light) return "bg-green_100"
        if(theme === Theme.Dark) return "bg-dark_search"
    }

    return (
        <Pressable
            className={`w-full ${getButtonColor()} h-14 rounded-lg flex-row items-center justify-between px-2`}
            onPress={props.onPress}
        >
            <View className="flex-1 flex-row items-center justify-between">
                <Text
                    className={`${textColor()} font-montserrat-semibold ${font(
                        "base"
                    )} ml-2`}
                >
                    {props.text}
                </Text>
                <Text
                    className={`${textColor()} font-montserrat-medium ${font(
                        "sm"
                    )} ml-2`}
                >
                    {props.textSecunday}
                </Text>
            </View>
            <IArrowNext color={textColorHex()}/>
        </Pressable>
    );
};

export default ButtonEdit;
