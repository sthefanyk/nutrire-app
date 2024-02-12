import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import IBack from "../assets/icons/IBack";
import { useDesign } from "../design/useDesign";
import GAP from "../design/gap";
import { FilterType } from "../types/FilterType";
import { FilterItemsType } from "../types/FilterItemsType";
import IRemoveCategory from "../assets/icons/IRemoveCategory";
import { useTheme } from "../context/ThemeContext";
import { Theme } from "../enums/Theme";

interface Props {
    setFilterOpen: () => void;
}

interface FiltersActives {
    idCategory: number;
    idItem: number;
}

const data: FilterType[] = [
    {
        category: "Produto",
        items: [
            { id: 0, name: "Todos", active: true },
            { id: 1, name: "Frutas", active: false },
            { id: 2, name: "Legumes", active: false },
            { id: 3, name: "Verduras", active: false },
            { id: 4, name: "Tempero", active: false },
            { id: 5, name: "Adubo", active: false },
        ],
    },
    {
        category: "Categoria",
        items: [
            { id: 0, name: "Todas", active: true },
            { id: 1, name: "Compras", active: false },
            { id: 2, name: "Reservas", active: false },
        ],
    },
    {
        category: "Preço",
        items: [
            { id: 0, name: "Todos os preços", active: true },
            { id: 1, name: "Promoção", active: false },
        ],
    },
];

const Filter = ({ setFilterOpen }: Props) => {
    const { screenThemeHex, textColorHex, textColor, font } = useDesign();
    const { theme } = useTheme();
    const [filtersActives, setFiltersActives] = useState<FiltersActives[]>([]);
    const [filtersList, setFiltersList] = useState<FilterType[]>(data);

    const handleAddFilter = (idCategory: number, idItem: number) => {
        if (idItem === 0) {
            const filtersListUpdated: FilterType[] = filtersList.map((item, index) => {
                if (index === idCategory) {
                    const categoryItemUpdated = item.items.map(i => {

                        if (i.id === 0) return { ...i, active: true }
                        return { ...i, active: false };
                    })
                    return { ...item, items: categoryItemUpdated };
                }
                return item;
            });

            const list = filtersActives.filter((item) => !(item.idCategory === idCategory));
    
            setFiltersList(filtersListUpdated);
            setFiltersActives(list);
        } else {
            const exists = filtersActives.filter((item) => {
                return item.idCategory === idCategory && item.idItem === idItem;
            });

            if (exists.length === 0) {
                const filtersListUpdated: FilterType[] = filtersList.map(
                    (item, index) => {
                        if (index === idCategory) {
                            const categoryItemUpdated = item.items.map((i) => {
                                if (i.id === 0) return { ...i, active: false }
                                if (i.id === idItem) return { ...i, active: true }
                                return i
                            });

                            return { ...item, items: categoryItemUpdated };
                        }
                        return item
                    }
                );
                setFiltersActives((prevFiltersActives) => [
                    ...prevFiltersActives,
                    { idCategory, idItem },
                ]);
                setFiltersList(filtersListUpdated);
            }
        }
    };

    const handleRemoveFilter = (idCategory: number, idItem: number) => {
        const filtersActivesFilter = filtersActives.filter(
            (item) =>
                !(item.idCategory === idCategory && item.idItem === idItem)
        );

        const filtersListUpdated: FilterType[] = filtersList.map(
            (item, index) => {
                if (index === idCategory) {
                    const categoryItemUpdated = item.items.map((i) => {
                        if (i.id === idItem) {
                            return { ...i, active: false }
                        }
                        return i
                    })
                    return { ...item, items: categoryItemUpdated }
                }
                return item;
            }
        );

        setFiltersActives([...filtersActivesFilter]);
        setFiltersList(filtersListUpdated);
    };

    return (
        <View className={`absolute z-10 h-full w-screen flex-row`}>
            <View
                className={`bg-dark_search opacity-40 w-full h-full items-end`}
            ></View>
            <View
                className={`
                            absolute right-0 w-[80%] h-full items-end rounded-l-2xl
                        `}
                style={{ backgroundColor: screenThemeHex() }}
            >
                <View className="flex-row w-full items-center mt-2">
                    <Pressable onPress={setFilterOpen}>
                        <IBack color={textColorHex()} />
                    </Pressable>

                    <Text
                        className={`${textColor()} ${font(
                            "xl"
                        )} font-montserrat-semibold`}
                    >
                        Filtrar
                    </Text>
                </View>

                <View className="w-full mt-4 px-4" style={GAP[16]}>
                    <View className="flex-row w-full flex-wrap gap-2">
                        {filtersActives.map((item, index) => (
                            <Pressable
                                key={index}
                                onPress={() =>
                                    handleRemoveFilter(
                                        item.idCategory,
                                        item.idItem
                                    )
                                }
                            >
                                <View
                                    className={`
                                flex-row px-2 py-1 rounded-lg border-[1.5px] border-green_300 justify-center items-center
                                ${theme === Theme.Dark ? "" : "bg-green_100"}
                            `}
                                >
                                    <IRemoveCategory />
                                    <Text
                                        key={index}
                                        className={`
                                        text-center font-montserrat-regular ${font(
                                            "base"
                                        )} ${textColor()} ml-1
                                    `}
                                    >
                                        {
                                            filtersList[item.idCategory].items[
                                                item.idItem
                                            ].name
                                        }
                                    </Text>
                                </View>
                            </Pressable>
                        ))}
                    </View>

                    {filtersList.map((item, index) => {
                        return (
                            <CategoryFilter
                                key={index}
                                idCategory={index}
                                filter={item}
                                handleAddFilter={handleAddFilter}
                            />
                        );
                    })}
                </View>
            </View>
        </View>
    );
};

export default Filter;
