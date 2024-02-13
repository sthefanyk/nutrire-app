import { Alert, FlatList, Image, Pressable, Text, View } from "react-native";
import React, { useCallback, useRef, useState } from "react";
import { useDesign } from "../design/useDesign";
import createTab from "../navigators/Tab";
import CardSearch from "../components/CardSearch";
import BottomSheet from "@gorhom/bottom-sheet";
import { COLORS } from "../design/Colors";
import GAP from "../design/gap";
import IAdd from "../assets/icons/IAdd";
import IRemove from "../assets/icons/IRemove";
import IFav from "../assets/icons/IFav";
import { useProduct } from "../context/ProductContext";
import { formatNumberForReal } from "../services/FormatService";
import { ProductType } from "../types/ProductType";
import { productsData } from "../data/products";
import { useUser } from "../context/UserContext";
import IFavActive from "../assets/icons/IFavActive";

const FavoriteScreen = ({navigation} : any) => {
    const { screenTheme, screenThemeHex, font, textColor } = useDesign();

    const { addProductBag, getFavsProducts, isFav, RemoveFavorite, AddFavorite } = useUser();

    const [products, setProducts] = useState<ProductType[]>(productsData);
    const [selectedProduct, setSelectedProduct] = useState<ProductType>({} as ProductType);
    const [qtd, setQtd] = useState(0);

    const sheetRef = useRef<BottomSheet>(null);
    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

    return (
        <View
            className={`flex-1 w-full px-4 items-center ${screenTheme()}`}
            style={{ backgroundColor: screenThemeHex() }}
        >
            <View className="w-full justify-center my-2">
                <Text className={`${textColor()} ${font('xl')} font-montserrat-semibold`}>
                    Favoritos
                </Text>
            </View>
            <FlatList
                data={getFavsProducts()}
                renderItem={(item) => {
                    return (
                        <CardSearch item={item} onPress={(product: ProductType) => {
                            setSelectedProduct(product)
                            setQtd(0)
                            sheetRef.current?.snapToIndex(0);
                        }} />
                    )
                }}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}
                className="flex-1 w-full py-4"
                showsVerticalScrollIndicator={false}
            />

            {isBottomSheetOpen && (
                <View className="z-1 absolute bg-[#000] h-screen w-screen opacity-60"></View>
            )}

            <BottomSheet
                ref={sheetRef}
                index={-1}
                snapPoints={["75%", "100%"]}
                onChange={(index: number) => {
                    if (index === 1) {
                        sheetRef.current?.close();
                        if (selectedProduct) {
                            navigation.navigate('PerfilDetails', { product: selectedProduct });
                        }
                    }
                    setIsBottomSheetOpen(index !== -1);
                }}
                enablePanDownToClose={true}
                animateOnMount={false}
                backgroundStyle={{ backgroundColor: screenThemeHex() }}
            >
                <View className={`h-[74%] justify-between px-6`}>
                    <View>
                        <View className="w-full h-[200px] bg-brown_300_50 rounded-md overflow-hidden">
                            <Image
                                source={{
                                    uri: selectedProduct.imagePath
                                }}
                                className="flex-1 w-full"
                            />
                        </View>

                        <View
                            className="w-full flex-row h-4 mt-4 justify-center items-center"
                            style={GAP[8]}
                        >
                            <View className="h-2 w-2 bg-green_300 rounded-full"></View>
                            <View className="h-2 w-2 bg-green_500 rounded-full"></View>
                            <View className="h-2 w-2 bg-green_500 rounded-full"></View>
                        </View>

                        <View className="w-full mt-4" style={GAP[8]}>
                            <Text
                                className={`w-full font-montserrat-semibold ${font(
                                    "xl"
                                )} ${textColor()}`}
                            >
                                {selectedProduct.name}
                            </Text>
                            <Text
                                className={`font-montserrat-regular ${font(
                                    "sm"
                                )} ${textColor()}`}
                            >
                                {formatNumberForReal(selectedProduct.price)}/Und
                            </Text>
                            <Text
                                className={`font-montserrat-regular ${font(
                                    "sm"
                                )} ${textColor()}`}
                            >
                                Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem
                                Ipsum has been the industry's standard dummy
                                text.
                            </Text>
                        </View>

                        <View className="flex-row w-full justify-between mt-4">
                            <View
                                className="flex-row items-center"
                                style={GAP[16]}
                            >
                                <Pressable
                                    onPress={() => {
                                        if (selectedProduct.qtd === 0) return
                                        setQtd(qtd => qtd - 1);
                                    }}
                                    className="bg-green_300 h-6 w-6 justify-center items-center rounded-sm">
                                    <IRemove />
                                </Pressable>
                                <Text
                                    className={`font-montserrat-semibold ${font(
                                        "base"
                                    )} ${textColor()}`}
                                >
                                    {qtd}
                                </Text>
                                <Pressable
                                    onPress={() => setQtd(qtd => qtd + 1)}
                                    className="bg-green_300 h-6 w-6 justify-center items-center rounded-sm">
                                    <IAdd />
                                </Pressable>
                            </View>
                            <Text
                                className={`font-montserrat-semibold ${font(
                                    "base"
                                )} ${textColor()}`}
                            >
                                {formatNumberForReal(selectedProduct.price)}
                            </Text>
                        </View>
                    </View>

                    <View
                        className="w-full flex-row justify-center items-center py-4"
                        style={GAP[8]}
                    >
                        {
                            isFav(selectedProduct.id) ? (
                                <Pressable 
                                    className={`
                                    h-12 w-12 justify-center items-center
                                    border-red border-[2px] rounded-lg
                                `}
                                onPress={() => RemoveFavorite(selectedProduct.id)}>
                                    <IFavActive />
                                </Pressable>
                            ) : (
                                <Pressable 
                                className={`
                                    h-12 w-12 justify-center items-center
                                    border-red border-[2px] rounded-lg
                                `}
                                onPress={() => AddFavorite(selectedProduct.id)}>
                                    <IFav />
                                </Pressable>
                            )
                        }
                        <Pressable
                            onPress={() => {
                                if (qtd !== 0) {
                                    addProductBag(selectedProduct, qtd);
                                    Alert.alert('Produto adicionado a sacolinha');
                                    setQtd(0);
                                }else{
                                    Alert.alert('Adicione a quantidade')
                                }
                            }}
                            className={`
                                h-14 justify-center items-center bg-green_400
                                flex-1 rounded-lg
                            `}
                        >
                            <Text
                                className={`font-montserrat-semibold ${font('base')} text-brown_100`}
                            >
                                Adicionar a sacola ({formatNumberForReal(selectedProduct.price * qtd)})
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </BottomSheet>
        </View>
    );
};


export default FavoriteScreen;
