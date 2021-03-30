import { extendTheme } from "@chakra-ui/react";

const themeChakra = extendTheme({
  styles: {
    global: {
      "html, body": {
        fontSize: "16px",
        fontFamily: "Poppins",
        padding: 0,
        margin: 0,
        boxSizing: "border-box",
      },
    },
  },
});

export default themeChakra;
