import { useState, useEffect } from "react";
import LayoutPage from "./layouts/BaseLayout";
import CardGrid from "../components/CardGrid";
import { toppingRequest } from "../services/product";

import { VStack, Text } from "@chakra-ui/react";

function ToppingPage() {
  const [toppings, setToppings] = useState([]);

  useEffect(() => {
    toppingRequest()
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToppings(data);
      });
  }, []);

  return (
    <LayoutPage>
      <VStack py={8} justify={"center"}>
        <Text fontSize={"large"} color="black">
          Choose from our various different toppings.
        </Text>
        <CardGrid items={toppings} />
      </VStack>
    </LayoutPage>
  );
}

export default ToppingPage;
