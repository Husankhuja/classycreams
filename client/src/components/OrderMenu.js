import OrderMenuItem from "./OrderMenuItem";

import { Grid, Text } from "@chakra-ui/react";

function OrderMenu({ products, setProduct }) {
  if (!products.length) {
    return <Text>No products found</Text>;
  }
  return (
    <Grid templateColumns={{ sm: "1fr", lg: "1fr 1fr" }} gap={8}>
      {products.map((product) => (
        <OrderMenuItem item={product} onClick={() => setProduct(product)} />
      ))}
    </Grid>
  );
}

export default OrderMenu;
