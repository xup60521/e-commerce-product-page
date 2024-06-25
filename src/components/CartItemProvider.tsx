import { type CartItem, getLocalStorageItem } from "@/utils";
import { createContext, useContext, useState } from "react";
import { unknown } from "zod";

const cartContext = createContext({
    cartItems: [] as CartItem[],
    setCartItems: unknown as React.Dispatch<React.SetStateAction<CartItem[]>>,
});

export function CartItemProvider({ children }: { children: React.ReactNode }) {
    const [cartItems, setCartItems] = useState(() => {
        const { success, data } = getLocalStorageItem();
        if (success && data) {
            return [...data];
        }
        return [];
    });
    return (
        <cartContext.Provider value={{ cartItems, setCartItems }}>
            {children}
        </cartContext.Provider>
    );
}

export const useCartItem = () =>
    [
        useContext(cartContext).cartItems,
        useContext(cartContext).setCartItems,
    ] as [CartItem[], React.Dispatch<React.SetStateAction<CartItem[]>>];
