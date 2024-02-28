import React, { useContext } from "react";
import { Link } from "react-router-dom";
import cartContext from "../contexts/CartContext";
import CartItem from "./CartItem";

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerFooter,
  DrawerCloseButton,
  Text,
  Button,
  HStack,
  VStack,
  Spacer,
  Divider,
} from "@chakra-ui/react";

function Cart() {
  const {
    cart,
    removeItem,
    clearCart,
    subtotal,
    isCartOpen,
    onCartClose,
    incrementItem,
    decrementItem,
  } = useContext(cartContext);
  // Render the cart using the cart data and functions
  return (
    <Drawer isOpen={isCartOpen} placement="right" onClose={onCartClose}>
      <DrawerOverlay />
      <DrawerContent bg="white" color="black">
        <DrawerCloseButton />
        <DrawerHeader>Your Cart</DrawerHeader>
        <DrawerBody overflowy="scroll">
          <VStack align="left" h="100%">
            {cart.length === 0 ? (
              <Text>Your cart is empty.</Text>
            ) : (
              cart.map((cart_item, key) => (
                <>
                  {key !== 0 && <Divider bg="lightgray" />}
                  <CartItem
                    key={cart_item.id}
                    cart_item={cart_item}
                    removeItem={() => removeItem(cart_item.id)}
                    incrementItem={() => incrementItem(cart_item.id)}
                    decrementItem={() => decrementItem(cart_item.id)}
                  />
                </>
              ))
            )}
            <Spacer />
            <Divider bg="lightgray" />
            <HStack justify="space-between" w="100%">
              <Text fontWeight="500">Subtotal: </Text>
              <Text fontWeight="500">${subtotal}</Text>
            </HStack>
          </VStack>
        </DrawerBody>
        <DrawerFooter>
          <HStack justify="space-between" w="100%" mb="20px">
            <Button
              w="45%"
              as={Link}
              to="/checkout"
              colorScheme="black"
              variant="outline"
            >
              Checkout
            </Button>
            <Button
              w="45%"
              onClick={clearCart}
              colorScheme="black"
              variant="outline"
            >
              Clear Cart
            </Button>
          </HStack>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default Cart;
