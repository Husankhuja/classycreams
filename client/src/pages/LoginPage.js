import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { Link as RouterLink } from "react-router-dom";
import {
  Container,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Text,
  Link,
  Heading,
} from "@chakra-ui/react";

const LoginPage = () => {
  const { login } = useContext(AuthContext);

  return (
    <VStack p={10} h="100vh" justify="center">
      <Heading
        as="h1"
        fontSize="5xl"
        mb="4"
        fontFamily="satisfy"
        textShadow={"2px 5px #f2f2f2"}
        textAlign="center"
      >
        ClassyCreams
      </Heading>
      <Container
        p={4}
        maxW={"500px"}
        bg="white"
        pos="relative"
        boxShadow={"xl"}
        borderRadius={10}
        padding={10}
      >
        <VStack spacing={4} align="stretch">
          <Heading as="h1">Login</Heading>
        </VStack>
        <Box mt={4}>
          <form onSubmit={login}>
            <VStack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input
                  border="1px solid #cdddf7"
                  _hover={{ border: "1px solid #b4cffa" }}
                  type="email"
                  name="email"
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  border="1px solid #cdddf7"
                  _hover={{ border: "1px solid #b4cffa" }}
                  type="password"
                  name="password"
                />
              </FormControl>
              <Button type="submit" colorScheme="blue" width="full">
                Login
              </Button>
            </VStack>
          </form>
          <Text mt={4}>
            Don't have an account?{" "}
            <Link as={RouterLink} to="/register" color="teal.500">
              Sign up!
            </Link>
          </Text>
        </Box>
      </Container>
    </VStack>
  );
};

export default LoginPage;
