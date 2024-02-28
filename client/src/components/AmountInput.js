import { Grid, Box, Text } from "@chakra-ui/react";

function AmountInput({
  onDecrement,
  onIncrement,
  disableDecrement,
  disableIncrement,
  quantity,
}) {
  const buttonStyle = {
    bg: "#ebedf0",
    color: "#4b4f56",
    _hover: { bg: "#ebedf0" },
    _active: {
      bg: "#dddfe2",
      transform: "scale(0.98)",
      borderColor: "#bec3c9",
    },
    _focus: {
      boxShadow:
        "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
    },
  };

  return (
    <Grid
      templateColumns="1fr 1fr 1fr"
      bg="#f5f6f7"
      width="75px"
      h="25px"
      borderRadius="12px"
    >
      <Box
        textAlign="center"
        onClick={onDecrement}
        isDisabled={disableDecrement}
        cursor="pointer"
        borderLeftRadius="12px"
        borderRight="1px solid white"
        color="#4b4f56"
        _hover={{ bg: "#ebedf0" }}
        _active={{
          bg: "#dddfe2",
          transform: "scale(0.98)",
          borderColor: "#bec3c9",
        }}
        _focus={{
          boxShadow:
            "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
        }}
        _disabled={{
          bg: "#ebedf0",
          color: "#a8a8a8", // Example disabled color, adjust as needed
          cursor: "not-allowed",
        }}
      >
        -
      </Box>
      <Text textAlign="center">{quantity}</Text>
      <Box
        textAlign="center"
        onClick={onIncrement}
        isDisabled={disableIncrement}
        cursor="pointer"
        color="#4b4f56"
        borderLeft="1px solid white"
        borderRightRadius="12px"
        _hover={{ bg: "#ebedf0" }}
        _active={{
          bg: "#dddfe2",
          transform: "scale(0.98)",
          borderColor: "#bec3c9",
        }}
        _focus={{
          boxShadow:
            "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
        }}
      >
        +
      </Box>
    </Grid>
  );
}

export default AmountInput;
