import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { placeOrderRequest } from "../services/order";
import cartContext from "../contexts/CartContext";
import UserLayout from "./layouts/UserLayout";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  NumberInput,
  NumberInputField,
  Grid,
  GridItem,
  Heading,
  Text,
  useToast,
  Container,
  HStack,
  Spacer,
  VStack,
  Divider,
} from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";

import { Link } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import CartItem from "../components/CartItem";

const CheckoutPage = () => {
  const { cart, clearCart, subtotal } = useContext(cartContext);
  const [address, setAddress] = useState("");
  const [isDelivery, setIsDelivery] = useState(true);
  const [tip, setTip] = useState(0);
  const navigate = useNavigate();
  const toast = useToast();

  const tax = subtotal * 0.07;
  const deliveryFee = isDelivery ? 5 : 0;
  const total = subtotal + tax + deliveryFee + tip;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const orderItems = cart.map((cartItem) => {
      const { product, iceCreams, toppings } = cartItem;
      const iceCreamIds = iceCreams.flatMap((iceCream) => {
        const ids = [];
        for (let i = 0; i < iceCream.quantity; i++) {
          ids.push(iceCream.iceCreamId);
        }
        return ids;
      });
      const toppingIds = toppings.map((topping) => topping.toppingId);
      return {
        productId: product.productId,
        iceCreamIds,
        toppingIds,
        quantity: cartItem.quantity,
      };
    });
    const checkoutData = {
      address,
      isDelivery,
      tip,
      orderItems,
    };

    console.log(checkoutData);
    placeOrderRequest(checkoutData).then((res) => {
      if (res.ok) {
        clearCart();
        toast({
          title: "Order placed",
          description: "Your order has been placed successfully!",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        navigate("/");
      } else {
        toast({
          title: "Error",
          description: "Something went wrong",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    });
  };

  return (
    <UserLayout>
      <VStack w="100%" maxW="1200px" py={8} mx="auto">
        <HStack w="100%" mx="auto" px={8}>
          <ChakraLink as={Link} to="/order" flex={1}>
            <HStack align="center">
              <ChevronLeftIcon />
              <Text>Continue Shopping</Text>
            </HStack>
          </ChakraLink>
          <Heading
            as="h1"
            fontFamily="satisfy"
            justifySelf="center"
            fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
            w="max-content"
            textAlign={"center"}
            flex={2}
          >
            Classy Creams
          </Heading>
          <Spacer flex={1} />
        </HStack>
        <Grid
          p={8}
          gap={4}
          minH="100vh"
          mx={"auto"}
          w="100%"
          maxW={"1200px"}
          templateAreas={{
            base: `"items" "summary" "checkout"`,
            lg: `"checkout summary" "checkout items"`,
          }}
          templateColumns={{ base: "1fr", lg: "1fr auto" }}
          templateRows={{ base: "auto auto 1fr", lg: "auto 1fr" }}
        >
          <GridItem area="checkout">
            <Container
              maxW="100%"
              mr={{ base: "auto", lg: "0" }}
              boxShadow={"lg"}
              p={5}
            >
              <form onSubmit={handleSubmit} style={{ height: "100%" }}>
                <VStack align="left" h="100%">
                  <Heading as="h2" mb="4" fontSize="3xl">
                    Checkout
                  </Heading>

                  <Heading as="h4" fontSize="L" mb="4">
                    Delivery Details
                  </Heading>
                  <FormControl
                    id="isDelivery"
                    mb="4"
                    display="flex"
                    alignItems="center"
                  >
                    <FormLabel mb="0">Delivery:</FormLabel>
                    <Checkbox
                      isChecked={isDelivery}
                      onChange={(e) => setIsDelivery(e.target.checked)}
                    />
                  </FormControl>
                  <FormControl id="address" mb="4">
                    <FormLabel>Address:</FormLabel>
                    <Input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </FormControl>

                  <Heading as="h4" fontSize="L" mb="4">
                    Payment Details
                  </Heading>
                  <FormControl id="tip" mb="4">
                    <FormLabel>Tip:</FormLabel>
                    <NumberInput
                      min={0}
                      value={tip}
                      onChange={(valueString) => setTip(Number(valueString))}
                    >
                      <NumberInputField id="tip" />
                    </NumberInput>
                  </FormControl>
                  <Spacer />
                  <Button type="submit" colorScheme="blue">
                    Place Order
                  </Button>
                </VStack>
              </form>
            </Container>
          </GridItem>

          <GridItem area="items">
            <Container
              boxShadow={"lg"}
              p={5}
              ml={{ base: "auto", lg: "0" }}
              minW={{ base: "100%", lg: "400px" }}
            >
              <Accordion allowToggle>
                <AccordionItem>
                  <AccordionButton>
                    <Heading as="h3" fontSize="2xl" mb={2}>
                      Your Items
                    </Heading>
                    <Spacer />
                    <AccordionIcon fontSize="2xl" />
                  </AccordionButton>
                  <AccordionPanel>
                    {cart.map((cart_item, key) => (
                      <>
                        {key !== 0 && <Divider bg="lightgray" />}
                        <CartItem
                          key={key}
                          cart_item={cart_item}
                          isEditable={false}
                        />
                      </>
                    ))}
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Container>
          </GridItem>

          <GridItem area="summary">
            <Container
              boxShadow={"lg"}
              p={5}
              ml={{ base: "auto", lg: "0" }}
              minW={{ base: "100%", lg: "400px" }}
            >
              <Heading as="h3" fontSize="2xl" mb={2}>
                Order Summary
              </Heading>
              <Grid templateColumns={"1fr auto"}>
                <Text>Subtotal:</Text>
                <Text>${subtotal.toFixed(2)}</Text>
                <Text>Delivery:</Text>
                <Text>${deliveryFee.toFixed(2)}</Text>
                <Text>Tax:</Text>
                <Text>${tax.toFixed(2)}</Text>
                <Text>Tip:</Text>
                <Text>${tip.toFixed(2)}</Text>
                <Text>Total:</Text>
                <Text>${total.toFixed(2)}</Text>
              </Grid>
            </Container>
          </GridItem>
        </Grid>
      </VStack>
    </UserLayout>
  );
};

export default CheckoutPage;
