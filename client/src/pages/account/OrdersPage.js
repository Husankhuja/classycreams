import UserDashboardLayout from "../layouts/UserDashboardLayout";

import { Text } from "@chakra-ui/react";

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
