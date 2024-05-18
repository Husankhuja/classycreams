import { VStack, Link as ChakraLink } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

const ProfileSideBar = () => {
  const location = useLocation();

  const linkProps = (to) => ({
    as: Link,
    to: to,
    w: "100%",
    color: location.pathname === to ? "gray" : "black",
    isDisabled: location.pathname === to, // Disable the link if the pathname matches
    style: { pointerEvents: location.pathname === to ? "none" : "auto" }, // Prevent click events when disabled
  });

  return (
    <VStack>
      <ChakraLink {...linkProps("/account")}>Profile</ChakraLink>
      <ChakraLink {...linkProps("/account/orders")}>Orders</ChakraLink>
      <ChakraLink {...linkProps("/account/settings")}>Settings</ChakraLink>
    </VStack>
  );
};

export default ProfileSideBar;
