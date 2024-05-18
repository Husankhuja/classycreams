import { Box, Text, Center } from "@chakra-ui/react";

function Footer() {
  return (
    <Box as="footer" p={4} mt={0} bg="lightgray" w="100%" pos="relative">
      <Center>
        <Text>© Husankhuja Nizomkhujaev 2024</Text>
      </Center>
    </Box>
  );
}

export default Footer;
