import { View, Text, FlatList, Pressable, ScrollView, Alert } from "react-native";
import React from "react";
import { useDesign } from "../design/useDesign";
import { ProductBagType } from "../types/ProductBagType";
import { useTheme } from "../context/ThemeContext";
import { Theme } from "../enums/Theme";
import IAdd from "../assets/icons/IAdd";
import IRemove from "../assets/icons/IRemove";
import { useProduct } from "../context/ProductContext";
import { formatNumberForReal } from "../services/FormatService";

const BagScreen = () => {
    const { screenTheme, screenThemeHex, textColor, font } = useDesign();
    const { bag, clearBag, removeQtdBag, addQtdProductBag, getProductsBag } = useProduct();
    const { theme } = useTheme();

    return (
        <View
            className={`flex-1 w-full px-4 items-center ${screenTheme()}`}
            style={{backgroundColor: screenThemeHex()}}
        >
            <View className="w-full flex-row justify-between my-4">
                <Text
                    className={`
                        ${textColor()} font-montserrat-semibold ${font("xl")}
                    `}
                >
                    Sacolinha
                </Text>
                <Text
                    className={`
                        ${textColor()} font-montserrat-semibold ${font(
                        "base"
                    )} text-opacity-50
                    `}
                >
                    {bag.qtd} Itens
                </Text>
            </View>

            <FlatList
                data={getProductsBag()}
                renderItem={({ item }) => {
                    console.log(item)
                    return (
                        <View
                            className={`flex-1 w-full py-4 flex-row border-b-[0.4px] 
                            border-green_400 border-opacity-25
                        `}
                        >
                            <View className="bg-brown_300_50 h-20 w-20 rounded-lg"></View>
                            <View className="flex-1 justify-between">
                                <View className="flex-1">
                                    <Text
                                        className={`
                                        w-full mx-4
                                        ${textColor()} font-montserrat-semibold ${font(
                                            "lg"
                                        )}
                                    `}
                                    >
                                        {item.name}
                                    </Text>
                                    <Text
                                        className={`
                                        w-full mx-4
                                        ${textColor()} font-montserrat-regular ${font(
                                            "sm"
                                        )}
                                    `}
                                    >
                                        {formatNumberForReal(item.price * item.qtd)}
                                    </Text>
                                </View>
                                <Text
                                    className={`
                                    w-full mx-4 ${
                                        theme === Theme.Dark
                                            ? "text-green_300"
                                            : "text-green_400"
                                    }
                                    font-montserrat-semibold ${font("sm")} 
                                `}
                                >
                                    {formatNumberForReal(item.price * item.qtd)}
                                </Text>
                            </View>
                            <Text
                                className={`
                                mx-4 ${
                                    item.reserva
                                        ? "text-orange"
                                        : theme === Theme.Dark
                                        ? "text-green_300"
                                        : "text-green_400"
                                }
                                font-montserrat-semibold ${font("sm")}
                            `}
                            >
                                {item.reserva
                                    ? "Para reservar"
                                    : "Para comprar"}
                            </Text>
                            <View className="items-center justify-between">
                                <Pressable 
                                    onPress={() => {
                                        addQtdProductBag(item.id);
                                    }}  
                                    className="bg-green_300 rounded-sm w-6 h-6 justify-center items-center">
                                    <IAdd />
                                </Pressable>
                                <Text
                                    className={`
                                    ${
                                        theme === Theme.Dark
                                            ? "text-green_300"
                                            : "text-green_400"
                                    }
                                    font-montserrat-semibold ${font("lg")}
                                `}
                                >
                                    {item.qtd.toString()}
                                </Text>
                                <Pressable
                                    onPress={() => {
                                        removeQtdBag(item.id);
                                    }}
                                    className="bg-green_300 rounded-sm w-6 h-6 justify-center items-center">
                                    <IRemove />
                                </Pressable>
                            </View>
                        </View>
                    );
                }}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                className="flex-1 w-full"
            />

            <View className="w-full py-4 flex-row">
                <View
                    className={`border-[1px] border-green_400 px-4 justify-center rounded-lg mr-2`}
                >
                    <Text
                        className={`
                            font-montserrat-semibold 
                            ${font("sm")} ${theme === Theme.Dark ? "text-green_300" : "text-green_400"}
                        `}
                    >
                        Total {bag.total ? formatNumberForReal(bag.total) : formatNumberForReal(0)}
                    </Text>
                </View>
                <Pressable
                    onPress={() => {
                        clearBag();
                        Alert.alert('encomendando');
                    }}
                    className={`flex-1 bg-green_400 py-2 items-center rounded-lg`}
                >
                    <Text
                        className={`
                            font-montserrat-semibold text-light 
                            ${font("sm")}
                        `}
                    >
                        Encomendar
                    </Text>
                </Pressable>
            </View>
        </View>
    );
};

export default BagScreen;
