import { mode, whiten } from "@chakra-ui/theme-tools";

export const drawerStyles = {
    baseStyle: (props) => ({
        dialog: {
          bg: mode("white", "primary.450")(props),
        },
      }),
    sizes: {},
    variants: {
        primary: (props) => ({
          bgColor: "#ffffff", 
          colorScheme: "primary"
        }),
    },
    defaultProps: {},
}