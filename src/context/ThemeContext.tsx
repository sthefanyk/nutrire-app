import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemeType } from "../types/ThemeType";
import { Theme } from "../enums/Theme";
import { Alert } from "react-native";

export const ThemeContext = createContext<ThemeType>({} as  ThemeType);

export const ThemeProvider = ({children}: any) => {
    const [theme, setTheme] = useState(Theme.Normal);

    useEffect(() => {
        ThemeVerify();
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
    

    return (
        <ThemeContext.Provider value={{theme, updateTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    return useContext(ThemeContext);
}