import React from "react";
import { View, Text, Image, Pressable, Alert } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { useDesign } from "../design/useDesign";
import { useUser } from "../context/UserContext";
import { formatNumberForReal } from "../services/FormatService";
import { ProductType } from "../types/ProductType";
import IAdd from "../assets/icons/IAdd";
import IRemove from "../assets/icons/IRemove";
import IFavActive from "../assets/icons/IFavActive";
import IFav from "../assets/icons/IFav";
import GAP from "../design/gap";

interface BottomSheetProps {
    selectedProduct: ProductType;
    qtd: number;
    setQtd: React.Dispatch<React.SetStateAction<number>>;
    isBottomSheetOpen: boolean;
    setIsBottomSheetOpen: React.Dispatch<React.SetStateAction<boolean>>;
    navigation: any;
    sheetRef: React.RefObject<BottomSheet>;
}

const BottomSheetComponent: React.FC<BottomSheetProps> = ({
    selectedProduct,
    qtd,
    setQtd,
    isBottomSheetOpen,
    setIsBottomSheetOpen,
    navigation,
    sheetRef,
}) => {
    const { font, textColor, screenThemeHex } = useDesign();
    const { isFav, RemoveFavorite, AddFavorite, addProductBag } = useUser();

    return (
        <BottomSheet
            ref={sheetRef}
            index={-1}
            snapPoints={["75%", "100%"]}
            onChange={(index: number) => {
                if (index === 1) {
                    sheetRef.current?.close();
                    if (selectedProduct) {
                        navigation.navigate("Details", {
                            product: selectedProduct,
                        });
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
                                uri: selectedProduct.imagePath,
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
                                "lg"
                            )} ${textColor()}`}
                        >
                            {selectedProduct.name}
                        </Text>
                        <Text
                            className={`font-montserrat-regular ${font(
                                "base"
                            )} ${textColor()}`}
                        >
                            {formatNumberForReal(selectedProduct.price)}/Und
                        </Text>
                        <Text
                            className={`w-full font-montserrat-regular ${font(
                                "sm"
                            )} ${textColor()}`}
                        >
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text.
                        </Text>
                    </View>

                    <View className="flex-row w-full justify-between mt-4">
                        <View className="flex-row items-center" style={GAP[16]}>
                            <Pressable
                                onPress={() => {
                                    if (qtd === 0) return;
                                    setQtd((qtd) => qtd - 1);
                                }}
                                className="bg-green_300 h-7 w-7 justify-center items-center rounded-sm"
                            >
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
                                onPress={() => setQtd((qtd) => qtd + 1)}
                                className="bg-green_300 h-7 w-7 justify-center items-center rounded-sm"
                            >
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
                    {isFav(selectedProduct.id) ? (
                        <Pressable
                            className={`
                                    h-12 w-12 justify-center items-center
                                    border-red border-[2px] rounded-lg
                                `}
                            onPress={() => RemoveFavorite(selectedProduct.id)}
                        >
                            <IFavActive />
                        </Pressable>
                    ) : (
                        <Pressable
                            className={`
                                    h-12 w-12 justify-center items-center
                                    border-red border-[2px] rounded-lg
                                `}
                            onPress={() => AddFavorite(selectedProduct.id)}
                        >
                            <IFav />
                        </Pressable>
                    )}
                    <Pressable
                        onPress={() => {
                            if (qtd !== 0) {
                                addProductBag(selectedProduct, qtd);

                                Alert.alert("Produto adicionado a sacolinha");
                                setQtd(0);
                            } else {
                                Alert.alert("Adicione a quantidade");
                            }
                        }}
                        className={`
                                h-12 justify-center items-center bg-green_400
                                flex-1 rounded-lg
                            `}
                    >
                        <Text
                            className={`font-montserrat-semibold ${font(
                                "base"
                            )} text-brown_100`}
                        >
                            Adicionar a sacola (
                            {formatNumberForReal(selectedProduct.price * qtd)})
                        </Text>
                    </Pressable>
                </View>
            </View>
        </BottomSheet>
    );
};

export default BottomSheetComponent;
