import { View, Text, Image, ListRenderItemInfo, Pressable } from "react-native";
import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Theme } from "../enums/Theme";
import { ProductType } from "../types/ProductType";
import { useDesign } from "../design/useDesign";
import IFav from "../assets/icons/IFav";
import { COLORS } from "../design/Colors";
import { formatNumberForReal } from "../services/FormatService";
import { useUser } from "../context/UserContext";
import IFavActive from "../assets/icons/IFavActive";

interface Props {
    item: ListRenderItemInfo<ProductType>
    onPress: (product: ProductType) => void
}

const CardSearch = ({ item, onPress }: Props) => {
    const product = item.item;

    const { theme } = useTheme();
    const { font, textColor } = useDesign();
    const { isFav, AddFavorite, RemoveFavorite } = useUser();

    const getColor = () => {
        if (theme === Theme.Dark) return "bg-dark";
        else return "bg-light";
    };

    return (
        <Pressable
            onPress={() => onPress(product)}
            className={`
                w-[46%] h-56 border-[1px] rounded-xl mb-4 mx-[2%]
                ${getColor()} overflow-hidden border-brown_300_50
            `}
        >
            <View className="flex-1 bg-brown_300_50 w-full overflow-hidden">
                <Image
                    source={{
                        uri: product.imagePath
                    }}
                    className="flex-1 w-full"
                />
            </View>
            <View className="p-2">
                <Text
                    className={`
                    ${font("base") + " " + textColor()} font-montserrat-semibold
                `}
                >
                    {product.name}
                </Text>
                {product.reserva ? (
                    <Text
                        className={`text-orange ${font(
                            "sm"
                        )} font-montserrat-regular`}
                    >
                        Reserva
                    </Text>
                ) : (
                    <Text
                        className={`text-green_300 ${font(
                            "sm"
                        )} font-montserrat-regular`}
                    >
                        Compra
                    </Text>
                )}
                <Text
                    className={`
                        ${font("sm") + " " + textColor()} font-montserrat-regular
                    `}
                >
                    {formatNumberForReal(product.price)}
                </Text>

                <View className="absolute right-0 bottom-0 justify-center items-center h-8 w-8">
                    {
                        isFav(product.id) ? (
                            <Pressable onPress={() => RemoveFavorite(product.id)}>
                                <IFavActive />
                            </Pressable>
                        ) : (
                            <Pressable onPress={() => AddFavorite(product.id)}>
                                <IFav />
                            </Pressable>
                        )
                    }

                </View>

            </View>
        </Pressable>
    );
};

export default CardSearch;
