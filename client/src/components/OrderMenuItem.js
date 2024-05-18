import {
  Heading,
  Text,
  Image,
  HStack,
  VStack,
  Card,
  Spacer,
} from "@chakra-ui/react";

function OrderMenuItem({ item, onClick }) {
  return (
    <Card
      bg={"white"}
      width="400px"
      minW="300px"
      h="150px"
      p={4}
      onClick={onClick}
    >
      <HStack>
        <VStack align={"left"}>
          <Heading as="h3" size="md" color="black">
            {item.name}
          </Heading>
          <Text color="black">{item.description}</Text>
          <Spacer />
          <Text color="black">{item.basePrice}</Text>
        </VStack>
        <Spacer />

        <Image
          src={item.imageUrl}
          alt={item.name}
          bg="gray"
          boxSize={"120px"}
          borderRadius={"4px"}
        />
      </HStack>
    </Card>
  );
}

export default OrderMenuItem;
