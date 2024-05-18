import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Link as ChakraLink,
  Flex,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

function NavBar({ isOpen, onOpen, onClose }) {
  return (
    <>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="white" color="black">
          <DrawerCloseButton />
          <DrawerBody>
            <Flex
              direction="column"
              align="center"
              justify="center"
              height="100%"
              gap={10}
            >
              <ChakraLink as={Link} to="/">
                Home
              </ChakraLink>
              <ChakraLink as={Link} to="/about">
                About Us
              </ChakraLink>
              <ChakraLink as={Link} to="/products">
                Products
              </ChakraLink>
              <ChakraLink as={Link} to="/toppings">
                Toppings
              </ChakraLink>
              <ChakraLink as={Link} to="/ice-creams">
                IceCreams
              </ChakraLink>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Flex
        as="nav"
        justify="space-between"
        align="center"
        maxW="600px"
        m="0 auto"
        fontWeight={500}
        display={{ base: "none", lg: "block" }}
      >
        <ChakraLink as={Link} to="/" mx={2}>
          Home
        </ChakraLink>
        <ChakraLink as={Link} to="/about" mx={2}>
          About Us
        </ChakraLink>
        <ChakraLink as={Link} to="/products" mx={2}>
          Products
        </ChakraLink>
        <ChakraLink as={Link} to="/toppings" mx={2}>
          Toppings
        </ChakraLink>
        <ChakraLink as={Link} to="/ice-creams" mx={2}>
          IceCreams
        </ChakraLink>
      </Flex>
    </>
  );
}

export default NavBar;
