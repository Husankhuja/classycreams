import { useContext } from "react";

import UserDashboardLayout from "../layouts/UserDashboardLayout";

import AuthContext from "../../contexts/AuthContext";

import { VStack, Text, Button } from "@chakra-ui/react";

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
