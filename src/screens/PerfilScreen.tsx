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
import { useAuth } from "../context/auth";
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

const PerfilScreen = () => {
    const { logout, loading, userData } = useAuth();
    const { theme, updateTheme } = useTheme();
    const { screenTheme, textColor, font, textColorHex } = useDesign();


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
                className={`flex-1 w-full px-4 items-center ${screenTheme('bg')} overflow-hidden`}
            >
                {theme === Theme.Dark ? (
                    <StatusBar backgroundColor="transparent" style="light" />
                ) : (
                    <StatusBar backgroundColor="transparent" />
                )}
                <View className="w-full items-center justify-end h-[190]">
                    <HeaderPerfil className="absolute -top-[60%]"/>
                    <Image 
                        source={{uri: userData.photo }}
                        className="h-32 w-32 rounded-full"
                    />
                </View>
                <View className="flex-1 w-full">
                    <View className="w-full justify-center items-center my-2">
                        <Text className={`${textColor()} ${font('xl')} font-montserrat-semibold`}>{userData.name}</Text>
                        <Text className={`${textColor()} ${font('base')} font-montserrat-regular`}>@username</Text>
                        <Text className={`${textColor()} ${font('base')} font-montserrat-regular mt-4`}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </Text>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>

                    <View className="w-full mt-2" style={GAP[8]}>
                        <ButtonPerfil text="Editar conta">
                            <IEdit color={textColorHex()}/>
                        </ButtonPerfil>
                        <ButtonPerfil text="Minhas encomendas">
                            <IBag color={textColorHex()}/>
                        </ButtonPerfil>
                        <ButtonPerfil text="Favoritos">
                            <IFav color={textColorHex()}/>
                        </ButtonPerfil>
                        <ButtonPerfil text="Configuração de Privacidade">
                            <IPrivacity color={textColorHex()}/>
                        </ButtonPerfil>
                        <ButtonPerfil text="Configuração">
                            <IConfig color={textColorHex()}/>
                        </ButtonPerfil>

                        {loading ? (
                            <ActivityIndicator size="large" color={COLORS.green_300} />
                            ) : (
                                <ButtonPerfil text="Sair" onPress={() => logout()}>
                                <ILogout color={textColorHex()}/>
                            </ButtonPerfil>
                        )}
                    </View>
                    </ScrollView>

                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default PerfilScreen;
