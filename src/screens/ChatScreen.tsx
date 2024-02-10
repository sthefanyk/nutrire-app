import {
    FlatList,
    Pressable,
    Text,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import React from "react";
import { useTheme } from "../context/ThemeContext";
import { useDesign } from "../design/useDesign";
import { Theme } from "../enums/Theme";
import { PreviewChatType } from "../types/PreviewChatType";
import People from "../assets/images/People";

const ChatScreen = ({navigation}: any) => {
    const { theme, updateTheme } = useTheme();
    const { screenTheme, textColor, font, screenThemeHex } = useDesign();

    const data: PreviewChatType[] = [
        {
            name: "Ana",
            lastMessage: "Seu produto está disponível para retirada amanhã...",
            status: 'Em andamento',
            time: '22:37',
            open: false
        },
        {
            name: "Julia",
            lastMessage: "Olá! Estamos sem este produto no estoque...",
            status: 'Em andamento',
            time: '17:45',
            open: true
        },
        {
            name: "Matheus",
            lastMessage: "Muito obrigado por realizar essa compra conosco!",
            status: 'Finalizada',
            time: '17/01/24',
            open: true
        },
    ];

    const changeTheme = () => {
        const t = theme;

        if (t === Theme.Normal) {
            updateTheme(Theme.Light);
            return;
        }

        if (t === Theme.Light) {
            updateTheme(Theme.Dark);
            return;
        }

        updateTheme(Theme.Normal);
    };

    return (
        <TouchableWithoutFeedback onPress={() => changeTheme()}>
            <View
                className={`flex-1 w-full px-4 items-center ${screenTheme()}`}
                style={{backgroundColor: screenThemeHex()}}
            >
                <Text
                    className={`
                        w-full my-4
                        ${textColor()} font-montserrat-semibold ${font("xl")}
                    `}
                >
                    Suas conversas
                </Text>

                <FlatList 
                    data={data}
                    renderItem={({item}) => {
                        return (
                            <Pressable className={`
                                w-screen flex-row p-4
                                ${item.open ? "" : "bg-green_100"}
                                border-b-[0.3px] border-green_500
                            `}
                                onPress={() => navigation.navigate('ChatOpen')}
                            >
                                <View className="rounded-full overflow-hidden h-12 w-12 justify-center items-center">
                                    <People />
                                </View>
                                <View className="flex-1 ml-4">
                                    <Text className={`
                                        ${item.open ? textColor() : theme === Theme.Normal ? "text-brow_200" : "text-brow_300"} 
                                        ${font('base')} font-montserrat-semibold
                                    `}>{item.name}</Text>
                                    <Text className={`
                                        ${item.open ? textColor() : theme === Theme.Normal ? "text-brow_200" : "text-brow_300"} 
                                        ${font('sm')} font-montserrat-regular h-12 truncate 
                                    `}>{item.lastMessage}</Text>
                                </View>
                                <View className="w-max justify-between items-end">
                                    <Text className={`
                                        
                                        ${item.open ? textColor() : theme === Theme.Normal ? "text-brow_200" : "text-brow_300"} 
                                        ${font('sm')} font-montserrat-semibold
                                        ${item.status === "Em andamento" ? "text-orange" : "text-green_300"}
                                    `}>{item.status}</Text>
                                    <Text className={`
                                        ${item.open ? textColor() : theme === Theme.Normal ? "text-brow_200" : "text-brow_300"} 
                                        ${font('sm')} font-montserrat-regular
                                    `}>{item.time}</Text>
                                </View>
                            </Pressable>
                        )
                    }}
                    className="w-screen"
                />

                
            </View>
        </TouchableWithoutFeedback>
    );
};

export default ChatScreen;
