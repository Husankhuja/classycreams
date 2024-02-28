import { useState, useEffect } from "react";

import { productRequest } from "../services/product";
import LayoutPage from "./layouts/BaseLayout";
import OrderModal from "../components/OrderModal";
import OrderMenu from "../components/OrderMenu";

import { Text, VStack, useDisclosure } from "@chakra-ui/react";

function OrderMenuPage() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    productRequest()
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  const closeModal = () => {
    onClose();
    setProduct(null);
  };

  const openModal = (product) => {
    setProduct(product);
    onOpen();
  };

  return (
    <LayoutPage>
      <VStack py={8} justify={"center"} spacing={8}>
        <Text fontSize={"3xl"} color="black">
          Products
        </Text>

        <Text fontSize={"x-large"} color="black">
          Ice-cream cones and cups
        </Text>
        <OrderMenu
          products={products.filter((product) =>
            ["CONE", "CUP"].includes(product.type)
          )}
          setProduct={openModal}
        />

        <Text fontSize={"x-large"} color="black">
          Cake
        </Text>
        <OrderMenu
          products={products.filter((product) =>
            ["CAKE"].includes(product.type)
          )}
          setProduct={openModal}
        />

        <Text fontSize={"x-large"} color="black">
          Milkshake
        </Text>
        <OrderMenu
          products={products.filter((product) =>
            ["MILKSHAKE"].includes(product.type)
          )}
          setProduct={openModal}
        />
      </VStack>
      <OrderModal product={product} isOpen={isOpen} closeModal={closeModal} />
    </LayoutPage>
  );
}

export default OrderMenuPage;
