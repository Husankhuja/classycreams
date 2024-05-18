import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import BaseLayout from "./BaseLayout";

import ProfileSideBar from "../../components/ProfileSideBar";
import { Grid, GridItem } from "@chakra-ui/react";

function UserDashboardLayout({ children, showSidebar = true }) {
  const navigate = useNavigate();
  const { user, loading } = useContext(AuthContext);
  useEffect(() => {
    if (loading) return;
    if (!user) {
      // redirect to login page
      navigate("/login");
    } else if (user.role !== "USER") {
      // redirect to home page
      alert("You must be a User to access this page");
      navigate("/");
    }
  }, [user, loading]);
  return (
    <BaseLayout enableBreadcrumb={true}>
      {loading && <div>Loading...</div>}
      <Grid
        w="100%"
        maxW="1200px"
        flex={1}
        minH="100%"
        p={8}
        gap={0}
        templateColumns={{ base: "1fr", lg: "200px 1fr" }}
        templateRows={{ base: "auto 1fr", lg: "1fr" }}
        templateAreas={{
          base: `"sidebar" "content"`,
          lg: `"sidebar content"`,
        }}
      >
        {showSidebar && (
          <GridItem
            px={8}
            py={{ base: 8, lg: 0 }}
            area="sidebar"
            borderRight={{ lg: "1px solid lightgray", base: "none" }}
            borderBottom={{ base: "1px solid lightgray", lg: "none" }}
          >
            <ProfileSideBar />
          </GridItem>
        )}
        <GridItem px={8} py={{ base: 8, lg: 0 }} area="content">
          {children}
        </GridItem>
      </Grid>
    </BaseLayout>
  );
}

export default UserDashboardLayout;
