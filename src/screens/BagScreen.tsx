import { View, Text, Pressable, Alert, Image, ScrollView } from "react-native";
import React from "react";
import { useDesign } from "../design/useDesign";
import { useTheme } from "../context/ThemeContext";
import { Theme } from "../enums/Theme";
import IAdd from "../assets/icons/IAdd";
import IRemove from "../assets/icons/IRemove";
import { formatNumberForReal } from "../services/FormatService";
import { useUser } from "../context/UserContext";
const BagScreen = () => {
    const { screenTheme, screenThemeHex, textColor, font } = useDesign();
    const { bag, clearBag, removeQtdProductBag, addQtdProductBag } = useUser();
    const { theme } = useTheme();

    return (
        <View
            className={`flex-1 w-full px-4 items-center ${screenTheme()}`}
            style={{ backgroundColor: screenThemeHex() }}
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
                    {bag.products.length} Itens
                </Text>
            </View>

            <ScrollView className="flex-1 w-full" showsVerticalScrollIndicator={false}>
                {
                    bag.products.map((item) => {
                        const product = item.product;
                        
                        return (
                            <View key={item.product.id} className="flex-row border-b-[0.4px] py-4
                            border-green_400 border-opacity-25">
                                <View className="bg-brown_300_50 h-20 aspect-square rounded-lg overflow-hidden">
                                    <Image
                                        source={{
                                            uri: product.imagePath
                                        }}
                                        className="w-full h-full object-cover"
                                    />
                                </View>
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
                                            {product.name}
                                        </Text>
                                        <Text
                                            className={`
                                            w-full mx-4
                                            ${textColor()} font-montserrat-regular ${font(
                                                "sm"
                                            )}
                                        `}
                                        >
                                            {formatNumberForReal(product.price)}
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
                                        {formatNumberForReal(product.price * item.qtd)}
                                    </Text>
                                </View>
                                <Text
                                    className={`
                                    mx-4 ${
                                        product.reserva
                                            ? "text-orange"
                                            : theme === Theme.Dark
                                            ? "text-green_300"
                                            : "text-green_400"
                                    }
                                    font-montserrat-semibold ${font("sm")}
                                `}
                                >
                                    {product.reserva
                                        ? "Para reservar"
                                        : "Para comprar"}
                                </Text>
                                <View className="items-center justify-between">
                                    <Pressable 
                                        onPress={() => {
                                            addQtdProductBag(product);
                                        }}  
                                        className="bg-green_300 rounded-sm w-7 h-7 justify-center items-center">
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
                                        m-1
                                    `}
                                    >
                                        {item.qtd.toString()}
                                    </Text>
                                    <Pressable
                                        onPress={() => {
                                            removeQtdProductBag(product);
                                        }}
                                        className="bg-green_300 rounded-sm w-7 h-7 justify-center items-center">
                                        <IRemove />
                                    </Pressable>
                                </View>
                            </View>
                        )
                    })
                }
            </ScrollView>

            <View className="w-full py-4 flex-row">
                <View
                    className={`border-[1px] border-green_400 px-4 justify-center rounded-lg mr-2 h-12`}
                >
                    <Text
                        className={`
                            font-montserrat-semibold 
                            ${font("base")} ${
                            theme === Theme.Dark
                                ? "text-green_300"
                                : "text-green_400"
                        }
                        `}
                    >
                        Total{" "}
                        {bag.total
                            ? formatNumberForReal(bag.total)
                            : formatNumberForReal(0)}
                    </Text>
                </View>
                <Pressable
                    onPress={() => {
                        clearBag();
                        Alert.alert("encomendando");
                    }}
                    className={`flex-1 bg-green_400 h-12 justify-center items-center rounded-lg`}
                >
                    <Text
                        className={`
                            font-montserrat-semibold text-light 
                            ${font("base")}
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

