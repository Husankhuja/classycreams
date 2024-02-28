import { createContext, useState, useEffect } from "react";
import { useDisclosure } from "@chakra-ui/react";
import useLocalStorage from "../utils/useLocalStorage";

const cartContext = createContext();

export default cartContext;

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage("cart", []);
  const [subtotal, setSubtotal] = useState(0);
  const {
    isOpen: isCartOpen,
    onOpen: onCartOpen,
    onClose: onCartClose,
  } = useDisclosure();

  useEffect(() => {
    setSubtotal(calculateSubtotal());
  }, [cart]);

  const addItem = (item) => {
    const id = `item-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    const newItem = { ...item, id: id };
    setCart((prev) => [...prev, newItem]);
  };

  const incrementItem = (itemId) => {
    setCart((prev) =>
      prev.map((cartItem) =>
        cartItem.id === itemId
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  };
  const decrementItem = (itemId) => {
    setCart((prev) =>
      prev
        .map((cartItem) => {
          if (cartItem.id === itemId) {
            return cartItem.quantity > 1
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : null;
          }
          return cartItem;
        })
        .filter((cartItem) => cartItem !== null)
    );
  };

  const removeItem = (itemId) => {
    setCart((prev) => prev.filter((cartItem) => cartItem.id !== itemId));
  };

  const calculateSubtotal = () => {
    const subtotal = cart.reduce((accumulator, item) => {
      return accumulator + item.price * item.quantity;
    }, 0);
    return subtotal;
  };

  const clearCart = () => {
    setCart([]);
  };

  const contextData = {
    cart,
    addItem,
    removeItem,
    clearCart,
    subtotal,
    isCartOpen,
    onCartOpen,
    onCartClose,
    incrementItem,
    decrementItem,
  };

  return (
    <cartContext.Provider value={contextData}>{children}</cartContext.Provider>
  );
};
