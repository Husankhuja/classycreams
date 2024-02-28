import LayoutPage from "./layouts/BaseLayout";
import hero from "../assets/hero.jpg";
import icecream from "../assets/ai_icecream.webp";

import {
  Box,
  Container,
  Center,
  VStack,
  HStack,
  Stack,
  Heading,
  Button,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <LayoutPage enableBreadcrumb={false}>
      <Box w="100%" maxW="1200px" h="100%" p={4}>
        <VStack w="100%">
          <Box
            background={`url(${icecream}) center / cover no-repeat`}
            w="100%"
            h={["50vh", "60vh"]}
            borderRadius={8}
            boxShadow={"lg"}
          >
            <Center h="100%">
              <VStack
                bg="transparent"
                h={["40vh", "45vh", "50vh"]}
                w={["40vh", "45vh", "50vh"]}
                align="center"
                justify="center"
                backdropFilter="auto"
                backdropContrast="20%"
                p={10}
                spacing={4}
              >
                <Heading
                  as="h2"
                  fontSize="3xl"
                  textAlign="center"
                  p={0}
                  color="white"
                >
                  Create your own Ice Cream.
                </Heading>
                <ChakraLink as={Link} to="/order" w="100%">
                  <Button variant="outline" size="lg" w="100%">
                    Create Now
                  </Button>
                </ChakraLink>
              </VStack>
            </Center>
          </Box>
          <Stack
            direction={{ base: "column", lg: "row" }}
            w="100%"
            h={{ base: "auto", lg: "30vw" }}
            maxH={{ base: "auto", lg: "400px" }}
            spacing={4}
            mt={8}
          >
            <VStack
              boxSize="100%"
              bg="brand.100"
              align="center"
              justify="center"
              minH="200px"
            >
              <Text>Checkout our products.</Text>
              <ChakraLink as={Link} to="/products">
                <Button>Products</Button>
              </ChakraLink>
            </VStack>
            <VStack
              boxSize="100%"
              minH="200px"
              bg="brand.200"
              align="center"
              justify="center"
            >
              <Text>Checkout our Ice Creams.</Text>
              <ChakraLink as={Link} to="/ice-creams">
                <Button>Ice Creams</Button>
              </ChakraLink>
            </VStack>
            <VStack
              boxSize="100%"
              bg="brand.300"
              align="center"
              justify="center"
              minH="200px"
            >
              <Text>Checkout our Toppings.</Text>
              <ChakraLink as={Link} to="/toppings">
                <Button>Toppings</Button>
              </ChakraLink>
            </VStack>
          </Stack>
        </VStack>
      </Box>
    </LayoutPage>
  );
};

export default HomePage;
