import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
} from "@chakra-ui/react";

import { FaUser } from "react-icons/fa";
import { IconButton } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";

function ProfileMenu() {
  return (
    <Menu>
      <MenuButton as={Button} p={0} mr={4}>
        <IconButton icon={<Icon as={FaUser} boxSize={6} color={"black"} />} />
      </MenuButton>
      <MenuList w="50px" bg="white">
        <MenuItem bg="white">My Account</MenuItem>
        <MenuItem bg="white">My Orders </MenuItem>
        <MenuItem bg="white">Logout</MenuItem>
      </MenuList>
    </Menu>
  );
}

export default ProfileMenu;
