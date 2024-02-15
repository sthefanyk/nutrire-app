import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemeType } from "../types/ThemeType";
import { Theme } from "../enums/Theme";
import { Alert } from "react-native";
import { Header } from "../enums/Header";

export const ThemeContext = createContext<ThemeType>({} as  ThemeType);

export const ThemeProvider = ({children}: any) => {
    const [theme, setTheme] = useState(Theme.Normal);
    const [header, setHeader] = useState(Header.DarkGreen);

    useEffect(() => {
        ThemeVerify();
        HeaderVerify();
    }, [])

    const ThemeVerify = async () => {
        try {
            const t: any = await AsyncStorage.getItem('@theme');

            console.log(t)

            if (t === "0") setTheme(Theme.Normal);
            if (t === "1") setTheme(Theme.Light);
            if (t === "2") setTheme(Theme.Dark);
            
        } catch (error) {
            setTheme(Theme.Normal);

            if (error instanceof Error) {
                Alert.alert(error.message);
            } else {
                console.error("Erro desconhecido:", error);
            }
        } 
    }

    const HeaderVerify = async () => {
        try {
            const h: any = await AsyncStorage.getItem('@header');

            console.log(h)

            if (h === "0") setHeader(Header.LightGreen);
            if (h === "1") setHeader(Header.DarkGreen);
            if (h === "2") setHeader(Header.LightPurple);
            if (h === "3") setHeader(Header.DarkPurple);
            if (h === "4") setHeader(Header.LightBrown);
            if (h === "5") setHeader(Header.DarkBrown);
            
        } catch (error) {
            setHeader(Header.DarkGreen);

            if (error instanceof Error) {
                Alert.alert(error.message);
            } else {
                console.error("Erro desconhecido:", error);
            }
        } 
    }

    const updateTheme = async (newTheme:Theme) => {
        try {
            await AsyncStorage.setItem('@theme', newTheme.toString());
            setTheme(newTheme);
        } catch (error) {
            setTheme(Theme.Normal);

            if (error instanceof Error) {
                Alert.alert(error.message);
            } else {
                console.error("Erro desconhecido:", error);
            }
        }
    }

    const updateHeader = async (newHeader: Header) => {
        console.log('aqui')
        try {
            await AsyncStorage.setItem('@header', newHeader.toString());
            setHeader(newHeader);
        } catch (error) {
            setHeader(Header.DarkGreen);

            if (error instanceof Error) {
                Alert.alert(error.message);
            } else {
                console.error("Erro desconhecido:", error);
            }
        }
    }
    

    return (
        <ThemeContext.Provider value={{theme, updateTheme, header, updateHeader }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    return useContext(ThemeContext);
}