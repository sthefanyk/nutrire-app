import { ApiDataType } from "../types/ApiDataType"
import AsyncStorage from '@react-native-async-storage/async-storage'

const mockedApiData: ApiDataType = {
    token: {
        token: 'JWTTOKEN',
        refresh: 'JWTREFRESH'
    },
    userData: {
        name: 'Sthe',
        email: 'devsthe@dev.com',
        photo: 'https://avatars.githubusercontent.com/u/60948636?v=4'
    }
}

export const Signin = async (email:string, password:string) => {
    return new Promise((resolve, reject) => {
        setTimeout( async () => {
            if (email === 'nutrire' && password === 'nutrire') {
                resolve(mockedApiData)
            } else {
                reject(new Error('Credenciais inválidas'))
            }
        }, 1000)
    })
}

export const Signout = async () => {
    return new Promise((resolve) => {
        setTimeout( async () => {
            // EXPIROU O TOKEN NA API

            await AsyncStorage.removeItem('@token');
            resolve(null)
        }, 1000)
    })
}

export const GetUser = async (token:string) => {
    if (!token) return null

    // console.log("aqui", token)

    return new Promise((resolve, reject) => {
        setTimeout( async () => {
            if (token === "JWTTOKEN") {
                resolve(mockedApiData);
            } else {
                reject(new Error('Token expirado'))
            }
        }, 1000)
    })
}