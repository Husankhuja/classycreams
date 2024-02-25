import { createContext, useState, useEffect } from "react";

const cartContext = createContext();

export default cartContext

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [isMounted, setIsMounted] = useState(false);
    const [subtotal, setSubtotal] = useState(0);

    useEffect(() => {
        const cart = localStorage.getItem("cart");
        if (cart?.length > 0) {
            setCart(JSON.parse(cart));
        }
        setIsMounted(true);
    }, []);

    useEffect(() => {
        setSubtotal(calculateSubtotal());
    }, [cart]);

    useEffect(() => {
        if (!isMounted) return;
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart, isMounted]);

    const addItem = (item) => {
        setCart(prev => [...prev, item]);
      };

    const removeItem = (item) => {
        setCart(prev => prev.filter((cartItem) => cartItem !== item));
    };

    const calculateSubtotal = () => {
        let price = 0;
        cart.forEach((item) => {
            price += item.price;
        });
        return price;
    };

    const clearCart = () => {
        setCart([]);
    };

    const contextData = {
        cart,
        addItem,
        removeItem,
        clearCart,
        subtotal
    };

    return (
        <cartContext.Provider value={contextData}>
            {children}
        </cartContext.Provider>
    )
}