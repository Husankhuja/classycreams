import { Grid } from "@chakra-ui/react";

import Card from "./Card";

function CardGrid({ items }) {
  return (
    <Grid
      templateColumns={{ sm: "1fr", md: "1fr 1fr", lg: "repeat(3, 1fr)" }}
      maxW="1200px"
    >
      {items.map((item, key) => (
        <Card item={item} />
      ))}
    </Grid>
  );
}

export default CardGrid;
