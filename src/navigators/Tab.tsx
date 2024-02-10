import { View, Text, Pressable, ScrollView } from "react-native";
import React from "react";
import { useDesign } from "../design/useDesign";
import { Theme } from "../enums/Theme";
import { useTheme } from "../context/ThemeContext";

const Navigator = (props: any) => {
    const { bgColorInverse } = useDesign();

    return (
        <View className="w-full h-16">
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} 
                className={`
                    flex-1 border-b-[0.5px] flex-row w-screen 
                    ${bgColorInverse('border')}
                `}>{props.children}
                <View className="w-4"></View>
            </ScrollView>
        </View>
    );
};

interface ScreenProps {
    name: string;
    select: string
    changeSelect: (name: string) => void
}

const Screen = ({ name, select, changeSelect}: ScreenProps) => {
    const { textColor, font, screenThemeHex } = useDesign();
    const { theme } = useTheme();

    return select === name ? (
        <Pressable
            onPress={() => changeSelect(name)}
            className={`
                flex-1 justify-center items-center border-b-[2px] px-8
                ${Theme.Dark === theme ? "border-b-green_300" : "border-b-green_400"}
            `}
        >
            <Text
                className={`
                ${textColor()} font-montserrat-semibold ${font("sm")}
                ${Theme.Dark === theme ? "text-green_300" : "text-green_400"}
            `}
            >
                {name}
            </Text>
        </Pressable>
    ) : (
        <Pressable
            onPress={() => changeSelect(name)}
            className={`
                px-8 justify-center items-center border-b-[2px] border-b-green_300
                ${Theme.Dark === theme ? "border-b-green_300" : "border-b-green_400"}
            `}
            style={{ borderColor: screenThemeHex() }}
        >
            <Text
                className={`
                ${textColor()} font-montserrat-semibold ${font("sm")}
            `}
            >
                {name}
            </Text>
        </Pressable>
    );
};

export default function createTab() {
    return {
        Navigator,
        Screen,
    };
}
