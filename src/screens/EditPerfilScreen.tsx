import {
    ActivityIndicator,
    Button,
    Image,
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
import { StatusBar } from "expo-status-bar";
import { COLORS } from "../design/Colors";
import HeaderPerfil from "../assets/groups/HeaderPerfil";
import IEdit from "../assets/icons/IEdit";
import IArrowNext from "../assets/icons/IArrowNext";
import GAP from "../design/gap";
import ButtonPerfil from "../components/ButtonPerfil";
import ILogout from "../assets/icons/ILogout";
import IBag from "../assets/icons/IBag";
import IConfig from "../assets/icons/IConfig";
import IPrivacity from "../assets/icons/IPrivacity";
import IFav from "../assets/icons/IFav";
import ButtonEdit from "../components/ButtonEdit";
import IEditSmall from "../assets/icons/IEditSmall";

const EditPerfilScreen = () => {
    const { logout, loading, userData } = useAuth();
    const { theme, updateTheme } = useTheme();
    const { screenTheme, textColor, font, textColorHex, screenThemeHex } = useDesign();


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

    const getButtonColor = () => {
        if(theme === Theme.Normal) return "bg-light"
        if(theme === Theme.Light) return "bg-green_100"
        if(theme === Theme.Dark) return "bg-dark_search"
    }

    return (
        <TouchableWithoutFeedback onPress={() => changeTheme()}>
            <View
                className={`flex-1 w-full px-4 items-center ${screenTheme()} overflow-hidden`}
                style={{backgroundColor: screenThemeHex()}}
            >
                <View className="w-full items-center justify-end h-[190]">
                    <HeaderPerfil className="absolute -top-[60%]"/>

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
                        />
                    </View>
                    </ScrollView>

                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default EditPerfilScreen;
