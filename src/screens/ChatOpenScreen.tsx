import {
    FlatList,
    Image,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    Text,
    View,
} from "react-native";
import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { useDesign } from "../design/useDesign";
import { Theme } from "../enums/Theme";
import { StatusBar } from "expo-status-bar";
import HeaderPerfil from "../assets/groups/HeaderPerfil";
import { MessageType } from "../types/MessageType";
import InputMenssage from "../components/InputMenssage";
import PeopleMessage from "../assets/images/PeopleMessage";

const ChatOpenScreen = () => {
    const flatListRef = useRef<FlatList<any>>(null);
    const { userData } = useAuth();
    const { theme } = useTheme();
    const { screenTheme, textColor, font, screenThemeHex } = useDesign();
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState<MessageType[]>([
        {
            message: "Gostaria de saber quando posso retirar meu produto?",
            owner: true,
            time: "22:37",
        },
        {
            message: "Oii boa tarde!",
            owner: false,
            time: "23:27",
        },
        {
            message:
                "Seu pedido estará disponível para retirada amanhã à tarde. Como você gostaria de retirar?",
            owner: false,
            time: "23:28",
        },
    ]);

    

    const handleSendMessage = () => {
        if (message !== "") {
            setMessages(prev => [
                ...prev,
                {
                    message: message,
                    owner: true,
                    time: "",
                },
            ]);
            setMessage("");
            Keyboard.dismiss();

            setTimeout(() => {
                if (flatListRef.current) {
                    flatListRef.current.scrollToEnd({ animated: true });
                }
            }, 800);
            
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={120.2}
            className={`flex-1 w-full px-4 items-center ${screenTheme()} overflow-hidden`}
            style={{backgroundColor: screenThemeHex()}}
        >
            {theme === Theme.Dark ? (
                <StatusBar backgroundColor="transparent" style="light" />
            ) : (
                <StatusBar backgroundColor="transparent" />
            )}
            <View className="w-full items-center justify-end h-[160]">
                <HeaderPerfil className="absolute -top-[95%]" />
                <Image
                    source={{ uri: userData.photo }}
                    className="h-32 w-32 rounded-full"
                />
            </View>
            <View className="flex-1 w-full">
                <View className="w-full justify-center items-center my-2">
                    <Text
                        className={`${textColor()} ${font(
                            "2xl"
                        )} font-montserrat-semibold`}
                    >
                        {userData.name}
                    </Text>
                </View>
                <FlatList
                    ref={flatListRef}
                    data={messages}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        const previousItem = messages[index - 1];

                        const isSameOwner =
                            previousItem && previousItem.owner === item.owner;

                        return (
                            <View
                                className={`
                                    w-full flex-row
                                    ${
                                        item.owner
                                            ? "justify-end items-start"
                                            : "justify-start items-end"
                                    }
                                    ${isSameOwner ? "mt-1" : "mt-6"}
                                    
                                `}
                            >
                                <View className="mr-2 w-8">
                                    {item.owner ? null : isSameOwner ? null : (
                                        <PeopleMessage />
                                    )}
                                </View>

                                <View
                                    className={`
                                        max-w-[70%]
                                        p-2 rounded-lg 
                                        ${
                                            item.owner
                                                ? "bg-green_300"
                                                : "bg-green_500"
                                        }
                                        ${
                                            item.owner
                                                ? ""
                                                : isSameOwner
                                                ? ""
                                                : "rounded-tl-none"
                                        }
                                        ${
                                            item.owner
                                                ? isSameOwner
                                                    ? ""
                                                    : "rounded-tr-none"
                                                : ""
                                        }
                                    `}
                                >
                                    <Text
                                        className={`
                                            font-montserrat-regular ${textColor()} ${font(
                                            "base"
                                        )}
                                        `}
                                    >
                                        {item.message}
                                    </Text>
                                </View>

                                <View className="ml-2 w-8">
                                    {item.owner ? (
                                        isSameOwner ? null : (
                                            <PeopleMessage />
                                        )
                                    ) : null}
                                </View>
                            </View>
                        );
                    }}
                    className="flex-1"
                />

                <View className="my-4 h-14">
                    <InputMenssage
                        placeholder="Digite aqui..."
                        onChangeText={(message) => {
                            setMessage(message);
                        }}
                        value={message}
                        handleSubmit={handleSendMessage}
                    />
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};



export default ChatOpenScreen;
