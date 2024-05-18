import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Link as ChakraLink,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

import { FaUser } from "react-icons/fa";
import { IconButton } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";

function ProfileMenu() {
  const { voluntaryLogout } = useContext(AuthContext);
  return (
    <Menu>
      <MenuButton as={Button} p={0} mr={4}>
        <IconButton icon={<Icon as={FaUser} boxSize={6} color={"black"} />} />
      </MenuButton>
      <MenuList w="50px" bg="white">
        <ChakraLink as={Link} to="/account">
          <MenuItem bg="white">My Account</MenuItem>
        </ChakraLink>
        <ChakraLink as={Link} to="/orders">
          <MenuItem bg="white">My Orders </MenuItem>
        </ChakraLink>
        <MenuItem bg="white" onClick={voluntaryLogout}>
          <Button w="100%">Logout</Button>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default ProfileMenu;
