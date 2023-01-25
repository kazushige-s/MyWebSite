import "@/src/styles/globals.css";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";

function App({ Component, pageProps }: AppProps) {
  // const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  // const toggleColorScheme = (value?: ColorScheme) =>
  //   setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <div>
      <Head>
        <title>My Web Site</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      {/* <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      > */}
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            fontFamily: "Inter, sans-serif",
            colorScheme: "light",
          }}
        >
          <Component {...pageProps} />
        </MantineProvider>
      {/* </ColorSchemeProvider> */}
    </div>
  );
}

export default App;