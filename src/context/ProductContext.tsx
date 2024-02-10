import { createContext, useContext, useState } from "react";
import { ProductType } from "../types/ProductType";
import { BagType } from "../types/BagType";

interface Props {
    products: ProductType[]
    productSelected: ProductType
    setProductSelected: (p: ProductType) => void
    bag: BagType
    addProductBag: () => void
    clearBag: () => void
    removeProductBag: (productId: string) => void
    addQtdProductBag: (productId: string) => void
    removeQtdBag: (productId: string) => void
    getProductsBag: () => ProductType[]
}

export const ProductContext = createContext<Props>({} as  Props);

const data: ProductType[] = [
    { id: "id1", name: "Batata", price: 9.99, reserva: true, qtd: 0 },
    { id: "id2", name: "Cenoura", price: 2.00, reserva: false, qtd: 0 },
    { id: "id3", name: "Maça", price: 4.00, reserva: false, qtd: 0 },
    { id: "id4", name: "Tomate", price: 8.50, reserva: true, qtd: 0 },
    { id: "id5", name: "Abacate", price: 8.00, reserva: true, qtd: 0 },
    { id: "id6", name: "Uva", price: 10.00, reserva: false, qtd: 0 },
];

export const ProductProvider = ({children}: any) => {
    const [products, setProducts] = useState<ProductType[]>(data);
    const [bag, setBag] = useState<BagType>({
        products: [],
        qtd: 0,
        total: 0,
    });
    const [productSelected, setProductSelected] = useState<ProductType>({} as ProductType);

    const addProductBag = () => {
        const product = bag.products.filter((product) => product.id === productSelected.id);

        let updatedBag: BagType;
        
        if (product.length === 0) { 
            updatedBag = {
                products: [...bag.products, productSelected],
                qtd: bag.qtd + 1,
                total: bag.total + (productSelected.price * productSelected.qtd),
            };
        }else{
            updatedBag = {
                products: bag.products.map((product) => {
                    if (product.id === productSelected.id) {
                        product.qtd = product.qtd + productSelected.qtd
                    }
                    
                    return product
                }),
                qtd: bag.qtd,
                total: bag.total + (productSelected.price * productSelected.qtd),
            };
        }
        
        setBag(updatedBag);
    }

    const addQtdProductBag = (productId: string) => {
        const updatedProducts = bag.products.map((product) => {
            if (product.id === productId) {
                return { ...product, qtd: product.qtd + 1}
            }

            return product
        });

        const updatedBag: BagType = {
          products: updatedProducts,
          qtd: updatedProducts.length,
          total: updatedProducts.reduce((sum, product) => sum + product.price * product.qtd, 0),
        };
        
        setBag(updatedBag);
    }

    const getProductsBag = (): ProductType[] => {
        return bag.products
    }

    const removeQtdBag = (productId: string) => {
        const updatedProducts = bag.products.map((product) => {
            if (product.id === productId) {
                const updatedQuantity = Math.max(product.qtd - 1, 0);
                return { ...product, qtd: updatedQuantity };
            }
            return product;
        });

        
        const filterProducts = updatedProducts.filter((product) => product.qtd > 0);

        
        const updatedBag: BagType = {
            products: filterProducts,
            qtd: filterProducts.length,
            total: filterProducts.reduce((sum, product) => sum + product.price * product.qtd, 0),
        };
    
        setBag(updatedBag);
    };

    const clearBag = () => {
        setBag({
            products: [],
            qtd: 0,
            total: 0,
        });
    }

    const removeProductBag = (productId: string) => {
        const updatedProducts = bag.products.filter((product) => product.id !== productId);
        const updatedBag: BagType = {
          products: updatedProducts,
          qtd: updatedProducts.length,
          total: updatedProducts.reduce((sum, product) => sum + product.price, 0),
        };
    
        setBag(updatedBag);
      };

    return (
        <ProductContext.Provider value={{ 
            products, 
            productSelected, 
            setProductSelected, 
            bag, 
            addProductBag,
            clearBag,
            removeProductBag,
            addQtdProductBag,
            removeQtdBag,
            getProductsBag
        }}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProduct = () => {
    return useContext(ProductContext);
}