import { extendTheme } from "@chakra-ui/react";

const themeChakra = extendTheme({
  styles: {
    global: {
      "html, body": {
        fontSize: "sm",
        fontFamily: "Poppins",
        padding: 0,
        margin: 0,
        boxSizing: "border-box",
      },
    },
  },
  colors: {
    franco: "#0070f3",
  },
});

export default themeChakra;
