// import * as React from "react";
// import { ChakraProvider } from "@chakra-ui/react";
// import { theme } from "./styles/themes/theme";
// import "./styles/App.css";
// import Loader from "./components/shared/Loader";

// const AppRoutes = React.lazy(() => import("./components/AppRoutes"));

// export const App = () => {
//   return (
//     <React.Suspense fallback={<Loader />}>
//       <ChakraProvider theme={theme}>
//         <AppRoutes />
//       </ChakraProvider>
//     </React.Suspense>
//   );
// };
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles/themes/theme";
import "./styles/App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./components/shared/Loader";
import { useEffect } from "react";

const AppRoutes = React.lazy(() => import("./components/AppRoutes"));

export const App = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
        AOS.refresh();
    }, []);
    return (
        <React.Suspense fallback={<Loader />}>
            <ChakraProvider theme={theme}>
                <AppRoutes />
            </ChakraProvider>
        </React.Suspense>
    );
};

