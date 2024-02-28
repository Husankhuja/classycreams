import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
  colors: {
    brand: {
      100: "#FFAEBC", // hot pink
      200: "#A0E7E5", // tiffany blue
      300: "#B4F8C8", // mint
      400: "#FBE7C6", // yellow
    },
  },
  styles: {
    global: () => ({
      body: {
        bg: "white",
        color: "black",
      },

      "::-webkit-scrollbar": {
        width: "5px",
      },
      "::-webkit-scrollbar-track": {
        backgroundColor: "darkgrey",
        width: "5px",
      },
      "::-webkit-scrollbar-thumb": {
        backgroundColor: "#d6dee1",
        borderRadius: "5px",
        border: "6px solid white",
        backgroundClip: "content-box",
      },
      "::-webkit-scrollbar-thumb:hover": {
        backgroundColor: "#a8bbbf",
      },
    }),
  },
};

const theme = extendTheme(config);

export default theme;
