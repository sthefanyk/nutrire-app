import { View, Text, FlatList, Pressable, ScrollView } from "react-native";
import React from "react";
import { useDesign } from "../design/useDesign";
import { ProductBagType } from "../types/ProductBagType";
import { useTheme } from "../context/ThemeContext";
import { Theme } from "../enums/Theme";
import IAdd from "../assets/icons/IAdd";
import GAP from "../design/gap";
import IRemove from "../assets/icons/IRemove";

const BagScreen = () => {
    const { screenTheme, textColor, font } = useDesign();
    const { theme } = useTheme();

    const data: ProductBagType[] = [
        {
            name: "Batata",
            price: "5.99 / Kg",
            qtd: 1,
            reserva: true,
            total: 5.99,
        },
        {
            name: "Tomate",
            price: "5.99 / Kg",
            qtd: 1,
            reserva: false,
            total: 5.99,
        },
        {
            name: "Maça",
            price: "5.99 / Kg",
            qtd: 1,
            reserva: false,
            total: 5.99,
        },
        {
            name: "Abacate",
            price: "5.99 / Kg",
            qtd: 1,
            reserva: true,
            total: 5.99,
        },
        {
            name: "Uva",
            price: "5.99 / Kg",
            qtd: 1,
            reserva: true,
            total: 5.99,
        },
        {
            name: "Mamão",
            price: "5.99 / Kg",
            qtd: 1,
            reserva: true,
            total: 5.99,
        }
        

    ];
    return (
        <View
            className={`flex-1 w-full px-4 items-center ${screenTheme("bg")}`}
        >
            <View className="w-full flex-row justify-between my-4">
                <Text
                    className={`
                        ${textColor()} font-montserrat-semibold ${font("2xl")}
                    `}
                >
                    Sacolinha
                </Text>
                <Text
                    className={`
                        ${textColor()} font-montserrat-semibold ${font(
                        "lg"
                    )} text-opacity-50
                    `}
                >
                    {data.length} Itens
                </Text>
            </View>

            <FlatList
                data={data}
                renderItem={({ item }) => {
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
                                        R$ {item.price}
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
                                    R$ {item.total.toString()}
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
                                <View className="bg-green_300 rounded-sm w-6 h-6 justify-center items-center">
                                    <IAdd />
                                </View>
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
                                <View className="bg-green_300 rounded-sm w-6 h-6 justify-center items-center">
                                    <IRemove />
                                </View>
                            </View>
                        </View>
                    );
                }}
                keyExtractor={item => item.name}
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
                            ${font("lg")} ${theme === Theme.Dark ? "text-green_300" : "text-green_400"}
                        `}
                    >
                        Total R$ 12.00
                    </Text>
                </View>
                <Pressable
                    onPress={() => console.log("encomendando")}
                    className={`flex-1 bg-green_400 py-2 items-center rounded-lg`}
                >
                    <Text
                        className={`
                            font-montserrat-semibold text-light 
                            ${font("lg")}
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
