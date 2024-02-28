import React from "react";
import { Box, Text, Spacer, HStack, VStack } from "@chakra-ui/react";
import AmountInput from "./AmountInput";

function CartItem({
  cart_item,
  incrementItem = () => {},
  decrementItem = () => {},
  isEditable = true,
}) {
  console.log(cart_item);
  return (
    <HStack>
      <VStack align="left">
        <Text fontSize="l" fontWeight="bold">
          {cart_item.product.name}
        </Text>
        {cart_item.iceCreams?.length > 0 && (
          <Box>
            <Text fontSize="xs" fontWeight="bold">
              Icecreams:
            </Text>
            {cart_item.iceCreams.map((icecream, key) => (
              <Text fontSize="xs" key={key} f>
                {icecream.quantity} x {icecream.name} Icecream ($
                {icecream.basePrice * icecream.quantity})
              </Text>
            ))}
          </Box>
        )}
        {cart_item.toppings?.length > 0 && (
          <Box>
            <Text fontSize="xs" fontWeight="bold">
              Toppings:
            </Text>
            {cart_item.toppings.map((topping, key) => (
              <Text fontSize="xs" key={key}>
                {topping.quantity} x {topping.name} (${topping.basePrice})
              </Text>
            ))}
          </Box>
        )}

        <Text fontSize="medium">${cart_item.price}</Text>
      </VStack>
      <Spacer />

      {isEditable && (
        <AmountInput
          quantity={cart_item.quantity}
          onIncrement={incrementItem}
          onDecrement={decrementItem}
        />
      )}
    </HStack>
  );
}

export default CartItem;
