import { useContext, useEffect, useState } from "react";
import cartContext from "../contexts/CartContext";
import { iceCreamRequest, toppingRequest } from "../services/product";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Image,
  Text,
  Select,
  Box,
  VStack,
  HStack,
  Spacer,
  Divider,
  useToast,
} from "@chakra-ui/react";

import AmountInput from "./AmountInput";

function OrderModal({ product, isOpen, closeModal }) {
  const [iceCreamType, setIceCreamType] = useState("SOFTSERVE");
  const [maxIceCreams, setMaxIceCreams] = useState(0);
  const [iceCreamTotal, setIceCreamTotal] = useState(0);
  const [toppings, setToppings] = useState([]);
  const [iceCreams, setIceCreams] = useState([]);

  const toast = useToast();
  const { addItem } = useContext(cartContext);
  useEffect(() => {
    if (product) {
      if (product.type === "CONE" || product.type === "CUP") {
        toppingRequest()
          .then((res) => res.json())
          .then((data) => setToppings(data));

        iceCreamRequest()
          .then((res) => res.json())
          .then((data) => setIceCreams(data));
      }
    } else {
      setToppings([]);
      setIceCreams([]);
      setIceCreamTotal(0);
    }
  }, [product]);

  useEffect(() => {
    if (!product) {
      return;
    }
    setMaxIceCreams(
      iceCreamType === "SOFTSERVE"
        ? product.iceCreamSupport.maxSoft
        : product.iceCreamSupport.maxScoops
    );
  }, [iceCreamType]);

  const handleSelectType = (e) => {
    setIceCreamType(e.target.value);
  };

  const handleIncrementIceCream = (iceCreamId) => {
    if (iceCreamTotal < maxIceCreams) {
      setIceCreams((prev) =>
        prev.map((iceCream) =>
          iceCream.iceCreamId === iceCreamId
            ? { ...iceCream, quantity: (iceCream.quantity || 0) + 1 }
            : iceCream
        )
      );
      setIceCreamTotal(iceCreamTotal + 1);
    }
  };

  const handleIncrementTopping = (toppingId) => {
    setToppings((prev) =>
      prev.map((topping) =>
        topping.toppingId === toppingId
          ? { ...topping, quantity: (topping.quantity || 0) + 1 }
          : topping
      )
    );
  };

  const handleDecrementIceCream = (id) => {
    setIceCreams((prev) =>
      prev.map((iceCream) => {
        if (iceCream.iceCreamId === id && iceCream.quantity > 0) {
          setIceCreamTotal((prev) => prev - 1);
          return { ...iceCream, quantity: iceCream.quantity - 1 };
        }
        return iceCream;
      })
    );
  };

  const handleDecrementTopping = (id) => {
    setToppings((prev) =>
      prev.map((topping) => {
        if (topping.toppingId === id && topping.quantity > 0) {
          return { ...topping, quantity: topping.quantity - 1 };
        }
        return topping;
      })
    );
  };

  const calculatePrice = () => {
    let price = product.basePrice;
    price += iceCreams.reduce((acc, iceCream) => {
      return acc + (iceCream.quantity || 0) * iceCream.basePrice;
    }, 0);
    price += toppings.reduce((acc, topping) => {
      return acc + (topping.quantity || 0) * topping.basePrice;
    }, 0);
    return price;
  };

  const handleAddToCart = () => {
    let price = calculatePrice();
    const cartItem = {
      product: product,
      iceCreams: iceCreams.filter((iceCream) => iceCream.quantity > 0),
      toppings: toppings.filter((topping) => topping.quantity > 0),
      quantity: 1,
      price,
    };
    addItem(cartItem);
    setIceCreamTotal(0);
    toast({
      title: "Item added to cart!",
      description: "Your item was successfully added to cart!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    closeModal();
  };

  if (!product) {
    return null;
  }
  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <ModalOverlay />
      <ModalContent bg="lightgray" maxH={"80vh"} borderBottomRadius={10}>
        <Image
          src={product.imageUrl}
          alt={product.name}
          width="100%"
          height="300px"
          bg="gray"
        />

        <ModalCloseButton />
        <ModalBody overflowY="scroll" p={0}>
          <VStack spacing={4} align="left">
            <Box bg="white" w="100%" p={4} boxShadow="lg">
              <Text fontSize="3xl" color="black">
                {product.name}
              </Text>
              <Text>{product.description}</Text>
              <Text fontWeight="bold">${product.basePrice}</Text>
            </Box>

            <VStack bg="white" p={4} boxShadow={"lg"} spacing={8} align="left">
              <Box>
                <Text fontSize="lg" mb={2}>
                  Choose your ice cream type:
                </Text>
                <Select value={iceCreamType} onChange={handleSelectType}>
                  <option value="SOFTSERVE">Soft-Serve</option>
                  <option value="HARDSCOOPED">Hard-Scooped</option>
                </Select>
              </Box>

              <VStack align="left" w="100%" spacing={2}>
                {iceCreams
                  .filter((iceCream) => iceCream.type === iceCreamType)
                  .map((iceCream, key) => (
                    <>
                      {key !== 0 && <Divider bg="lightgray" />}
                      <HStack
                        key={key}
                        justify="space-between"
                        align="center"
                        w="100%"
                      >
                        <VStack align="left" spacing={0}>
                          <Text fontWeight="500">{iceCream.name}</Text>
                          <Text fontSize={"small"}>${iceCream.basePrice}</Text>
                        </VStack>
                        <Spacer />

                        <AmountInput
                          quantity={iceCream.quantity || 0}
                          onIncrement={() =>
                            handleIncrementIceCream(iceCream.iceCreamId)
                          }
                          onDecrement={() =>
                            handleDecrementIceCream(iceCream.iceCreamId)
                          }
                          disableDecrement={(iceCream.quantity || 0) === 0}
                          disableIncrement={iceCreamTotal >= maxIceCreams}
                        />
                      </HStack>
                    </>
                  ))}
              </VStack>
            </VStack>

            <Box bg="white" p={4} boxShadow="lg">
              <Text>Add toppings to your order</Text>
              <VStack align="left" w="100%" spacing={4}>
                {toppings.map((topping, key) => (
                  <HStack
                    key={key}
                    justify="space-between"
                    align="center"
                    w="100%"
                  >
                    <VStack align="left" spacing={0}>
                      <Text fontWeight="500">{topping.name}</Text>
                      <Text fontSize={"small"}>${topping.basePrice}</Text>
                    </VStack>
                    <Spacer />
                    <AmountInput
                      quantity={topping.quantity || 0}
                      onIncrement={() =>
                        handleIncrementTopping(topping.toppingId)
                      }
                      onDecrement={() =>
                        handleDecrementTopping(topping.toppingId)
                      }
                      disableDecrement={(topping.quantity || 0) === 0}
                    />
                  </HStack>
                ))}
              </VStack>
            </Box>
          </VStack>
        </ModalBody>

        <ModalFooter
          bg="white"
          boxShadow="lg"
          borderTop="1px solid lightgray"
          borderBottomRadius={10}
        >
          <Button colorScheme="blue" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default OrderModal;
