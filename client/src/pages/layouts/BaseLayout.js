import { useState } from "react";

import { VStack, Spacer } from "@chakra-ui/react";

import Header from "../../components/header/Header";
import BreadcrumbBar from "../../components/BreadcrumbBar";
import Footer from "../../components/Footer";

function BaseLayout({ children, enableBreadcrumb = true }) {
  return (
    <VStack bg={"white"} minH="100vh" w="100%" p={0}>
      <Header />

      {enableBreadcrumb && <BreadcrumbBar />}
      {children}
      <Spacer />
      <Footer />
    </VStack>
  );
}

export default BaseLayout;
