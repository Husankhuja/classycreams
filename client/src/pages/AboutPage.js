import LayoutPage from "./layouts/BaseLayout";

import {
  Container,
  VStack,
  Text,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";

const AboutPage = () => {
  return (
    <LayoutPage>
      <Container
        as="main"
        maxW="1200px"
        margin="100px auto"
        padding="20px"
        bg="white"
      >
        <VStack spacing={8}>
          <Text
            as="h1"
            fontSize="5xl"
            fontWeight="bold"
            fontFamily="satisfy"
            color="brand.200"
          >
            About Us
          </Text>
          <Text as="p" fontSize="xl" color="black">
            Welcome to Classy Creams, the ice cream shop where sophistication
            meets sweetness. Our goal is to provide our customers with a refined
            ice cream experience that is both indulgent and sophisticated. We
            use only the finest, locally sourced ingredients to create our
            unique and delicious ice cream flavors. Our team of skilled ice
            cream artisans works tirelessly to create new and innovative flavors
            that are sure to tantalize your taste buds.
          </Text>
          <Text as="p" fontSize="xl" color="black">
            At Classy Creams, we believe that presentation is just as important
            as flavor. That's why we take great care to create ice cream
            masterpieces that are as visually stunning as they are delicious.
            Our unique ice cream creations are served in elegant, high-quality
            bowls, and are garnished with only the finest ingredients. Whether
            you're looking to indulge in a classic flavor like mint chocolate
            chip, or try one of our more adventurous options like raspberry
            rose, our ice cream will leave you feeling satisfied and
            sophisticated. So come in, take a seat, and treat yourself to the
            most refined ice cream experience in town.
          </Text>
        </VStack>
      </Container>
    </LayoutPage>
  );
};

export default AboutPage;
