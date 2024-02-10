import {
    ScrollView,
    Text,
    View,
} from "react-native";
import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { useDesign } from "../design/useDesign";
import { Theme } from "../enums/Theme";
import { StatusBar } from "expo-status-bar";
import Banner from "../components/Banner";
import CardHome from "../components/CardHome";
import GAP from "../design/gap"
import SearchBar from "../components/SearchBar";

const HomeScreen = () => {
    const { screenTheme, screenThemeHex, textColor, font } = useDesign();

    const [search, setSearch] = useState("");

    return (
        <View
            className={`flex-1 w-full px-4 items-center ${screenTheme()}`}
            style={{backgroundColor: screenThemeHex()}}
        >
            <View className="my-4">
                <SearchBar
                    text="Buscar"
                    onChangeText={(text: string) => {
                        setSearch(text);
                    }}
                    value={search}
                    placeholder="Buscar"
                />
            </View>

            <ScrollView
                className="flex-1 w-full mx-4"
                showsVerticalScrollIndicator={false}
            >
                <Banner />

                <Text className={`
                    mb-1 font-montserrat-semibold
                    ${textColor() + " " + font('xl')}
                    `}>Verduras
                </Text>

                <ScrollView 
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    className="w-screen"
                    >
                    <View className="flex-row">
                        <CardHome />
                        <CardHome />
                        <CardHome />
                        <CardHome />
                        <CardHome />
                    </View>
                </ScrollView>
                <Text className={`
                    mt-4 mb-1 font-montserrat-semibold
                    ${textColor() + " " + font('xl')}
                    `}>Frutas</Text>
                <ScrollView 
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    className="w-full" style={GAP[8]}
                    >
                    <CardHome />
                    <CardHome />
                    <CardHome />
                    <CardHome />
                    <CardHome />
                </ScrollView>   
                <View className="h-10"></View>
            </ScrollView>
        </View>
    );
};

export default HomeScreen;
