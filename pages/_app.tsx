import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Main from "../components/layout/main";
import theme from "../lib/theme";

const App = ({ Component, pageProps, router }: AppProps) => (
  <ChakraProvider theme={theme}>
      <Main router={router}>
        <Component {...pageProps} />
      </Main>
  </ChakraProvider>
);

export default App;
