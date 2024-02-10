import { View, Text, Image, ListRenderItemInfo, Pressable } from "react-native";
import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Theme } from "../enums/Theme";
import { ProductType } from "../types/ProductType";
import { useDesign } from "../design/useDesign";
import IFav from "../assets/icons/IFav";
import { COLORS } from "../design/Colors";
import { formatNumberForReal } from "../services/FormatService";

interface Props {
    item: ListRenderItemInfo<ProductType>
    onPress: (index: number) => void
}

const CardSearch = ({ item, onPress }: Props) => {
    const product = item.item;
    const { theme } = useTheme();
    const { font, textColor } = useDesign();

    const getColor = () => {
        if (theme === Theme.Dark) return "bg-dark";
        else return "bg-light";
    };

    return (
        <Pressable
            onPress={() => onPress(item.index)}
            className={`
                w-[46%] h-56 border-[1px] rounded-xl mb-4 mx-[2%]
                ${getColor()} overflow-hidden border-brown_300_50
                
            `}
        >
            <View className="flex-1 bg-brown_300_50 w-full overflow-hidden">
                <Image
                // source={require('../assets/images/cenoura.jpeg')}
                // className='bg-brown_300_50 w-full h-36 rounded-xl'
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
                <IFav
                    color={COLORS.red}
                    className="absolute right-0 bottom-0"
                />
            </View>
        </Pressable>
    );
};

export default CardSearch;