import { View, Text, Image, ListRenderItemInfo } from "react-native";
import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Theme } from "../enums/Theme";
import { ProductType } from "../types/ProductType";
import { useDesign } from "../design/useDesign";
import IFav from "../assets/icons/IFav";
import { COLORS } from "../design/Colors";



const CardSearch = ({ item }: { item: ListRenderItemInfo<ProductType> }) => {
    const product = item.item;
    const { theme } = useTheme();
    const { font, textColor } = useDesign();

    const getColor = () => {
        if (theme === Theme.Dark) return "bg-dark";
        else return "bg-light";
    };

    const getColorBorder = () => {
        if (theme === Theme.Dark) return "border-brown_100";
        else return "border-brown_300_50";
    };
    return (
        <View
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
                <Text className={`
                    ${font('lg') + " " + textColor()} font-montserrat-semibold
                `}>{product.name}</Text>
                {
                    product.reserva ? <Text className={`text-orange ${font('base')} font-montserrat-regular`}>Reserva</Text>
                    : <Text className={`text-green_300 ${font('base')} font-montserrat-regular`}>Compra</Text>
                }
                <Text className={`
                    ${font('base') + " " + textColor()} font-montserrat-regular
                `}>R$ {product.price}</Text>
                <IFav color={COLORS.red} className="absolute right-0 bottom-0"/>
            </View>
        </View>
    );
};


export default CardSearch;
