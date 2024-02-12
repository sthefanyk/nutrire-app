import { createContext, useContext, useEffect, useState } from "react";
import { AuthType } from "../types/AuthType";
import { UserDataType } from "../types/UserDataType";
import { TokenType } from "../types/TokenType";
import { GetUser, Signin, Signout } from "../services/AuthService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { ApiDataType } from "../types/ApiDataType";

export const AuthContext = createContext<AuthType>({} as  AuthType);

export const AuthProvider = ({children}: any) => {
    const [loading, setLoading] = useState(false);
    const [globalLoading, setGlobalLoading] = useState(false);
    const [userData, setUserData] = useState<UserDataType>({} as UserDataType);
    const [token, setToken] = useState<TokenType>({} as TokenType);

    useEffect(() => {
        authVerify();
    }, [])

    const authVerify = async () => {
        setGlobalLoading(true);
        try {
            const token: any = await AsyncStorage.getItem('@token');
            const data: any = await GetUser(token);

            console.log(token)

            if (data) {  
                setUserData(data.userData);
                setToken(data.token);
            }
            

        } catch (error) {
            setUserData({} as UserDataType);
            setToken({} as TokenType);

            if (error instanceof Error) {
                Alert.alert(error.message);
            } else {
                console.error("Erro desconhecido:", error);
            }
        } finally {
            setGlobalLoading(false);
        }
    }

    const login = async (email:string, password:string) => {
        setLoading(true);
        try {
            const data: any = await Signin(email, password);
            console.log(data)
            await AsyncStorage.setItem('@token', data?.token.token);

            setUserData(data.userData);
            setToken(data.token);
        } catch (error) {
            setUserData({} as UserDataType);
            setToken({} as TokenType);

            if (error instanceof Error) {
                Alert.alert(error.message);
            } else {
                console.error("Erro desconhecido:", error);
            }
        } finally {
            setLoading(false);
        }
    }

    const logout = async () => {
        setLoading(true);
        try {
            await Signout();

            setUserData({} as UserDataType);
            setToken({} as TokenType);
        } catch {
            Alert.alert('Erro ao deslogar');
        } finally {
            setLoading(false);
        }
    }
    

    return (
        <AuthContext.Provider value={{loading, globalLoading, userData, token, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}