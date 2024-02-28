import { useState, useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Text,
  Link,
  Heading,
  Container,
} from "@chakra-ui/react";
import AuthContext from "../contexts/AuthContext";

const RegisterPage = () => {
  const { register } = useContext(AuthContext);

  return (
    <VStack p={10} minH="100vh" justify="center">
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
          <Heading as="h1">Register</Heading>
        </VStack>
        <Box mt={4}>
          <form onSubmit={register}>
            <VStack spacing={4}>
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  border="1px solid #cdddf7"
                  _hover={{ border: "1px solid #b4cffa" }}
                  type="email"
                />
              </FormControl>
              <FormControl id="firstName" isRequired>
                <FormLabel>First Name</FormLabel>
                <Input
                  border="1px solid #cdddf7"
                  _hover={{ border: "1px solid #b4cffa" }}
                  type="text"
                />
              </FormControl>
              <FormControl id="lastName" isRequired>
                <FormLabel>Last Name</FormLabel>
                <Input
                  border="1px solid #cdddf7"
                  _hover={{ border: "1px solid #b4cffa" }}
                  type="text"
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  border="1px solid #cdddf7"
                  _hover={{ border: "1px solid #b4cffa" }}
                  type="password"
                />
              </FormControl>
              <FormControl id="password2" isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <Input
                  border="1px solid #cdddf7"
                  _hover={{ border: "1px solid #b4cffa" }}
                  type="password"
                />
              </FormControl>
              <Button type="submit" colorScheme="blue" width="full">
                Register
              </Button>
            </VStack>
          </form>
          <Text mt={4}>
            Already have an account?{" "}
            <Link as={RouterLink} to="/login" color="teal.500">
              Login!
            </Link>
          </Text>
        </Box>
      </Container>
    </VStack>
  );
};

export default RegisterPage;
