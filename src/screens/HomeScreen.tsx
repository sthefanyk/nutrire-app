import {
    FlatList,
    Pressable,
    ScrollView,
    Text,
    View,
} from "react-native";
import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { useDesign } from "../design/useDesign";
import { Theme } from "../enums/Theme";
import { StatusBar } from "expo-status-bar";
import Banner from "../components/Banner";
import CardHome from "../components/CardHome";
import GAP from "../design/gap"
import SearchBar from "../components/SearchBar";
import { Carousel } from "../components/Carousel";
import { ProductType } from "../types/ProductType";
import { useProduct } from "../context/ProductContext";
import { productsCategoriesData } from "../data/products";


const HomeScreen = ({navigation}: any) => {
    const { screenTheme, screenThemeHex, textColor, font } = useDesign();
    const { setProductSelected } = useProduct();

    const [search, setSearch] = useState("");
    const [products, setProducts] = useState(productsCategoriesData);
    

    

    return (
        <View
            className={`flex-1 w-full px-4 items-center ${screenTheme()}`}
            style={{backgroundColor: screenThemeHex()}}
        >
            <View className="my-4">
                <SearchBar
                    text="Buscar"
                    onChangeText={(text: string) => {
                        setSearch(text);
                    }}
                    value={search}
                    placeholder="Buscar"
                />
            </View>

            <ScrollView
                className="flex-1 w-full mx-4"
                showsVerticalScrollIndicator={false}
            >
                <Carousel />

                {
                    products.map((item) => {
                        return (
                            <View key={item.name} className="mb-4">
                                <Text className={`
                                    mb-1 font-montserrat-semibold
                                    ${textColor() + " " + font('xl')}
                                    `}>{item.name}
                                </Text>

                                <FlatList
                                    data={item.products}
                                    horizontal
                                    renderItem={({item}) => <Pressable
                                            onPress={() => {navigation.navigate('DetailsHome', {product: item})}}
                                        ><CardHome  product={item} />
                                        </Pressable>
                                    }
                                    showsHorizontalScrollIndicator={false}
                                />
                            </View>
                        )
                    })
                }
                <View className="h-10"></View>
            </ScrollView>
        </View>
    );
};

export default HomeScreen;
