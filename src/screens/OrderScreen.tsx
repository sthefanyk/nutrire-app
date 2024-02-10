import { View, Text, FlatList, Pressable, ScrollView, Alert } from "react-native";
import React from "react";
import { useDesign } from "../design/useDesign";
import { ProductBagType } from "../types/ProductBagType";
import { useTheme } from "../context/ThemeContext";
import { Theme } from "../enums/Theme";
import IAdd from "../assets/icons/IAdd";
import GAP from "../design/gap";
import IRemove from "../assets/icons/IRemove";
import { useProduct } from "../context/ProductContext";
import { formatNumberForReal } from "../services/FormatService";
import { OrderType } from "../types/OrderType";

const order: OrderType[] = [
    { id: "id1", name: "Batata", price: 9.99, status: "Comprado", total: 0, prevision: '02/03' },
    { id: "id4", name: "Tomate", price: 8.50, status: "Comprado", total: 0, prevision: '02/03' },
];

const repite: OrderType[] = [
    { id: "id1", name: "Batata", price: 9.99, status: "Comprado", total: 0, prevision: '02/03' },
    { id: "id2", name: "Cenoura", price: 2.00, status: "Reservado", total: 0, prevision: '02/03' },
    { id: "id3", name: "Maça", price: 4.00, status: "Reservado", total: 0, prevision: '02/03' },
    { id: "id4", name: "Tomate", price: 8.50, status: "Comprado", total: 0, prevision: '02/03' },
    { id: "id5", name: "Abacate", price: 8.00, status: "Comprado", total: 0, prevision: '02/03' },
    { id: "id6", name: "Uva", price: 10.00, status: "Reservado", total: 0, prevision: '02/03' },
];


const OrderScreen = () => {
    const { screenTheme, screenThemeHex, textColor, font } = useDesign();
    const { theme } = useTheme();

    return (
        <View
            className={`flex-1 w-full px-4 items-center ${screenTheme()}`}
            style={{backgroundColor: screenThemeHex()}}
        >
            <View className="flex-1 w-full">
                <View className="w-full flex-row justify-between my-4 items-center">
                    <Text
                        className={`
                            ${textColor()} font-montserrat-semibold ${font("xl")}
                        `}
                    >
                        Suas encomendas
                    </Text>
                    <Text
                        className={`
                            ${textColor()} font-montserrat-semibold ${font(
                            "base"
                        )} text-opacity-50
                        `}
                    >
                        {order.length} Itens
                    </Text>
                </View>

                <FlatList
                    scrollEnabled={false}
                    data={order}
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
                                                "base"
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
                                            {formatNumberForReal(item.price)} / Kg
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
                                        {formatNumberForReal(item.total)}
                                    </Text>
                                </View>

                                <View className="items-end">
                                    <Text
                                        className={`
                                        ${
                                            item.status === "Reservado"
                                            ? "text-orange"
                                            : theme === Theme.Dark
                                            ? "text-green_300"
                                            : "text-green_400"
                                        }
                                        font-montserrat-semibold text-xs
                                        `}
                                        >
                                        {item.status}
                                    </Text>

                                    <Text
                                        className={`
                                            my-1 ${textColor()}
                                            font-montserrat-regular text-xs
                                        `}
                                        >
                                        Previsão de retirada: {item.prevision}
                                    </Text>
                                </View>
                                
                            </View>
                        );
                    }}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    className="w-full"
                />
            </View>

            <View className="flex-1 w-full">
                <View className="w-full flex-row justify-between my-4 items-center">
                    <Text
                        className={`
                            ${textColor()} font-montserrat-semibold ${font("lg")}
                        `}
                    >
                        Encomendar novamente
                    </Text>
                    <Text
                        className={`
                            ${textColor()} font-montserrat-semibold ${font(
                            "base"
                        )} text-opacity-50
                        `}
                    >
                        {repite.length} Itens
                    </Text>
                </View>

                <FlatList
                    data={repite}
                    // scrollEnabled={false}
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
                                                "base"
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
                                            {formatNumberForReal(item.price)} / Kg
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
                                        {formatNumberForReal(item.total)}
                                    </Text>
                                </View>

                                <View className="items-end">
                                    <Text
                                        className={`
                                        ${
                                            item.status === "Reservado"
                                            ? "text-orange"
                                            : theme === Theme.Dark
                                            ? "text-green_300"
                                            : "text-green_400"
                                        }
                                        font-montserrat-semibold text-xs
                                        `}
                                        >
                                        {item.status}
                                    </Text>
                                </View>
                                
                            </View>
                        );
                    }}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    className="flex-1 w-full"
                />
            </View>

        </View>
    );
};

export default OrderScreen;
