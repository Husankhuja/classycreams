import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  Text,
} from "@chakra-ui/react";

const BreadcrumbBar = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

  return (
    <Box bg="brand.400" p="20px" w="100%" zIndex={1}>
      <Box maxW="1200px" mx="auto">
        <Breadcrumb color="black">
          <BreadcrumbItem>
            <BreadcrumbLink as={RouterLink} to="/" color="black">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            return (
              <BreadcrumbItem key={name} isCurrentPage={isLast}>
                <BreadcrumbLink as={RouterLink} to={routeTo} color="black">
                  {capitalize(name)}
                </BreadcrumbLink>
              </BreadcrumbItem>
            );
          })}
        </Breadcrumb>
        {/* This text could dynamically reflect the current page */}
        <Text fontSize="2xl" fontWeight="bold" color="black">
          {capitalize(pathnames[pathnames.length - 1] || "Home")}
        </Text>
      </Box>
    </Box>
  );
};

export default BreadcrumbBar;
