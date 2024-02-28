import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import { registerRequest } from "../services/auth";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    let response = await registerRequest(
      email,
      firstName,
      lastName,
      password,
      password2
    );
    if (response.ok) {
      console.log("Registration successful");
      navigate("/login");
    } else {
      alert("Registration failed");
    }
  };

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
                  value={email}
                  onChange={({ target }) => setEmail(target.value)}
                />
              </FormControl>
              <FormControl id="firstName" isRequired>
                <FormLabel>First Name</FormLabel>
                <Input
                  border="1px solid #cdddf7"
                  _hover={{ border: "1px solid #b4cffa" }}
                  type="text"
                  value={firstName}
                  onChange={({ target }) => setFirstName(target.value)}
                />
              </FormControl>
              <FormControl id="lastName" isRequired>
                <FormLabel>Last Name</FormLabel>
                <Input
                  border="1px solid #cdddf7"
                  _hover={{ border: "1px solid #b4cffa" }}
                  type="text"
                  value={lastName}
                  onChange={({ target }) => setLastName(target.value)}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  border="1px solid #cdddf7"
                  _hover={{ border: "1px solid #b4cffa" }}
                  type="password"
                  value={password}
                  onChange={({ target }) => setPassword(target.value)}
                />
              </FormControl>
              <FormControl id="password2" isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <Input
                  border="1px solid #cdddf7"
                  _hover={{ border: "1px solid #b4cffa" }}
                  type="password"
                  value={password2}
                  onChange={({ target }) => setPassword2(target.value)}
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
