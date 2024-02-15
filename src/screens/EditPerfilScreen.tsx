import {
    Image,
    Pressable,
    ScrollView,
    Text,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import React from "react";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { useDesign } from "../design/useDesign";
import { Theme } from "../enums/Theme";
import HeaderPerfil from "../assets/groups/HeaderPerfil";
import GAP from "../design/gap";
import ButtonEdit from "../components/ButtonEdit";
import IEditSmall from "../assets/icons/IEditSmall";
import { Header } from "../enums/Header";

const EditPerfilScreen = () => {
    const { userData } = useAuth();
    const { theme, updateTheme, updateHeader } = useTheme();
    const { screenTheme, textColor, font, screenThemeHex, headerColor } = useDesign();


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
            <View
                className={`flex-1 w-full px-4 items-center ${screenTheme()} overflow-hidden`}
                style={{backgroundColor: screenThemeHex()}}
            >
                <View className="w-full items-center justify-end h-[190]">
                    <HeaderPerfil bg={headerColor().bg} veg={headerColor().veg} className="absolute -top-[60%]"/>

                    <View className="h-32 w-32 rounded-full overflow-hidden">
                        <Image 
                            source={{uri: userData.photo }}
                            className="h-32 w-32 rounded-full"
                        />

                        <View className={`
                            absolute bottom-0 w-full p-2 justify-center items-center
                            bg-green_100 opacity-70 flex-row
                        `}>
                            <IEditSmall />
                            <Text className={`
                                ml-1 text-center text-xs font-montserrat-semibold text-[#000]
                            `}>Editar</Text>
                        </View>
                    </View>
                </View>
                <View className="flex-1 w-full">
                    <View className="w-full justify-center my-2">
                        <Text className={`${textColor()} ${font('2xl')} font-montserrat-semibold`}>
                            Sua conta
                        </Text>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>

                    <View className="w-full mt-2" style={GAP[8]}>
                        <ButtonEdit 
                            text="Usuário" 
                            textSecunday="@Username" 
                        />

                        <ButtonEdit 
                            text="Nome" 
                            textSecunday="Nome Sobrenome" 
                        />

                        <ButtonEdit 
                            text="E-mail" 
                            textSecunday="email@email.com" 
                        />

                        <ButtonEdit 
                            text="Trocar senha" 
                            textSecunday="" 
                        />

                        <ButtonEdit 
                            text="Sobre você" 
                            textSecunday="" 
                        />

                        <ButtonEdit 
                            text="Cor de perfil" 
                            textSecunday="Verde Escuro"
                            onPress={() => updateHeader(Header.DarkGreen)}
                        />

                        <ButtonEdit 
                            text="Tema" 
                            textSecunday={theme === Theme.Normal ? "Normal" : theme === Theme.Light ? "Light" : "Dark"} 
                            onPress={() => changeTheme()}
                        />
                        
                    </View>
                    </ScrollView>

                </View>


                <View className="">

                </View>
            </View>
    );
};

export default EditPerfilScreen;
