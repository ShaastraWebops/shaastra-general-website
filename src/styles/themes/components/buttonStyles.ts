import { mode, whiten } from "@chakra-ui/theme-tools";

export const buttonStyles = {
    baseStyle:(props) => ({
            bg: mode("secondary", whiten("primary", 20))(props),
    }),
    sizes: {},
    variants: {
        // primary: (props) => ({
        //   bg: "primary", // Notice the use of color directly here
        //   color: "white",
        //   _hover: {
        //     // Notice the use of `mode` function to change color 
        //     // based on theme color mode
        //     bg: mode(whiten("primary", 20), darken("primary", 20))(props),
        //     boxShadow: "md",
        //   },
        // }),
    },
    defaultProps: {},
}