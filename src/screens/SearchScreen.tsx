import {
    Alert,
    Dimensions,
    FlatList,
    Pressable,
    Text,
    View,
} from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDesign } from "../design/useDesign";
import SearchBarFilter from "../components/SearchBarFilter";
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
import Filter from "../components/Filter";

const SearchScreen = ({ navigation }: any) => {
    const {
        screenTheme,
        screenThemeHex,
        font,
        textColor,
    } = useDesign();
    const { productSelected, setProductSelected, products, addProductBag } =
        useProduct();
    const [search, setSearch] = useState("");
    const [filterOpen, setFilterOpen] = useState(false);

    const [selectCategory, setSelectCategory] = useState("Todos");
    const Tab = createTab();

    const sheetRef = useRef<BottomSheet>(null);
    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

    const changeSelect = (name: string) => {
        setSelectCategory(name);
    };

    const handleSnapPress = useCallback((index: number) => {
        sheetRef.current?.snapToIndex(index);
    }, []);

    const handleSheetChange = useCallback((index: number) => {
        if (index === 1) {
            handleClosePress();
            navigation.navigate("Details");
        }

        setIsBottomSheetOpen(index !== -1);
    }, []);

    const handleClosePress = useCallback(() => {
        sheetRef.current?.close();
    }, []);

    const selectProduct = (index: number) => {
        setProductSelected(products[index]);
        handleSnapPress(0);
    };

    return (
        <View
            className={`flex-1 w-full px-4 items-center ${screenTheme()}`}
            style={{ backgroundColor: screenThemeHex() }}
        >
            <SearchBarFilter
                text="Buscar"
                onChangeText={(text: string) => {
                    setSearch(text);
                }}
                value={search}
                placeholder="Buscar"
                handleFilter={() => setFilterOpen(true)}
            />

            <Tab.Navigator>
                <Tab.Screen
                    name="Todos"
                    select={selectCategory}
                    changeSelect={changeSelect}
                ></Tab.Screen>
                <Tab.Screen
                    name="Frutas"
                    select={selectCategory}
                    changeSelect={changeSelect}
                ></Tab.Screen>
                <Tab.Screen
                    name="Verduras"
                    select={selectCategory}
                    changeSelect={changeSelect}
                ></Tab.Screen>
                <Tab.Screen
                    name="Legumes"
                    select={selectCategory}
                    changeSelect={changeSelect}
                ></Tab.Screen>
                <Tab.Screen
                    name="Temperos"
                    select={selectCategory}
                    changeSelect={changeSelect}
                ></Tab.Screen>
                <Tab.Screen
                    name="Adubo"
                    select={selectCategory}
                    changeSelect={changeSelect}
                ></Tab.Screen>
            </Tab.Navigator>

            <FlatList
                data={products}
                renderItem={(item) => (
                    <CardSearch item={item} onPress={selectProduct} />
                )}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}
                className="flex-1 w-full py-4"
                // showsVerticalScrollIndicator={false}
            />

            {isBottomSheetOpen && (
                <View className="z-1 absolute bg-[#000] h-screen w-screen opacity-60"></View>
            )}

            <BottomSheet
                ref={sheetRef}
                index={-1}
                snapPoints={["75%", "100%"]}
                onChange={handleSheetChange}
                enablePanDownToClose={true}
                animateOnMount={false}
                backgroundStyle={{ backgroundColor: screenThemeHex() }}
            >
                <View className={`h-[74%] justify-between px-6`}>
                    <View>
                        <View className="w-full h-[200px] bg-brown_300_50 rounded-md"></View>

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
                                {productSelected.name}
                            </Text>
                            <Text
                                className={`font-montserrat-regular ${font(
                                    "base"
                                )} ${textColor()}`}
                            >
                                {formatNumberForReal(productSelected.price)}/Und
                            </Text>
                            <Text
                                className={`w-full font-montserrat-regular ${font(
                                    "sm"
                                )} ${textColor()}`}
                            >
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text.
                            </Text>
                        </View>

                        <View className="flex-row w-full justify-between mt-4">
                            <View
                                className="flex-row items-center"
                                style={GAP[16]}
                            >
                                <Pressable
                                    onPress={() => {
                                        if (productSelected.qtd === 0) return;
                                        setProductSelected({
                                            ...productSelected,
                                            qtd: productSelected.qtd - 1,
                                        });
                                    }}
                                    className="bg-green_300 h-6 w-6 justify-center items-center rounded-sm"
                                >
                                    <IRemove />
                                </Pressable>
                                <Text
                                    className={`font-montserrat-semibold ${font(
                                        "base"
                                    )} ${textColor()}`}
                                >
                                    {productSelected.qtd}
                                </Text>
                                <Pressable
                                    onPress={() =>
                                        setProductSelected({
                                            ...productSelected,
                                            qtd: productSelected.qtd + 1,
                                        })
                                    }
                                    className="bg-green_300 h-6 w-6 justify-center items-center rounded-sm"
                                >
                                    <IAdd />
                                </Pressable>
                            </View>
                            <Text
                                className={`font-montserrat-semibold ${font(
                                    "base"
                                )} ${textColor()}`}
                            >
                                {formatNumberForReal(productSelected.price)}
                            </Text>
                        </View>
                    </View>

                    <View
                        className="w-full flex-row justify-center items-center py-4"
                        style={GAP[8]}
                    >
                        <View
                            className={`
                                h-12 w-12 justify-center items-center
                                border-red border-[2px] rounded-lg
                            `}
                        >
                            <IFav color={COLORS.red} />
                        </View>
                        <Pressable
                            onPress={() => {
                                if (productSelected.qtd !== 0) {
                                    addProductBag();
                                    Alert.alert(
                                        "Produto adicionado a sacolinha"
                                    );
                                    setProductSelected({
                                        ...productSelected,
                                        qtd: 0,
                                    });
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
                                {formatNumberForReal(
                                    productSelected.price * productSelected.qtd
                                )}
                                )
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </BottomSheet>

            {filterOpen && <Filter setFilterOpen={() => setFilterOpen(false)} />}
        </View>
    );
};

export default SearchScreen;
