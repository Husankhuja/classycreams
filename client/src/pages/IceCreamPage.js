import { useState, useEffect } from "react";
import LayoutPage from "./layouts/BaseLayout";
import CardGrid from "../components/CardGrid";
import { iceCreamRequest } from "../services/product";

import { VStack, Text } from "@chakra-ui/react";

function IceCreamPage() {
  const [iceCreams, setIceCreams] = useState([]);

  useEffect(() => {
    iceCreamRequest()
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIceCreams(data);
      });
  }, []);

  return (
    <LayoutPage>
      <VStack py={8} justify={"center"}>
        <Text fontSize={"large"} color="black">
          Choose from our various different flavors of Ice Creams.
        </Text>
        <CardGrid items={iceCreams} />
      </VStack>
    </LayoutPage>
  );
}

export default IceCreamPage;
