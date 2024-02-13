import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Theme } from "../enums/Theme";
import { Alert } from "react-native";
import { ProductType } from "../types/ProductType";
import { productsData } from "../data/products";

interface IBagItem {
    product: ProductType
    qtd: number
}

export interface IBag {
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
    bag: IBag
    favorites: IFavorites
    addProductBag: (product: ProductType, qtd: number) => boolean
    removeProductBag: (product: ProductType) => boolean
    clearBag: () => void
    addQtdProductBag: (product: ProductType) => boolean
    removeQtdProductBag: (product: ProductType) => boolean
    getProductsBag: () => {
        product: ProductType | null;
        qtd: number;
    }[]
    AddFavorite: (productId: string) => boolean
    RemoveFavorite:(productId: string) => boolean
    isFav: (productId: string) => boolean
    getFavsProducts: () => (ProductType | null)[]
}

export const UserContext = createContext<IUserContext>({} as  IUserContext);

export const UserProvider = ({children}: any) => {
    const [bag, setBag] = useState<IBag>({
        products: [],
        total: 0
    });

    const [favorites, setFavorites] = useState<IFavorites>({
        productsIds: []
    });

    // useEffect(() => {
        
    // }, []);

    const addProductBag = (product: ProductType, qtd: number): boolean => {
        // const product = getProductById(productId);
        // if (!product) return false

        const productFiltered = bag.products.filter((item) => item.product.id === product.id);

        let updatedBag: IBag;
        
        if (productFiltered.length === 0) { // Não existe na sacola
            const itemBag: IBagItem = {
                product,
                qtd
            }

            updatedBag = {
                products: [...bag.products, itemBag],
                total: bag.total + (product.price * qtd),
            };
        }else{
            updatedBag = {
                products: bag.products.map((item) => {
                    if (item.product.id === product.id) {
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

    const addQtdProductBag = (product: ProductType) => {
        // const product = getProductById(productId);
        // if (!product) return false

        const updatedProducts: IBagItem[] = bag.products.map((item) => {
            if (item.product.id === product.id) {
                return { 
                    product, 
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

    const removeProductBag = (product: ProductType) => {
        // const product = getProductById(productId);
        // if (!product) return false

        const updatedProducts = bag.products.filter((item) => item.product.id !== product.id);

        const updatedBag: IBag = {
          products: updatedProducts,
          total: bag.total - product.price,
        };

        if (updatedBag.products.length === 0) {
            clearBag();
        } else {
            setBag(updatedBag);
        }
    

        return true
    };

    const removeQtdProductBag = (product: ProductType) => {
        // const product = getProductById(productId);
        // if (!product) return false

        const updatedProducts: IBagItem[] = bag.products.map((item) => {
            if (item.product.id === product.id) {
                return {
                    product,
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
    
        if (updatedBag.products.length === 0) {
            clearBag();
        } else {
            setBag(updatedBag);
        }

        return true
    };

    const getProductById = (productId: string): ProductType | null => {
        return productsData.find((item) => item.id === productId) || null;
    };

    const getProductsBag = () => {
        const productsConvert = bag.products.map((item) => {
            return {
                product: getProductById(item.product.id),
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

    const AddFavorite = (productId: string) => {
        const product = getProductById(productId);
        if (!product) return false

        const favsFiltered = favorites.productsIds.filter((id) => id === product.id);
        if (favsFiltered.length !== 0) return false;

        setFavorites({
            productsIds: [...favorites.productsIds, productId],
        });
        return true
    }

    const RemoveFavorite = (productId: string) => {
        const product = getProductById(productId);
        if (!product) return false

        const favsFiltered = favorites.productsIds.filter((id) => id !== productId);
    
        setFavorites({productsIds: favsFiltered});

        return true
    }

    const isFav = (productId: string) => {
        const fav = favorites.productsIds.find((id) => id === productId)
        return !!fav
    }

    const getFavsProducts = () => {
        const productsConvert = favorites.productsIds.map((id) => {
            return getProductById(id)
        })

        if (productsConvert.length === 0) return []
        return productsConvert;
    }

    return (
        <UserContext.Provider value={{
            bag, 
            favorites,
            addProductBag, 
            removeProductBag,
            clearBag,
            addQtdProductBag,
            removeQtdProductBag,
            getProductsBag,
            AddFavorite,
            RemoveFavorite,
            isFav,
            getFavsProducts
        }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    return useContext(UserContext);
}