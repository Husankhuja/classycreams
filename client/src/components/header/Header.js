import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import {
  Box,
  Flex,
  Text,
  Button,
  Link as ChakraLink,
  Spacer,
  HStack,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, Icon } from "@chakra-ui/icons";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import ControlBar from "./ControlBar";
import Cart from "../Cart";

function Header() {
  const { user, logout } = useContext(AuthContext);
  const {
    isOpen: isMenuOpen,
    onOpen: onMenuOpen,
    onClose: onMenuClose,
  } = useDisclosure();

  return (
    <Box
      as="header"
      w="100%"
      color={"black"}
      bg={"white"}
      padding="10px"
      boxShadow="lg"
      zIndex={2}
      position="relative"
    >
      <Box maxW="1200px" margin="0 auto">
        <Flex justify="space_between" align="center" py="10px">
          <IconButton
            display={{ md: "block", base: "block", lg: "none" }}
            onClick={onMenuOpen}
            icon={<HamburgerIcon boxSize="8" color={"black"} mr="8" />}
          />
          <Text
            fontSize={{ base: "2xl", sm: "3xl", lg: "5xl" }}
            fontWeight="bold"
            fontFamily="satisfy"
          >
            Classy Creams
          </Text>
          <Spacer />
          <NavBar isOpen={isMenuOpen} onClose={onMenuClose} />

          <Spacer />
          <ControlBar user={user} />
          <Cart />
        </Flex>
      </Box>
    </Box>
  );
}

export default Header;
