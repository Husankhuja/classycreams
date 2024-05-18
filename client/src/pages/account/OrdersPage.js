import UserDashboardLayout from "../layouts/UserDashboardLayout";

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

const OrdersPage = () => {
  return (
    <UserDashboardLayout>
      <Text fontSize="x-large" mb={8}>
        My Orders
      </Text>
    </UserDashboardLayout>
  );
};

export default OrdersPage;
