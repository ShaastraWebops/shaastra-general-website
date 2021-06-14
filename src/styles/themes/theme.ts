import { extendTheme } from "@chakra-ui/react";
// import  {boxStyles as Box} from "./components/boxStyles"

const theme = extendTheme({
    colors: {
        primary: "#116466",
        secondary: "#2c3531",
        hightight: "#ffcb9a",
        darkHighlight: "#d9b08c",
        link: "#d1e8e2",
    },
    components: {
        Box: {
            baseStyle: ({ colorMode }) => ({
                bg: colorMode === "dark" ? "green.300" : "green.500",
                color: colorMode === "dark" ? "gray.800" : "white",
                textTransform: "uppercase",
                fontWeight: "semibold",
                letterSpacing: "0.02em",
                padding: "4px",
                borderRadius: "2px",
                fontSize: "12px",
              }),
        }
    }
})

export default theme