import {
    Keyboard,
    ScrollView,
    Text,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { useDesign } from "../design/useDesign";
import { Theme } from "../enums/Theme";
import { StatusBar } from "expo-status-bar";
import SearchBarFilter from "../components/SearchBarFilter";
import createTab from "../navigators/Tab";

const SearchScreen = () => {
    const { theme } = useTheme();
    const { screenTheme } = useDesign();

    const [select, setSelect] = useState("Todos");

    const [search, setSearch] = useState("");

    const Tab = createTab();


    const changeSelect = (name: string) => {
        setSelect(name);
    };

    return (
        <View
            className={`flex-1 w-full px-4 items-center ${screenTheme("bg")}`}
        >
            <SearchBarFilter
                text="Buscar"
                onChangeText={(text: string) => {
                    setSearch(text);
                }}
                value={search}
                placeholder="Buscar"
            />

            <Tab.Navigator>
                <Tab.Screen
                    name="Todos"
                    select={select}
                    changeSelect={changeSelect}
                ></Tab.Screen>
                <Tab.Screen
                    name="Frutas"
                    select={select}
                    changeSelect={changeSelect}
                ></Tab.Screen>
                <Tab.Screen
                    name="Verduras"
                    select={select}
                    changeSelect={changeSelect}
                ></Tab.Screen>
                <Tab.Screen
                    name="Legumes"
                    select={select}
                    changeSelect={changeSelect}
                ></Tab.Screen>
                <Tab.Screen
                    name="Tempero"
                    select={select}
                    changeSelect={changeSelect}
                ></Tab.Screen>
                <Tab.Screen
                    name="Adubo"
                    select={select}
                    changeSelect={changeSelect}
                ></Tab.Screen>
            </Tab.Navigator>
        </View>
    );
};

export default SearchScreen;
