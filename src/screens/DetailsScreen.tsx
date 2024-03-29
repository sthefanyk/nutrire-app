import { View, Text, FlatList, ScrollView, Pressable, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import GAP from "../design/gap";
import { useDesign } from "../design/useDesign";
import { ProductType } from "../types/ProductType";
import IAdd from "../assets/icons/IAdd";
import IRemove from "../assets/icons/IRemove";
import { useTheme } from "../context/ThemeContext";
import { Theme } from "../enums/Theme";
import { COLORS } from "../design/Colors";
import IFav from "../assets/icons/IFav";
import { CommentType } from "../types/CommentType";
import { useProduct } from "../context/ProductContext";
import { formatNumberForReal } from "../services/FormatService";
import DetailsImage from "../components/DetailsImage";
import { useUser } from "../context/UserContext";
import IFavActive from "../assets/icons/IFavActive";

const comments: CommentType[] = [
    { 
        username: "Username",
        comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    { 
        username: "Username",
        comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    { 
        username: "Username",
        comment: "Lorem Ipsum is simply dummy."
    },
]

const DetailsScreen = ({route}: any) => {

    const { textColor, font, screenThemeHex } = useDesign();
    const { theme } = useTheme();
    const { addProductBag, isFav, RemoveFavorite, AddFavorite } = useUser();
    const [qtd, setQtd] = useState(0);

    const { product } = route.params;

    return (
        <View className={`flex-1 w-full items-center`} style={{backgroundColor: screenThemeHex()}}>
            {/* <View className={`w-full h-[30%] bg-green_100`}></View>
            <View
                className="w-full flex-row my-4 justify-center items-center"
                style={GAP[8]}
            >
                <View className="h-2 w-2 bg-green_300 rounded-full"></View>
                <View className="h-2 w-2 bg-green_500 rounded-full"></View>
                <View className="h-2 w-2 bg-green_500 rounded-full"></View>
            </View> */}
            <DetailsImage 
                image={product.imagePath}
            />
            <ScrollView className="flex-1">
                <View className="flex-1 w-full px-4" style={GAP[8]}>
                    <Text
                        className={`w-full font-montserrat-semibold ${font("lg")} ${textColor()}`}
                    >
                        {product.name}
                    </Text>
                    <Text
                        className={`font-montserrat-regular ${font("base")} ${textColor()}`}
                    >
                        {formatNumberForReal(product.price)}/Und
                    </Text>
                    <Text
                        className={`font-montserrat-regular ${font("sm")} ${textColor()}`}
                    >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text.
                    </Text>
                    <View className="flex-row w-full justify-between mt-4">
                        <View
                            className="flex-row items-center"
                            style={GAP[16]}
                        >
                            <Pressable 
                                onPress={() => {
                                    if (qtd === 0) return
                                    setQtd(qtd => qtd - 1);
                                }}
                                className="bg-green_300 h-7 w-7 justify-center items-center rounded-sm">
                                <IRemove />
                            </Pressable>
                            <Text
                                className={`font-montserrat-semibold ${font(
                                    "dase"
                                )} ${textColor()}`}
                            >
                                {qtd}
                            </Text>
                            <Pressable
                                onPress={() => {
                                    setQtd(qtd => qtd + 1);
                                }}
                                className="bg-green_300 h-7 w-7 justify-center items-center rounded-sm">
                                <IAdd />
                            </Pressable>
                        </View>
                        <Text
                            className={`font-montserrat-semibold ${font(
                                "base"
                            )} ${textColor()}`}
                        >
                            {formatNumberForReal(product.price * qtd)}
                        </Text>

                    </View>
                    <View className={`
                        w-full h-14 justify-center items-center border-b-[1px]
                        ${theme === Theme.Dark ? "border-green_200" : "border-brown_200"}
                    `}>
                        <Text
                            className={`font-montserrat-semibold ${font(
                                "base"
                            )} ${textColor()}`}
                        >
                            Comentários
                        </Text>
                    </View>

                    <FlatList
                        scrollEnabled={false}
                        data={comments}
                        renderItem={(item) => {
                            const product = item.item;
                            return (
                                <View 
                                    className={`
                                        w-full flex-row border-b-[0.5px] py-4
                                        ${theme === Theme.Dark ? "border-green_200" : "border-brown_200"}
                                    `}
                                    style={GAP[8]}
                                >
                                    <View className="w-12 h-12 rounded-full bg-green_300">
                                    </View>
                                    <View className="w-full mb-2">
                                        <Text
                                            className={`w-full font-montserrat-semibold mb-1 ${font('sm')} ${textColor()}`}
                                        >{product.username}</Text>
                                        <Text
                                            className={`w-full font-montserrat-regular mb-1 text-xs} ${textColor()}`}
                                        >{product.comment}</Text>
                                    </View>
                                </View>
                            )
                        }}
                    />
                </View>
            </ScrollView>
            <View
                className="w-full flex-row justify-center items-center p-4"
                style={GAP[8]}
            >
                {
                    isFav(product.id) ? (
                        <Pressable 
                            className={`
                            h-12 w-12 justify-center items-center
                            border-red border-[2px] rounded-lg
                        `}
                        onPress={() => RemoveFavorite(product.id)}>
                            <IFavActive />
                        </Pressable>
                    ) : (
                        <Pressable 
                        className={`
                            h-12 w-12 justify-center items-center
                            border-red border-[2px] rounded-lg
                        `}
                        onPress={() => AddFavorite(product.id)}>
                            <IFav />
                        </Pressable>
                    )
                }
                
                <Pressable
                    onPress={() => {
                        if (qtd !== 0) {
                            addProductBag(product, qtd);
                            Alert.alert('Produto adicionado a sacolinha')
                            setQtd(0);
                        }else{
                            Alert.alert('Adicione a quantidade')
                        }
                    }}
                    className={`
                        h-12 justify-center items-center bg-green_400
                        flex-1 rounded-lg
                    `}
                >
                    <Text
                        className={`font-montserrat-semibold ${font('base')} text-brown_100`}
                    >
                        Adicionar a sacola ({formatNumberForReal(product.price * qtd)})
                    </Text>
                </Pressable>
            </View>
        </View>
    );
};

export default DetailsScreen;
