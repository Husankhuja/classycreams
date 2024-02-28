import { useState, useEffect } from "react";
import LayoutPage from "./layouts/BaseLayout";
import CardGrid from "../components/CardGrid";
import { productRequest } from "../services/product";

import { Container, Box, Text, VStack } from "@chakra-ui/react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";

function ProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productRequest()
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  return (
    <LayoutPage>
      <VStack py={8} justify={"center"}>
        <Text fontSize={"large"} color="black">
          Choose from our various different Products that you can add ice cream
          and flavors on to.
        </Text>
        <CardGrid items={products} />
      </VStack>
    </LayoutPage>
  );
}

export default ProductPage;
