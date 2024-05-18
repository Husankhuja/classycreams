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

const SettingsPage = () => {
  return (
    <UserDashboardLayout>
      <Text fontSize="x-large" mb={8}>
        Settings
      </Text>
    </UserDashboardLayout>
  );
};

export default SettingsPage;
