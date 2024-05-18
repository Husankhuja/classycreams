import { useContext } from "react";

import UserDashboardLayout from "../layouts/UserDashboardLayout";

import AuthContext from "../../contexts/AuthContext";

import ProfileSideBar from "../../components/ProfileSideBar";

import {
  Grid,
  GridItem,
  Box,
  HStack,
  VStack,
  Heading,
  Text,
  Divider,
  Spacer,
  Button,
  Container,
  Link as ChakraLink,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

const AccountPage = () => {
  const { user } = useContext(AuthContext);
  return (
    <UserDashboardLayout>
      <Text fontSize="x-large" mb={8}>
        Profile Information
      </Text>
      <VStack spacing={4} align="left">
        <Text fontSize="large">First Name: {user.firstName}</Text>
        <Text fontSize="large">Last Name: {user.lastName}</Text>
        <Text fontSize="large">Email: {user.email} </Text>
      </VStack>
      <Button mt={8}>Edit Profile</Button>
    </UserDashboardLayout>
  );
};

export default AccountPage;
