import { useState } from "react";

import { VStack, Spacer, Box } from "@chakra-ui/react";

import Header from "../../components/header/Header";
import BreadcrumbBar from "../../components/BreadcrumbBar";
import Footer from "../../components/Footer";

function BaseLayout({ children, enableBreadcrumb = true }) {
  return (
    <VStack bg={"white"} minH="100vh" w="100%" p={0} spacing={0}>
      <Header />
      {enableBreadcrumb && <BreadcrumbBar />}
      <VStack w="100%" flex={1} h="fit-content" p={0}>
        {children}
      </VStack>
      <Footer />
    </VStack>
  );
}

export default BaseLayout;
