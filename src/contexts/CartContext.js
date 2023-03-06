import { createContext, useState, useEffect } from "react";

export const cartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const cart = localStorage.getItem("cart");
        if (cart) {
            setCart(JSON.parse(cart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addItem = (item) => {
        setCart(prev => [...prev, item]);
      };

    const removeItem = (item) => {
        setCart(prev => prev.filter((cartItem) => cartItem !== item));
    };

    const clearCart = () => {
        setCart([]);
    };

    const contextData = {
        cart,
        addItem,
        removeItem,
        clearCart,
    };

    return (
        <cartContext.Provider value={contextData}>
            {children}
        </cartContext.Provider>
    )
}