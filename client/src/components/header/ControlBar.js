import { useContext } from "react";

import { HStack, IconButton, Button, Circle, Box } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Icon } from "@chakra-ui/react";
import ProfileMenu from "./ProfileMenu";

import cartContext from "../../contexts/CartContext";

function ControlBar({ user }) {
  const { onCartOpen, cart } = useContext(cartContext);

  return (
    <HStack>
      <Box pos="relative">
        <IconButton
          icon={<Icon as={FaShoppingCart} boxSize={6} color={"black"} />}
          mr={4}
          onClick={onCartOpen}
        />
        <Circle
          bg="red"
          color="white"
          width="20px"
          height="20px"
          pos="absolute"
          top="15px"
          right="10px"
          onClick={onCartOpen}
          cursor="pointer"
        >
          {cart.length}
        </Circle>
      </Box>

      {!user ? (
        <Button
          as={Link}
          to="/login"
          colorScheme="black"
          variant="outline"
          mr={4}
        >
          Login
        </Button>
      ) : (
        <ProfileMenu />
      )}

      <Button as={Link} to="/order" colorScheme="black" variant="outline">
        Order
      </Button>
    </HStack>
  );
}

export default ControlBar;
