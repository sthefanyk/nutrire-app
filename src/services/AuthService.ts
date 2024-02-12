import { TypeUserEnum } from "../enums/TypeUserEnum"
import { ApiDataType } from "../types/ApiDataType"
import AsyncStorage from '@react-native-async-storage/async-storage'

const mockedApiDataCliente: ApiDataType = {
    token: {
        token: 'JWTTOKEN_CLIENTE',
        refresh: 'JWTREFRESH_CLIENTE'
    },
    userData: {
        name: 'Cliente',
        email: 'cliente@nutrire.com',
        photo: 'https://images.unsplash.com/photo-1507152832244-10d45c7eda57?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: TypeUserEnum.Cliente
    }
}

const mockedApiDataVendedor: ApiDataType = {
    token: {
        token: 'JWTTOKEN_VENDEDOR',
        refresh: 'JWTREFRESH_VENDEDOR'
    },
    userData: {
        name: 'Vendedor',
        email: 'vendedor@nutrire.com',
        photo: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: TypeUserEnum.Vendedor
    }
}

export const Signin = async (email:string, password:string) => {
    return new Promise((resolve, reject) => {
        setTimeout( async () => {
            if (email.trim() === 'cliente' && password.trim() === 'nutrire') {
                resolve(mockedApiDataCliente)
            } else if (email.trim() === 'vendedor' && password.trim() === 'nutrire'){
                resolve(mockedApiDataVendedor)
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
            if (token === "JWTTOKEN_CLIENTE") {
                resolve(mockedApiDataCliente);
            } else if(token === "JWTTOKEN_VENDEDOR") {
                resolve(mockedApiDataVendedor);
            } else {
                reject(new Error('Token expirado'))
            }
        }, 1000)
    })
}