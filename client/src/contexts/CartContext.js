import { createContext, useState, useEffect } from "react";
import { useDisclosure } from "@chakra-ui/react";

const cartContext = createContext();

export default cartContext;

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isMounted, setIsMounted] = useState(false);
  const [subtotal, setSubtotal] = useState(0);
  const {
    isOpen: isCartOpen,
    onOpen: onCartOpen,
    onClose: onCartClose,
  } = useDisclosure();

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
    console.log("cart changed", cart);

    if (!isMounted) return;
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart, isMounted]);

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
    let price = 0;
    cart.forEach((item) => {
      price += item.price * item.quantity;
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
