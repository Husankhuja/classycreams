import UserDashboardLayout from "../layouts/UserDashboardLayout";

import { Text } from "@chakra-ui/react";

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
