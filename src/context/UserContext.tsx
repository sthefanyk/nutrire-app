import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Theme } from "../enums/Theme";
import { Alert } from "react-native";
import { ProductType } from "../types/ProductType";
import { productsData } from "../data/products";

interface IBagItem {
    productId: string
    qtd: number
}

interface IBag {
    products: IBagItem[]
    total: number
}

interface IFavorites {
    productsIds: string[]
}

interface IUser {
    name: string;
    favorites: IFavorites;
    bag: IBag;
}

interface IUserContext {
    bag: IBag;
    addProductBag: (productId: string, qtd: number) => boolean
    removeProductBag: (productId: string) => boolean
    clearBag: () => void
    addQtdProductBag: (productId: string) => boolean
    removeQtdProductBag: (productId: string) => boolean
    getProductsBag: () => {
        product: ProductType | null;
        qtd: number;
    }[]
}

export const UserContext = createContext<IUserContext>({} as  IUserContext);

export const UserProvider = ({children}: any) => {
    const [bag, setBag] = useState<IBag>({
        products: [],
        total: 0
    });

    const [favorites, setFavorites] = useState<IFavorites>({} as IFavorites);

    useEffect(() => {
        
    }, []);

    const addProductBag = (productId: string, qtd: number): boolean => {
        const product = getProductById(productId);
        if (!product) return false

        const productFiltered = bag.products.filter((item) => item.productId === product.id);

        let updatedBag: IBag;
        
        if (productFiltered.length === 0) { // Não existe na sacola
            const itemBag: IBagItem = {
                productId: product.id,
                qtd
            }

            updatedBag = {
                products: [...bag.products, itemBag],
                total: bag.total + (product.price * qtd),
            };
        }else{
            updatedBag = {
                products: bag.products.map((item) => {
                    if (item.productId === product.id) {
                        item.qtd = item.qtd + qtd
                    }
                    
                    return item
                }),
                total: bag.total + (product.price * product.qtd),
            };
        }
        
        setBag(updatedBag);
        return true
    };

    const addQtdProductBag = (productId: string) => {
        const product = getProductById(productId);
        if (!product) return false

        const updatedProducts: IBagItem[] = bag.products.map((item) => {
            if (item.productId === productId) {
                return { 
                    productId, 
                    qtd: item.qtd + 1
                }
            }

            return item
        });

        const updatedBag: IBag = {
          products: updatedProducts,
          total: bag.total + product.price,
        };
        
        setBag(updatedBag);
        return true
    }

    const removeProductBag = (productId: string) => {
        const product = getProductById(productId);
        if (!product) return false

        const updatedProducts = bag.products.filter((item) => item.productId !== productId);

        const updatedBag: IBag = {
          products: updatedProducts,
          total: bag.total - product.price,
        };
    
        setBag(updatedBag);

        return true
    };

    const removeQtdProductBag = (productId: string) => {
        const product = getProductById(productId);
        if (!product) return false

        const updatedProducts: IBagItem[] = bag.products.map((item) => {
            if (item.productId === productId) {
                return {
                    productId,
                    qtd: item.qtd - 1
                }
            }
            return item;
        });

        
        const filterProducts = updatedProducts.filter((product) => product.qtd > 0);

        
        const updatedBag: IBag = {
            products: filterProducts,
            total: bag.total - product.price,
        };
    
        setBag(updatedBag);
        return true
    };

    const getProductById = (productId: string): ProductType | null => {
        return productsData.find((item) => item.id === productId) || null;
    };

    const getProductsBag = () => {
        const productsConvert = bag.products.map((item) => {
            return {
                product: getProductById(item.productId),
                qtd: item.qtd
            }
        })
        if (productsConvert.length === 0) return []
        return productsConvert;
    }

    const clearBag = () => {
        setBag({
            products: [],
            total: 0,
        });
    }

    return (
        <UserContext.Provider value={{
            bag, 
            addProductBag, 
            removeProductBag,
            clearBag,
            addQtdProductBag,
            removeQtdProductBag,
            getProductsBag
        }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    return useContext(UserContext);
}