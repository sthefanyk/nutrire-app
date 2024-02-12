import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { useDesign } from "../design/useDesign";
import IUp from "../assets/icons/IUp";
import IDown from "../assets/icons/IDown";
import { FilterType } from "../types/FilterType";

interface Props {
    idCategory: number
    filter: FilterType
    handleAddFilter: (idCategory: number, idItem: number) => void
}

const CategoryFilter = ({idCategory, filter, handleAddFilter}: Props) => {
    const { inputTheme, textColor, font, textColorHex} = useDesign();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <View className="w-full">
            <View className={`${inputTheme()} p-4 rounded-lg`}>
                <View className="flex-row justify-between items-center h-8">
                    <Text
                        className={`${textColor()} ${font(
                            "lg"
                        )} font-montserrat-medium`}
                    >
                        {filter.category}
                    </Text>

                    <Pressable onPress={() => setIsOpen(stt => !stt)}>
                        {isOpen ? <IUp color={textColorHex()}/> : <IDown color={textColorHex()}/>}
                    </Pressable>
                </View>

                {
                    isOpen && (
                        
                        <View className="flex-row flex-wrap gap-2 mt-1">
                            {
                                filter.items.map(item => <Pressable
                                    key={item.id}
                                    onPress={() => handleAddFilter(idCategory,  item.id)}
                                >
                                    <Text
                                        className={`
                                            px-2 py-1 rounded-lg border-[1.5px] 
                                            ${item.active ? "border-green_300 bg-green_100" : 'border-brown_300_50'}
                                            text-center font-montserrat-regular ${font(
                                                "base"
                                            )} ${textColor()}
                                        `}>{item.name}</Text>
                                    </Pressable>
                                )
                            }
                        </View>
                    )
                }

               
            </View>
        </View>
    );
};

export default CategoryFilter;
