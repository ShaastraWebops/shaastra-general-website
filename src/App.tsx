import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import theme from "./styles/themes/theme"
import AppRoutes from "./components/AppRoutes"

export const App = () => (
  <ChakraProvider theme={theme}>
    <AppRoutes />
  </ChakraProvider>
)
